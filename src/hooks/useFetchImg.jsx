import { useContext, useState } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
// https://stackoverflow.com/questions/50248329/fetch-image-from-api
//  https://thewebdev.info/2021/11/14/how-to-fetch-image-from-api-with-react/#:~:text=API%20with%20React%3F-,To%20fetch%20image%20from%20API%20with%20React,can%20use%20the%20fetch%20function.&text=We%20call%20fetch%20with%20the,response%20object%20to%20a%20blob.
export default function useFetchImg() {
  const { setError, setLoading } = useContext(ContextStarWars)
  const [img, setImg] = useState('https://starwars-visualguide.com/assets/img/big-placeholder.jpg')


  const fetchImg = async urlImg => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(urlImg)
      if (response.status === 200) {
        const data = await response.blob()
        const imageObjectURL = URL.createObjectURL(data)
        setImg(imageObjectURL)
        setLoading(false)
      } else {
        console.log('HTTP-Error: ' + response.status)
       
      }
    } catch (error) {
      console.log('error', error)
      setError(error)
      setLoading(false)
    }
  }
  return [img, fetchImg]
}
