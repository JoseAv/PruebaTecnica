import { useEffect, useState } from "react"

const api1 = 'https://catfact.ninja/fact'
//`https://cataas.com/cat/says/${word[0]}`

function App() {
  
  const [text,setText] = useState()
  const [image,setImg] = useState()
  const [change,setChage] = useState(false)



useEffect(()=>{
  setImg('')
  async function PeticionPal(){
    const res = await fetch(api1)
    const data = await res.json()
    const {fact} = data
    setText(fact) 
    
    
  }

  PeticionPal()


},[change])

useEffect(()=>{
  if(!text) return
  let word = text.split(' ').slice(0,3).join('')

  fetch(`https://cataas.com/cat/says/${word}`)
  .then(res => setImg(res.url))


},[text])





  return (
    
  <main>
    {text && <div><h1>{text}</h1></div>}
    {image && <><img src={image}/><button onClick={()=> setChage(!change)}>Change</button></>}
  </main>

    
  )
}

export default App
