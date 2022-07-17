import axios from 'axios'

export async function getNews() {
  // business entertainment health science sports technology
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=br&category=technology&pageSize=3&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  )

  return response.data.articles
}
