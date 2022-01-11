/**
 * Custom error class for adding a .data object with it.
 */
class ChainError<T> extends Error {
  public readonly data: T

  constructor(data: T) {
    super()
    this.data = data
  }
}

export default ChainError
