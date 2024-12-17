# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## v1.21.7

[compare changes](https://github.com/unjs/jiti/compare/v1.21.6...v1.21.7)

### 🩹 Fixes

- Use native require cache of loaded entries only (v1) ([#349](https://github.com/unjs/jiti/pull/349))

### 🏡 Chore

- Update test ([716777e](https://github.com/unjs/jiti/commit/716777e))
- Update deps ([c3d53c4](https://github.com/unjs/jiti/commit/c3d53c4))
- Add tag to release script ([3fa9807](https://github.com/unjs/jiti/commit/3fa9807))

### 🤖 CI

- Test against node v22 (v1) ([#350](https://github.com/unjs/jiti/pull/350))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.21.6

[compare changes](https://github.com/unjs/jiti/compare/v1.21.5...v1.21.6)

### 🩹 Fixes

- Use internal cached modules only if loaded ([#247](https://github.com/unjs/jiti/pull/247))

### ❤️ Contributors

- Pooya Parsa <pyapar@gmail.com>

## v1.21.5

[compare changes](https://github.com/unjs/jiti/compare/v1.21.4...v1.21.5)

### 🩹 Fixes

- Revert #245 ([#246](https://github.com/unjs/jiti/pull/246), [#245](https://github.com/unjs/jiti/issues/245))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.21.4

[compare changes](https://github.com/unjs/jiti/compare/v1.21.3...v1.21.4)

### 🩹 Fixes

- Avoid `node:` protocol for node 14 compatibility ([5d877de](https://github.com/unjs/jiti/commit/5d877de))
- Use internal cached modules only if loaded ([#245](https://github.com/unjs/jiti/pull/245))

### 🏡 Chore

- Update deps ([5e11181](https://github.com/unjs/jiti/commit/5e11181))
- Enable autofix ci for v1 ([5e26706](https://github.com/unjs/jiti/commit/5e26706))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.21.3

[compare changes](https://github.com/unjs/jiti/compare/v1.21.2...v1.21.3)

### 🩹 Fixes

- Update mlly to ^1.7.1 ([9adbcb3](https://github.com/unjs/jiti/commit/9adbcb3))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.21.2

[compare changes](https://github.com/unjs/jiti/compare/v1.21.1...v1.21.2)

### 🩹 Fixes

- Pin mlly to 1.4.2 ([#237](https://github.com/unjs/jiti/pull/237))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.21.1

[compare changes](https://github.com/unjs/jiti/compare/v1.21.0...v1.21.1)

### 🏡 Chore

- Update dependencies ([0bd991b](https://github.com/unjs/jiti/commit/0bd991b))
- Update dependencies ([cfb106c](https://github.com/unjs/jiti/commit/cfb106c))
- Update to eslint v9 ([c11d953](https://github.com/unjs/jiti/commit/c11d953))
- Update deps and lockfile ([95aa249](https://github.com/unjs/jiti/commit/95aa249))
- Run ci against 18 and 22 ([65b4067](https://github.com/unjs/jiti/commit/65b4067))
- Lint ([6f3bd76](https://github.com/unjs/jiti/commit/6f3bd76))

### 🤖 CI

- Skip extra checks ([8fe6417](https://github.com/unjs/jiti/commit/8fe6417))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.21.0

[compare changes](https://github.com/unjs/jiti/compare/v1.20.0...v1.21.0)

### 🚀 Enhancements

- Add `jiti.import` function for async import ([#170](https://github.com/unjs/jiti/pull/170))
- Add forward compatible (stub) types for `jiti.import` ([#175](https://github.com/unjs/jiti/pull/175))

### 🏡 Chore

- Enable ci for `v1` branch ([0200f63](https://github.com/unjs/jiti/commit/0200f63))
- Add banner about v1 ([cc742cb](https://github.com/unjs/jiti/commit/cc742cb))
- Add `v1` to renovate branches ([2358645](https://github.com/unjs/jiti/commit/2358645))
- Update dependencies ([fe8b267](https://github.com/unjs/jiti/commit/fe8b267))
- Fix eslint warning ([c5c7220](https://github.com/unjs/jiti/commit/c5c7220))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Anthony Fu <anthonyfu117@hotmail.com>

## v1.20.0

[compare changes](https://github.com/unjs/jiti/compare/v1.19.3...v1.20.0)

### 🚀 Enhancements

- Experimental native bun support ([#156](https://github.com/unjs/jiti/pull/156))

### 💅 Refactors

- Replace proposal babel plugins with ecmascript transforms ([1fb4d8c](https://github.com/unjs/jiti/commit/1fb4d8c))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.19.3

[compare changes](https://github.com/unjs/jiti/compare/v1.19.2...v1.19.3)

### 🩹 Fixes

- Only replace `import.meta.env` ([c6895d6](https://github.com/unjs/jiti/commit/c6895d6))

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.19.2

[compare changes](https://github.com/unjs/jiti/compare/v1.19.1...v1.19.2)

### 🩹 Fixes

- Pass custom extensions to esm resolver ([#152](https://github.com/unjs/jiti/pull/152))
- Support `import.meta.env` and `import.meta.env?.prop` ([#159](https://github.com/unjs/jiti/pull/159))

### 🏡 Chore

- Update dependencies ([09c1e7d](https://github.com/unjs/jiti/commit/09c1e7d))
- Add autofix ci ([670c1f2](https://github.com/unjs/jiti/commit/670c1f2))
- Update dependencies ([2325b70](https://github.com/unjs/jiti/commit/2325b70))
- Upgrade dependencies ([f18508c](https://github.com/unjs/jiti/commit/f18508c))

### ✅ Tests

- **typescript:** Remove type-only namespace access ([de73bd9](https://github.com/unjs/jiti/commit/de73bd9))

### 🎨 Styles

- Format with prettier v3 ([fe61c6e](https://github.com/unjs/jiti/commit/fe61c6e))
- Format report with prettier ([6098284](https://github.com/unjs/jiti/commit/6098284))

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Anhao

## v1.19.1

[compare changes](https://github.com/unjs/jiti/compare/v1.19.0...v1.19.1)

### 🩹 Fixes

- Read cache from `evalOptions` ([2c1765e](https://github.com/unjs/jiti/commit/2c1765e))

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.19.0

[compare changes](https://github.com/unjs/jiti/compare/v1.18.2...v1.19.0)

### 🚀 Enhancements

- Expose `jiti.evalModule` ([#146](https://github.com/unjs/jiti/pull/146))

### 🩹 Fixes

- Handle nested circular dependencies ([#142](https://github.com/unjs/jiti/pull/142))
- **types:** Export `JITIOptions` and `TreansformOptions` ([#132](https://github.com/unjs/jiti/pull/132))

### 📖 Documentation

- Update badges ([6124894](https://github.com/unjs/jiti/commit/6124894))

### 🏡 Chore

- Lint code ([fbd46e4](https://github.com/unjs/jiti/commit/fbd46e4))
- Update snapshots for node 18 ([c51f049](https://github.com/unjs/jiti/commit/c51f049))
- Update dependencies ([9aedf07](https://github.com/unjs/jiti/commit/9aedf07))
- Update destr import ([5b1c1ca](https://github.com/unjs/jiti/commit/5b1c1ca))
- Fix vitest ([c6798c6](https://github.com/unjs/jiti/commit/c6798c6))
- Speficy env types ([37e0692](https://github.com/unjs/jiti/commit/37e0692))
- Lint ([37b6b7a](https://github.com/unjs/jiti/commit/37b6b7a))
- Fix development in windows ([#135](https://github.com/unjs/jiti/pull/135))

### ✅ Tests

- Mask node version in snapshots ([64cf136](https://github.com/unjs/jiti/commit/64cf136))

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Joaquín Sánchez ([@userquin](http://github.com/userquin))
- Sébastien Chopin <seb@nuxtjs.com>

## v1.18.2

[compare changes](https://github.com/unjs/jiti/compare/v1.17.2...v1.18.1)


### 🚀 Enhancements

  - Allow resolving `.ts` files with `.js` extension ([#128](https://github.com/unjs/jiti/pull/128))
  - Support `import.meta.env` ([#129](https://github.com/unjs/jiti/pull/129))

### 🔥 Performance

  - Use extension resolutions only for parent typescript files ([27a9888](https://github.com/unjs/jiti/commit/27a9888))

### 🩹 Fixes

  - Handle parretns with `c ([mts` extension too](https://github.com/unjs/jiti/commit/mts` extension too))

### 🏡 Chore

  - Update lockfile ([e91d3a1](https://github.com/unjs/jiti/commit/e91d3a1))

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Db3f994 <Pooya Parsa>
- Guillaume Chau ([@Akryum](http://github.com/Akryum))

## v1.17.2

[compare changes](https://github.com/unjs/jiti/compare/v1.17.1...v1.17.2)


### 🩹 Fixes

  - Add support to emit decorator metadata ([#119](https://github.com/unjs/jiti/pull/119))
  - Use inline require cache to avoid circular dependencies ([#125](https://github.com/unjs/jiti/pull/125))
  - Workaround for pnpm and `TMPDIR` ([#123](https://github.com/unjs/jiti/pull/123))

### 🏡 Chore

  - Update lockfile ([6f8610f](https://github.com/unjs/jiti/commit/6f8610f))
  - Update release script ([26b7003](https://github.com/unjs/jiti/commit/26b7003))

### ✅ Tests

  - Add typescript satisfies fixture ([#107](https://github.com/unjs/jiti/pull/107))

### 🎨 Styles

  - Format with prettier ([42669e5](https://github.com/unjs/jiti/commit/42669e5))

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Jonas Thelemann ([@dargmuesli](http://github.com/dargmuesli))
- Sabin Marcu ([@sabinmarcu](http://github.com/sabinmarcu))
- Peter <peter.placzek1996@gmail.com>

## v1.17.1

[compare changes](https://github.com/unjs/jiti/compare/v1.17.0...v1.17.1)


### 🩹 Fixes

  - Prefer `require` condition first in esm resolve mode ([#117](https://github.com/unjs/jiti/pull/117))

### 💅 Refactors

  - Use `mkdirSync` from `node:fs` instead of `mkdirp` ([413d3c3](https://github.com/unjs/jiti/commit/413d3c3))

### 🏡 Chore

  - Update dependencies ([f532c57](https://github.com/unjs/jiti/commit/f532c57))
  - Add missing semi ([a9c2876](https://github.com/unjs/jiti/commit/a9c2876))
  - Switch to changelogen for releases ([bd4bd8c](https://github.com/unjs/jiti/commit/bd4bd8c))

### ❤️  Contributors

- Pooya Parsa <pooya@pi0.io>

## [1.17.0](https://github.com/unjs/jiti/compare/v1.16.2...v1.17.0) (2023-02-08)


### Features

* add support for `.mts` ([#112](https://github.com/unjs/jiti/issues/112)) ([94ab3f2](https://github.com/unjs/jiti/commit/94ab3f2bb03e5805ff97927579a1729e6eeaa8e5))
* support import assertions and `.json` imports with `.default` property ([#114](https://github.com/unjs/jiti/issues/114)) ([08a9a47](https://github.com/unjs/jiti/commit/08a9a47daa6ba0fb0f2ced285703dcc446ef8375))

### [1.16.2](https://github.com/unjs/jiti/compare/v1.16.1...v1.16.2) (2023-01-10)

### [1.16.1](https://github.com/unjs/jiti/compare/v1.16.0...v1.16.1) (2023-01-03)

## [1.16.0](https://github.com/unjs/jiti/compare/v1.15.0...v1.16.0) (2022-09-19)


### Features

* support export namespace from syntax (resolves [#84](https://github.com/unjs/jiti/issues/84)) ([ebb59cf](https://github.com/unjs/jiti/commit/ebb59cf96c9d9809fc7e81f708028d0861fd329e))


### Bug Fixes

* **deps:** update pathe ([6231320](https://github.com/unjs/jiti/commit/623132069d90520af2227e9fd851e8d728281ef4))

## [1.15.0](https://github.com/unjs/jiti/compare/v1.14.0...v1.15.0) (2022-09-06)


### Features

* basic alias support (resolves [#37](https://github.com/unjs/jiti/issues/37)) ([cab50cc](https://github.com/unjs/jiti/commit/cab50cc0ebba4934c010857241d7cc72e151fd86))
* options for `nativeModules` and `transformModules` ([64151af](https://github.com/unjs/jiti/commit/64151afdda6543173615574ba8c44c893fb411e5))


### Bug Fixes

* manually exclude `typescript` from transpilation ([dbd3f22](https://github.com/unjs/jiti/commit/dbd3f220feabe148d64088fd2d0106672bca96f2))
* use pathe for path resolution ([000c6ad](https://github.com/unjs/jiti/commit/000c6ade6b8071d4144a702ea026b56800ef6b08)), closes [#74](https://github.com/unjs/jiti/issues/74)

## [1.14.0](https://github.com/unjs/jiti/compare/v1.13.0...v1.14.0) (2022-06-20)


### Features

* detect native esm using `type: module` ([#67](https://github.com/unjs/jiti/issues/67)) ([986f146](https://github.com/unjs/jiti/commit/986f146eed92ef1f7e469b35be012223ffcd62a3))


### Bug Fixes

* use inlined import meta plugin to inject url ([#68](https://github.com/unjs/jiti/issues/68)) ([b52bb17](https://github.com/unjs/jiti/commit/b52bb173be67bda83c3723ef46ebce64559e2797))

## [1.13.0](https://github.com/unjs/jiti/compare/v1.12.15...v1.13.0) (2022-02-18)


### Features

* support inline sourceMaps for easier debugging ([#46](https://github.com/unjs/jiti/issues/46)) ([888db00](https://github.com/unjs/jiti/commit/888db0075f0c71b643f7d63a6a0f31cae66e6ff9))


### Bug Fixes

* use backslash to make import maps working in windows ([e8696c7](https://github.com/unjs/jiti/commit/e8696c7edd2f8f58d3bf7835bd2eb04498880833))

### [1.12.15](https://github.com/unjs/jiti/compare/v1.12.14...v1.12.15) (2022-01-28)


### Bug Fixes

* force transpile `config` package ([2ddcb8a](https://github.com/unjs/jiti/commit/2ddcb8a7be24d051cc0edf8d00ac3568858b54b2)), closes [#56](https://github.com/unjs/jiti/issues/56)

### [1.12.14](https://github.com/unjs/jiti/compare/v1.12.13...v1.12.14) (2022-01-26)


### Bug Fixes

* move esm resolve behind a flag ([60e094c](https://github.com/unjs/jiti/commit/60e094c63ceadc3c63313f14b1d60bcd719faab6))

### [1.12.13](https://github.com/unjs/jiti/compare/v1.12.12...v1.12.13) (2022-01-25)

### [1.12.12](https://github.com/unjs/jiti/compare/v1.12.11...v1.12.12) (2022-01-25)


### Bug Fixes

* ensure resolve esm id exists ([2d44274](https://github.com/unjs/jiti/commit/2d4427488625acc42dfc517eacf14e70f1aaaf30))

### [1.12.11](https://github.com/unjs/jiti/compare/v1.12.10...v1.12.11) (2022-01-25)


### Bug Fixes

* default _filename if null or falsy value passed ([1a24f2a](https://github.com/unjs/jiti/commit/1a24f2ac686f5ebc3802711a4dc83e52f7b3d963))
* **pkg:** do not mangle dist build ([3b456e1](https://github.com/unjs/jiti/commit/3b456e1be6a672c29ee47ebed594da14d42cb73d))

### [1.12.10](https://github.com/unjs/jiti/compare/v1.12.9...v1.12.10) (2022-01-25)


### Bug Fixes

* support resolving with import condition ([#52](https://github.com/unjs/jiti/issues/52)) ([1e1bb0c](https://github.com/unjs/jiti/commit/1e1bb0c99236841d8318d5c24de99d90ffd030be))

### [1.12.9](https://github.com/unjs/jiti/compare/v1.12.8...v1.12.9) (2021-10-18)


### Bug Fixes

* inline `mlly.interopDefault` (resolves [#48](https://github.com/unjs/jiti/issues/48)) ([32e606f](https://github.com/unjs/jiti/commit/32e606fef722f06f428058ad34ed40d1081bd3e4))

### [1.12.8](https://github.com/unjs/jiti/compare/v1.12.7...v1.12.8) (2021-10-18)


### Bug Fixes

* update mlly to latest ([cf178ce](https://github.com/unjs/jiti/commit/cf178ce40615a7bf1438f22bf396809c3d181d3c))

### [1.12.7](https://github.com/unjs/jiti/compare/v1.12.6...v1.12.7) (2021-10-12)

### [1.12.6](https://github.com/unjs/jiti/compare/v1.12.5...v1.12.6) (2021-10-02)


### Bug Fixes

* avoid detecting dynamic import as esm syntax ([0b904a9](https://github.com/unjs/jiti/commit/0b904a9a756533e2ca77f17847c4e8cbf794f668))

### [1.12.5](https://github.com/unjs/jiti/compare/v1.12.4...v1.12.5) (2021-09-29)


### Bug Fixes

* remove dynamicImport from options ([ad42dd1](https://github.com/unjs/jiti/commit/ad42dd125617a48bea77866cd23fc8eee789ffc4))

### [1.12.4](https://github.com/unjs/jiti/compare/v1.12.3...v1.12.4) (2021-09-29)


### Bug Fixes

* remove v8-compile-cache integration ([a9fe3a0](https://github.com/unjs/jiti/commit/a9fe3a0368594fa1b4827e981f2347ebc82b4700))

### [1.12.3](https://github.com/unjs/jiti/compare/v1.12.2...v1.12.3) (2021-09-21)


### Bug Fixes

* **interopDefault:** allow recursive default ([55e0f62](https://github.com/unjs/jiti/commit/55e0f62ae16d2c4d1c05659692bf67211d9cd64d))

### [1.12.2](https://github.com/unjs/jiti/compare/v1.12.1...v1.12.2) (2021-09-21)


### Bug Fixes

* **interopDefault:** handle cjs cache ([1f3e4c3](https://github.com/unjs/jiti/commit/1f3e4c3ac4c8184941f618e698b68f009983ef0e))

### [1.12.1](https://github.com/unjs/jiti/compare/v1.12.0...v1.12.1) (2021-09-21)


### Bug Fixes

* **interopDefault:** support mixed CJS + default ([4392c6a](https://github.com/unjs/jiti/commit/4392c6ac5c6571f1981934456b3635970f7c22a4))

## [1.12.0](https://github.com/unjs/jiti/compare/v1.11.0...v1.12.0) (2021-09-13)


### Features

* add v8cache option ([#39](https://github.com/unjs/jiti/issues/39)) ([ffdd372](https://github.com/unjs/jiti/commit/ffdd3729526b8688ff4a5ed2a4ea3ab9e23493cc))

## [1.11.0](https://github.com/unjs/jiti/compare/v1.10.1...v1.11.0) (2021-07-26)


### Features

* support `node:` and `file:` protocols ([bbb1cb3](https://github.com/unjs/jiti/commit/bbb1cb3249ee78ea200537969675d96ad4ef34a6)), closes [#30](https://github.com/unjs/jiti/issues/30)
* support mjs and cjs extensions ([369c3ff](https://github.com/unjs/jiti/commit/369c3ffba4ce595516f6bc3541a3c5d7cf340ccc))

### [1.10.1](https://github.com/unjs/jiti/compare/v1.10.0...v1.10.1) (2021-05-28)


### Bug Fixes

* **babel:** properly pass plugin-transform-typescript options ([7a1ae3b](https://github.com/unjs/jiti/commit/7a1ae3be90589516840dbfeb27a64903ae121033))

## [1.10.0](https://github.com/unjs/jiti/compare/v1.9.2...v1.10.0) (2021-05-28)


### Features

* enable `allowDeclareFields` for babel transform ([#33](https://github.com/unjs/jiti/issues/33)) ([914499c](https://github.com/unjs/jiti/commit/914499cd58a21ea88eae44f7e1dc830b33e33644))

### [1.9.2](https://github.com/unjs/jiti/compare/v1.9.1...v1.9.2) (2021-05-11)


### Bug Fixes

* spread when pushing babel plugins from transformOptions ([#31](https://github.com/unjs/jiti/issues/31)) ([f25960a](https://github.com/unjs/jiti/commit/f25960af1111401fd1ce2a094bb42e0e868341e9))

### [1.9.1](https://github.com/unjs/jiti/compare/v1.9.0...v1.9.1) (2021-04-09)

## [1.9.0](https://github.com/unjs/jiti/compare/v1.8.0...v1.9.0) (2021-04-09)


### Features

* interopDefault option (opt-in) ([5203145](https://github.com/unjs/jiti/commit/5203145b0f6638f141510770301de1c00a69198a))

## [1.8.0](https://github.com/unjs/jiti/compare/v1.7.0...v1.8.0) (2021-04-09)


### Features

* requireCache ([490e1d0](https://github.com/unjs/jiti/commit/490e1d069d9d5146eb32820a8982b8e72b7de71e))
* transformOptions ([0066a8d](https://github.com/unjs/jiti/commit/0066a8d13993eba39c543772151feae4117f89e4))

## [1.7.0](https://github.com/unjs/jiti/compare/v1.6.4...v1.7.0) (2021-04-09)


### Features

* support legacy decorators for typescript ([#28](https://github.com/unjs/jiti/issues/28)) ([801b798](https://github.com/unjs/jiti/commit/801b79835978876b604a4a53b6abbe9054564e15)), closes [#27](https://github.com/unjs/jiti/issues/27)
* support legacy parameter decorators for typescript ([#29](https://github.com/unjs/jiti/issues/29)) ([6586a1c](https://github.com/unjs/jiti/commit/6586a1c1852719176be2619f642caaf1821059d9))

### [1.6.4](https://github.com/unjs/jiti/compare/v1.6.3...v1.6.4) (2021-03-11)


### Bug Fixes

* exclude `.pnp.js` from transpiling (resolves [#24](https://github.com/unjs/jiti/issues/24)) ([0280b58](https://github.com/unjs/jiti/commit/0280b588018cc0933733bee842f538b851f5689c))
* skip unknown guard if input has not ext (resolves [#17](https://github.com/unjs/jiti/issues/17)) ([afe6706](https://github.com/unjs/jiti/commit/afe67069b1681be8768aff07ff294f3bdbf095b4))
* **babel:** always add class syntax plugin ([c0098fe](https://github.com/unjs/jiti/commit/c0098fec5e6bcc991e0203a456f88a23803737f0)), closes [#23](https://github.com/unjs/jiti/issues/23)
* update require cache children ([ce3b084](https://github.com/unjs/jiti/commit/ce3b0845d7aa1dabf9e6caf7e285ddc5fbd01e31)), closes [nuxt/nuxt.js#8976](https://github.com/nuxt/nuxt.js/issues/8976)

### [1.6.3](https://github.com/unjs/jiti/compare/v1.6.2...v1.6.3) (2021-03-06)


### Bug Fixes

* disable transform cache if no filename provided ([69113bc](https://github.com/unjs/jiti/commit/69113bcf6482c601aedaed63f66a7cdc91ec353c)), closes [unjsio/mkdist#3](https://github.com/unjsio/mkdist/issues/3)

### [1.6.2](https://github.com/unjs/jiti/compare/v1.6.1...v1.6.2) (2021-03-05)


### Bug Fixes

* support class property syntax for esm ([64b1636](https://github.com/unjs/jiti/commit/64b16368833fbb10f92343b1a057830a4b545281))

### [1.6.1](https://github.com/unjs/jiti/compare/v1.6.0...v1.6.1) (2021-03-05)


### Bug Fixes

* stub @babel/helper-compilation-targets to ignore browserslist in package.json ([af8fedc](https://github.com/unjs/jiti/commit/af8fedc57fbe742c219d41c42a84e5df91e97f13)), closes [nuxt/nuxt.js#8916](https://github.com/nuxt/nuxt.js/issues/8916)

## [1.6.0](https://github.com/unjs/jiti/compare/v1.5.0...v1.6.0) (2021-03-03)


### Features

* transpile import.meta.url (resolves [#21](https://github.com/unjs/jiti/issues/21)) ([d071704](https://github.com/unjs/jiti/commit/d07170452837cd28a93d205786b1e28de4bd8d04))


### Bug Fixes

* support hashbang (closes [#18](https://github.com/unjs/jiti/issues/18)) ([6a1f816](https://github.com/unjs/jiti/commit/6a1f81626d9428ce3aa0c46f94f3d10c79c7dd08))

## [1.5.0](https://github.com/unjs/jiti/compare/v1.4.0...v1.5.0) (2021-03-03)


### Features

* `extensions` option (fixes mjs handling) ([3804b3c](https://github.com/unjs/jiti/commit/3804b3c2e5086dad0bc1feb0518579d4d5b10c6a))


### Bug Fixes

* don't cache errors ([8a7f881](https://github.com/unjs/jiti/commit/8a7f8813e21586160530b99a43c36e3dcfc76e64)), closes [nuxt/nuxt.js#8916](https://github.com/nuxt/nuxt.js/issues/8916)
* fix issues with dynamic import ([e318cf5](https://github.com/unjs/jiti/commit/e318cf511bb787ad4ad3fd4e64301cc1be1d701a))

## [1.4.0](https://github.com/unjs/jiti/compare/v1.3.0...v1.4.0) (2021-03-01)


### Features

* transpile nullish-coalescing-operator and optional-chaining for node<14 ([6011ef5](https://github.com/unjs/jiti/commit/6011ef5e83653a30730bc33e5c628f6cafe5b411))

## [1.3.0](https://github.com/unjs/jiti/compare/v1.2.1...v1.3.0) (2021-01-21)


### Features

* support node register hook ([#15](https://github.com/unjs/jiti/issues/15)) ([f5127cb](https://github.com/unjs/jiti/commit/f5127cb2726bb8957323d413fef45aa5a2e275ae))

### [1.2.1](https://github.com/unjs/jiti/compare/v1.2.0...v1.2.1) (2021-01-20)


### Bug Fixes

* improve extension handling for unknown formats ([a2a797d](https://github.com/unjs/jiti/commit/a2a797db2b86faf76a3b997c31af18d08f8bec71))
* use dynamic import => cjs only if native dynamic import is not possible ([5323175](https://github.com/unjs/jiti/commit/53231756883637e0736d2fce039206d8dd8d0dcb))

## [1.2.0](https://github.com/unjs/jiti/compare/v1.1.0...v1.2.0) (2021-01-14)


### Features

* expose transform ([6b1ab5e](https://github.com/unjs/jiti/commit/6b1ab5eae6d396e12579f0d84da0cbca41a08c0f))

## [1.1.0](https://github.com/unjs/jiti/compare/v1.0.0...v1.1.0) (2021-01-13)


### Features

* support mixed sytax via esm fallback ([1e642e4](https://github.com/unjs/jiti/commit/1e642e42ddf12669896f4ac9049d5a4d5bd9bf8c))


### Bug Fixes

* consistantly use tmpdir as cache dir ([e49a791](https://github.com/unjs/jiti/commit/e49a791dc83a0b02ccc4e24842633eb395f55643))

## [1.0.0](https://github.com/unjs/jiti/compare/v0.1.20...v1.0.0) (2021-01-12)

### [0.1.20](https://github.com/unjs/jiti/compare/v0.1.19...v0.1.20) (2021-01-12)


### Bug Fixes

* resolve with index.{ts,mjs} ([2fe1846](https://github.com/unjs/jiti/commit/2fe184690897c7f5e02456fecaf6a94099fd75e2))

### [0.1.19](https://github.com/unjs/jiti/compare/v0.1.18...v0.1.19) (2020-12-30)


### Features

* improved parse and runtime error stack trace ([9d94ca1](https://github.com/unjs/jiti/commit/9d94ca1c5b5e1f2aa6d5dafcf5361dfcdd6f38c5))


### Bug Fixes

* remove duplicate v8-compile-cache ([#13](https://github.com/unjs/jiti/issues/13)) ([3f81fc9](https://github.com/unjs/jiti/commit/3f81fc9cf4e560a624a6d8bd3a98f0fc5de0f4cc))

### [0.1.18](https://github.com/unjs/jiti/compare/v0.1.17...v0.1.18) (2020-12-22)


### Features

* use native require for resolving ([f7e1a56](https://github.com/unjs/jiti/commit/f7e1a5685c14b979cb1a6dd5fbe724ee3a0b2c13))


### Bug Fixes

* support circular dependency (closes [#12](https://github.com/unjs/jiti/issues/12)) ([06c687f](https://github.com/unjs/jiti/commit/06c687f180b1fe43e4e58b15e06389a589b8a2bc))

### [0.1.17](https://github.com/unjs/jiti/compare/v0.1.16...v0.1.17) (2020-11-27)


### Features

* use native import for mjs files ([#10](https://github.com/unjs/jiti/issues/10)) ([da34753](https://github.com/unjs/jiti/commit/da34753d54e4bc726bb354dcbd77b4f3d7f7e0a0))


### Bug Fixes

* **cli:** resolve relative to cwd ([52a4c12](https://github.com/unjs/jiti/commit/52a4c124bc649b366d481cbe6463537b245ad4d1))

### [0.1.16](https://github.com/unjs/jiti/compare/v0.1.15...v0.1.16) (2020-11-23)


### Features

* fallback to tmpdir and then disable if cache dir is not writable ([398fe08](https://github.com/unjs/jiti/commit/398fe08ef06fa873a63ea280d8a408abca8ece04))
* support JITI_DEBUG ands JITI_CACHE environment variables ([eed965d](https://github.com/unjs/jiti/commit/eed965dd05c83adac83c7bb2d84eb91098381c52))

### [0.1.15](https://github.com/unjs/jiti/compare/v0.1.14...v0.1.15) (2020-11-22)


### Features

* basic support for dynamic imports ([9494452](https://github.com/unjs/jiti/commit/94944520734b5d7f3bc2cf38c4a3454835201e2f))

### [0.1.14](https://github.com/unjs/jiti/compare/v0.1.13...v0.1.14) (2020-11-21)


### Bug Fixes

* **cli:** import main wrapper ([25bceb1](https://github.com/unjs/jiti/commit/25bceb173a966beaf315df58400ee59a61441f84))

### [0.1.13](https://github.com/unjs/jiti/compare/v0.1.12...v0.1.13) (2020-11-21)


### Features

* basic cli ([b028046](https://github.com/unjs/jiti/commit/b0280469e7002b28ea159fb6f1f3b744a198e141))

### [0.1.12](https://github.com/unjs/jiti/compare/v0.1.11...v0.1.12) (2020-11-01)


### Bug Fixes

* directly call wrapper to fix require.resolve issue ([63c0a5c](https://github.com/unjs/jiti/commit/63c0a5c9d1cf6d9bd5efae63798323ef602af978))

### [0.1.11](https://github.com/unjs/jiti/compare/v0.1.10...v0.1.11) (2020-06-19)


### Features

* interopDefault ([44117ef](https://github.com/unjs/jiti/commit/44117ef88f712b37bfe0a72181b76fa1a3f374c1))

### [0.1.10](https://github.com/unjs/jiti/compare/v0.1.9...v0.1.10) (2020-06-19)


### Bug Fixes

* always ensure isDir for filename ([6b343a4](https://github.com/unjs/jiti/commit/6b343a4fb9d7fe63628f53647d443d98b92217b6))

### [0.1.9](https://github.com/unjs/jiti/compare/v0.1.8...v0.1.9) (2020-06-12)


### Bug Fixes

* typo in main field  ([#4](https://github.com/unjs/jiti/issues/4)) ([c57ea02](https://github.com/unjs/jiti/commit/c57ea023635825cc929b3581b5d60c58d35a6e7a))

### [0.1.8](https://github.com/unjs/jiti/compare/v0.1.7...v0.1.8) (2020-06-12)


### Bug Fixes

* use fake file for default _filename ([05d721f](https://github.com/unjs/jiti/commit/05d721faa6426cb0b2d0e1262059de4c9eb4015c))
* **types:** allow passing undefined filename ([#2](https://github.com/unjs/jiti/issues/2)) ([9136f15](https://github.com/unjs/jiti/commit/9136f15dd3f9e56e192945e849a9db6c4df6bccd))

### [0.1.7](https://github.com/unjs/jiti/compare/v0.1.6...v0.1.7) (2020-06-11)


### Bug Fixes

* **pkg:** add repository field ([639c02f](https://github.com/unjs/jiti/commit/639c02fb4e7f0a117b25e968e44e3b664c4eb7d9))

### [0.1.6](https://github.com/unjs/jiti/compare/v0.1.5...v0.1.6) (2020-06-11)


### Features

* cache support ([65c2de2](https://github.com/unjs/jiti/commit/65c2de207147793d984d871f495af55e75b58768))

### [0.1.5](https://github.com/unjs/jiti/compare/v0.1.4...v0.1.5) (2020-06-11)


### Features

* allow passign debug as jiti options ([8da2310](https://github.com/unjs/jiti/commit/8da2310c6b27a2b0fac2276d462c65b0c6f2b0a8))
* build and stack-trace improvements ([71780ab](https://github.com/unjs/jiti/commit/71780ab15d8cb843323c3edcc3e55a2a5928e72e))
* improve babel transpile and debug ([f3042dc](https://github.com/unjs/jiti/commit/f3042dcf116b309090de552d27cd8103bc7f1001))

### [0.1.4](https://github.com/unjs/jiti/compare/v0.1.3...v0.1.4) (2020-06-11)


### Features

* improve babel options ([ae4dc58](https://github.com/unjs/jiti/commit/ae4dc58ab994419489c4599c04c3444a34ba6215))


### Bug Fixes

* multiline syntax detection ([46f830b](https://github.com/unjs/jiti/commit/46f830b7333b4ed9d5377cae9afe967c96dac071))

### [0.1.3](https://github.com/unjs/jiti/compare/v0.1.2...v0.1.3) (2020-06-07)

### [0.1.2](https://github.com/unjs/jiti/compare/v0.1.1...v0.1.2) (2020-06-07)


### Features

* improve build system and stability ([5c3ee63](https://github.com/unjs/jiti/commit/5c3ee63bc32c0609f32605cfb2b472afdff97648))
