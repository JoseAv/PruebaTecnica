import { useState } from 'react'
import {useGetFacts} from './components/getFacts'
import {useGetImg} from './components/getImage'
const api1 = 'https://catfact.ninja/fact'
//`https://cataas.com/cat/says/${word[0]}`


function App() {
  const [change,setChange]= useState(true)
  
let text = useGetFacts({api1,change})
let image = useGetImg({text})






  return (
    
  <main>
    {text && <div><h1>{text}</h1></div>}
    {image && <><img src={image}/><button onClick={()=> setChange(!change)} >Change</button></>}
  </main>

    
  )
}

export default App
