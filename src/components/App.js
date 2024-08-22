
import React , {useState,useEffect} from "react";
import './../styles/App.css';
// import { useEffect } from "react/cjs/react.production.min";

const App = () => {
  const [progress,setProgress] = useState(0);

  useEffect(()=>{
    let timerId;

    // if(progress < 100){

      timerId =  setInterval(()=>{
         setProgress(prev=>{
           if(prev >= 100){
             clearInterval(timerId);
             return 100;
           }
           return prev + 10;
         });
 
       },800)
    // }

    
    return ()=>clearInterval(timerId)
  },[progress])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Progress Bar</h1>
        <div id="barOuter">
          <div style={{
            width: `${progress}%`,
            height: '24px',
            backgroundColor: progress >= 110 ? '' : 'blue',
            borderRadius:"15px"
          }} id="barInner"></div>
        </div>
          <p>{progress}%</p>
    </div>
  )
}

export default App
