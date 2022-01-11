import ChainError from '../lib/error'
import { InternalServerErrorProps } from './error'

export interface ChainRequestResult<T> {
  data?: T
  hasFailed: boolean
  error?: ChainError<InternalServerErrorProps>
}
