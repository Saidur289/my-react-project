import React, {useState, useEffect} from "react";
function WidthHeight(){
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return() => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])
  function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  return(
    
    <>
    <p style={{fontSize: '50px'}}>window width: {width}px</p>
    <p style={{fontSize: '50px'}}>window height: {height}</p>
    </>
  )
}
export default WidthHeight