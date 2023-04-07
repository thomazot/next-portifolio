import Image from 'next/image'
import React from 'react'
import { INews } from 'types/INews'

const News: React.FC<{ news: INews[] }> = ({ news }) => {
  return (
    <div>
      {news.map((item) => (
        <div key={item.title}>
          <div>
            <Image
              src={`/api/imageProxy?url=${item.urlToImage}`}
              width="300"
              height="300"
              alt={item.title}
            />
          </div>
          <div>{item.urlToImage}</div>
          <div>{item.title}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default News
