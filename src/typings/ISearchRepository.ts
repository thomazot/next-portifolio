import IRepository from './IRepository'

export interface ISearchRepository {
  search: {
    repos: {
      repo: IRepository
    }[]
  }
}
