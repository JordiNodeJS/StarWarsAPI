import { useState } from 'react'

// https://stackoverflow.com/questions/50248329/fetch-image-from-api
//  https://thewebdev.info/2021/11/14/how-to-fetch-image-from-api-with-react/#:~:text=API%20with%20React%3F-,To%20fetch%20image%20from%20API%20with%20React,can%20use%20the%20fetch%20function.&text=We%20call%20fetch%20with%20the,response%20object%20to%20a%20blob.
export default function useFetchImg() {

  const imageUrl =
    'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  const [img, setImg] = useState()

  const fetchImage = async image => {

    
      const res = await fetch(image)
      try {
      if (res.status === 200) {

        const imageBlob = await res.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob)
        setImg(imageObjectURL)
      } else if (res.status === 404) {
        setImg(imageUrl)
        console.log('💩 -->', res.url);
      }
    } catch (err) {
      console.log('error en el fetching de datos', err)
    }
  }

  return [img, fetchImage]
}
