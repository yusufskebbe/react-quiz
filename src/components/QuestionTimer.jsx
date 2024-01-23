import { useEffect, useState } from "react"

export default function QuestionTimer({timeout,onTimeout }){ // when time expired we want the parent component to know about it 


  const [remainingTime, setRemainingTime] =  useState(timeout);

  useEffect(()=>{
  const time = setTimeout(onTimeout,timeout)

  return () =>{
    clearTimeout(time)
  } 

  },[onTimeout, timeout]) // beacuse we use Props inside of it we need to add dependicies

  useEffect(()=>{

    const intreval = setInterval(()=>{
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100); 
    },100)

  return () => {
    clearInterval(intreval);
  }
    
  },[]) // we put setIntreval inside useEffect to prevent infinite loop deepends on the dependicies




  // we use setIntreval if we want to excute funtion every couple of seconds to update timer for example , and we need state to update progress bar so we can rerender it 

  return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
  )


} 