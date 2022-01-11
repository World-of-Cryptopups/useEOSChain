// https://github.com/EOSIO/eosjs/blob/master/src/eosjs-serialize.ts
// only used types are taken

/** Action with data in serialized hex form */
export interface SerializedAction {
  account: string
  name: string
  authorization: Authorization[]
  data: string
}

/** Action with data in structured form */
export interface Action {
  account: string
  name: string
  authorization: Authorization[]
  data: any
  hex_data?: string
}

export interface Authorization {
  actor: string
  permission: string
}

/**
 * An Anyvar (non-short form) may be any of the following:
 *  * null
 *  * string
 *  * number
 *    * Caution: assumes number is int32. Use {type, value} form for other numeric types
 *  * an array of anyvar
 *  * {type, value}
 *      * type is a string matching one of the predefined types in anyvarDefs
 *      * value:
 *          * If type === 'any_object', then value is an object. The values within the object are anyvar.
 *          * If type === 'any_array', then value is an array of anyvar.
 *          * Else, value must be eosjs-compatible with the specified type (e.g. uint64 should be a string
 *            containing the value in decimal).
 *  * Other object. The values within the object are anyvar.
 *
 * The short form is more convenient, but it can't be converted back to binary (serialized).
 * Wherever the anyvar would have {type, value}, it has just the value instead.
 */
export type Anyvar =
  | null
  | string
  | number
  | Anyvar[]
  | { type: string; value: any }
  | Record<string, unknown>
