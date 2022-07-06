type Readme = {
  text: string
}

interface IRepository {
  name: string
  description: string
  descriptionHTML: string
  shortDescriptionHTML: string
  homepageUrl: string
  url: string
  object: Readme
}

export default IRepository
