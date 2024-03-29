 import { useState,useEffect } from "react"
 
 export function useGetFacts({api1,change}){
  const [text,setText] = useState()
  
  useEffect(()=>{
   

    async function PeticionPal(){
      const res = await fetch(api1)
      const data = await res.json()
      const {fact} = data
      setText(fact) 
     
      
    }
  
    PeticionPal()
    
  
  },[change])

  return text

}