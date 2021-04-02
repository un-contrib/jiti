export type TransformOptions = {
  source: string,
  filename?: string,
  ts?: Boolean
  retainLines?: Boolean
  legacy?: Boolean
  decorators?: Boolean
}

export type TRANSFORM_RESULT = {
  code: string,
  error?: any
}
