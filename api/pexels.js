import axios from "axios"

const apiKey = "Qty3u675K9bTxXL0pLTQjJbxnbkBEJkdsi2qpp389gZpO2GD3u8gFfXl";
const apiKeyNueva = "FHnvI1NxzMUP28Gprfh6wL6N7P4YGt5ErLoG038IPITJIaB2ib4JqObn"

export const getImages = async (searchTerm = "programming", page = 1) => {
  const imagenes = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=20&page=${page}`, {
    headers: {
      Authorization: apiKey
    }
  })
  return imagenes
}