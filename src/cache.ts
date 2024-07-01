import type { Context } from "./types";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, basename } from "pathe";
import { debug, isWritable, md5 } from "./utils";

const CACHE_VERSION = "8";

export function getCache(
  ctx: Context,
  filename: string | undefined,
  source: string,
  async: boolean,
  get: () => string,
): string {
  if (!ctx.opts.fsCache || !filename) {
    return get();
  }

  // Compute inline hash for source
  const sourceHash = ` /* v${CACHE_VERSION}-${md5(source, 16)} */`;

  // Compute cache file path
  const cacheName =
    basename(dirname(filename)) +
    "-" +
    basename(filename) +
    "." +
    md5(filename) +
    (async ? ".mjs" : ".cjs");
  const cacheDir = ctx.opts.fsCache as string;
  const cacheFilePath = join(cacheDir, cacheName);

  if (existsSync(cacheFilePath)) {
    const cacheSource = readFileSync(cacheFilePath, "utf8");
    if (cacheSource.endsWith(sourceHash)) {
      debug(ctx, "[cache hit]", filename, "~>", cacheFilePath);
      return cacheSource;
    }
  }

  debug(ctx, "[cache miss]", filename);
  const result = get();

  if (!result.includes("__JITI_ERROR__")) {
    writeFileSync(cacheFilePath, result + sourceHash, "utf8");
  }

  return result;
}

export function prepareCacheDir(ctx: Context) {
  if (ctx.opts.fsCache === true) {
    ctx.opts.fsCache = getCacheDir();
  }
  if (ctx.opts.fsCache) {
    try {
      mkdirSync(ctx.opts.fsCache as string, { recursive: true });
      if (!isWritable(ctx.opts.fsCache)) {
        throw new Error("directory is not writable!");
      }
    } catch (error: any) {
      debug(ctx, "Error creating cache directory at ", ctx.opts.fsCache, error);
      ctx.opts.fsCache = false;
    }
  }
}

export function getCacheDir() {
  let _tmpDir = tmpdir();

  // Workaround for pnpm setting an incorrect `TMPDIR`.
  // Set `JITI_RESPECT_TMPDIR_ENV` to a truthy value to disable this workaround.
  // https://github.com/pnpm/pnpm/issues/6140
  // https://github.com/unjs/jiti/issues/120
  if (
    process.env.TMPDIR &&
    _tmpDir === process.cwd() &&
    !process.env.JITI_RESPECT_TMPDIR_ENV
  ) {
    const _env = process.env.TMPDIR;
    delete process.env.TMPDIR;
    _tmpDir = tmpdir();
    process.env.TMPDIR = _env;
  }

  return join(_tmpDir, "node-jiti");
}
