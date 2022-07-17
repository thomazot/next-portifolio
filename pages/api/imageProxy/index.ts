import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = req.query?.url as string | undefined
  if (!url) {
    res.status(400).send('url is required')
    return
  }
  const image: HTMLImageElement = new Image()
  image.src = url
  image.onload = () => {
    res.status(200).send(image.src)
  }
  image.onerror = () => {
    res.status(400).send('image not found')
  }

  res.status(200).send(image.src)
}
