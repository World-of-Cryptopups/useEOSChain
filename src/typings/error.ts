export interface InternalServerErrorProps {
  code: number
  message: string
  error: InternalServerErrorDataProps
}

export interface InternalServerErrorDataProps {
  code: number
  name: string
  what: string
  details: Array<{
    message: string
    file: string
    line_number: number
    method: string
  }>
}
