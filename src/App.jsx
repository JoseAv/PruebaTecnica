import { useEffect, useState } from 'react'

function App() {
  const [texto,setTexto]= useState(null)
  const [img,setImg] = useState('')
  const [showimg,setShow]= useState('')
  const [next,setNext]= useState(true)
  const [imageLoaded, setImageLoaded] = useState(false);
 
 const api1 = 'https://catfact.ninja/fact'

 useEffect(() => {
  fetch(api1)
    .then(res => res.json())
    .then(data => palabraSplit(data.fact));
}, [next]);

useEffect(() => {
  if (img) {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setShow(img);
      setImageLoaded(true);
    };
  }
}, [img,texto]);




let palabraSplit=(palabras)=>{
  console.log(palabras)
  setTexto(palabras)

  let word = palabras.split(' ')
  setImg(`https://cataas.com/cat/says/${word[0]}`)
  
}



function nexts(){
  setImageLoaded(false)
  setNext(!next)
  
}



  return (
    <>{
      imageLoaded && <div>
      <h1>{texto}</h1>
      <div><img src={showimg} alt="Imagen Aqui" /></div>
      <button onClick={nexts}>Change</button>
      </div>
      
      
    }
    </>
  )
}

export default App
