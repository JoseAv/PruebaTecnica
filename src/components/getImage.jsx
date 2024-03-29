import { useState,useEffect } from "react"

export function useGetImg({text}){
  const [image,setImg] = useState()

  useEffect(()=>{
    
    setImg('')
    if(!text) return
    let word = text.split(' ').slice(0,3).join('')
  
    fetch(`https://cataas.com/cat/says/${word}`)
    .then(res => setImg(res.url))
  
  
  },[text])
  console.log(image)
  return image

}