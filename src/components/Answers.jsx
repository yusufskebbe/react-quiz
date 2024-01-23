import React, { useRef } from 'react'

function Answers({answers, selectedAnswer, answerState, onSelect}) {
 
  const suffeldAnswers = useRef();

  
  if(!suffeldAnswers.current){
    suffeldAnswers.current = [...answers] // we remove it here becasue we already trying to access not valid index of the answers 

    suffeldAnswers.current.sort(()=> Math.random() - 0.5) 
  }

  return (
    <ul id='answers'>
    {suffeldAnswers.current.map((answer) => {
      const isSelected  = selectedAnswer === answer
      let cssClass = '';
      if(answerState === 'answered' && isSelected ){
        cssClass = 'selected'
      }
      if((answerState === 'correct' || answerState ==='wrong')&& isSelected){
        cssClass = answerState 
      }
    return(
        <li key={answer} className='answer'>
        <button className={cssClass} disabled={answerState !== ''} onClick={() => onSelect(answer)} >{answer} </button>
        </li>
        )
    })}
      </ul>
  )
}

export default Answers