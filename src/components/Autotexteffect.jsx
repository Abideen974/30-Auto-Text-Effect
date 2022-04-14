import React, { useEffect } from 'react'
import './autotext.css'
function Autotexteffect() {
  useEffect(()=>{
    textspeed();


  },[])

  function textspeed (){
    const text = document.getElementById('tex');
    const sped = document.getElementById('speed');
    let tx= 'i love programming'
    let index = 1;
    let speed = 300 /sped.value;

    writetext();
    function writetext(){
      text.innerText = tx.slice(0, index)
      index++

      if(index > tx.length){
        index = 1;
      }
      setTimeout(writetext,300)
    }
    sped.addEventListener('input', (e) =>speed= 300 /e.target.value)

    

  }

  return (
    <>
        <h3 id='tex'>Starting</h3>
        <div>
            <label htmlFor="speed" id='speed'>Speed:</label>
            <input type="number" name="speed" id="speed" value="3"  min="1" max="5"  onChange={((e)=>e.target.value)} />

        </div>
    </>
  )
}

export default Autotexteffect