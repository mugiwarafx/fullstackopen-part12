const axios = require('axios')

console.log('[debugging] backend url', process.env.BACKEND_HOSTNAME)

let API_URL =
  process.env.BACKEND_HOSTNAME === undefined
    ? 'http://localhost:8000/albums'
    : process.env.BACKEND_HOSTNAME

API_URL = 'http://localhost/api/albums'

console.log('[debugging] backend url', API_URL)

async function getAlbums() {
  try {
    const response = await axios.get(API_URL)
    console.log('Q:why it renders twice?')
    console.log(
      'A:https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar'
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default { getAlbums }
