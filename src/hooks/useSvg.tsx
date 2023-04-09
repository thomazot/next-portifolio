import axios from 'axios'

export default function useSvg() {
  async function getSvg(url: string) {
    return await axios.get(url).then((response) => response.data)
  }

  return {
    getSvg
  }
}
