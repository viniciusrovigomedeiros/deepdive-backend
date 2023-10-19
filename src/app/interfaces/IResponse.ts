export interface IResponse<T> {
  status: string
  id?: string
  result?: T
  description?: string | string[]
  token?: string
}
