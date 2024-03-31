export interface IListPayload<T> {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: T[]
}

export interface ISinglePayload<T> {
  data: T,
  support: {
      url: string,
      text: string
  }
}
