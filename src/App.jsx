import { useEffect, useState } from 'react'

import './App.css'
import {Box, Button, Slider} from "@mui/material"
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    if(count>150||count<0){setCount(0)}
  },[count])
  

  return (
    <>
    {console.log(count)} 
    <Box width={350}>
    <Slider
    size='large'
    value={count}
    step={10}
    ></Slider></Box>
    
    <Button onClick={()=>{setCount(count+1)}}>add</Button>{count}<Button onClick={()=>{setCount(count-1)}} >minus</Button>

    </>
  )
}

export default App
