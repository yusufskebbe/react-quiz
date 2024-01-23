import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import QUESTIONS from '../questions.js';

function Question({ onSelectAnswer, selectedAnswer, onSkipAnswer ,key , index }) {

  const [answer ,  setAnswer] = useState({
    selectedAnswer:'',
    isCorrect:null,
  })

  function handSelectAnswer(answer){
    setAnswer({
      selectedAnswer:answer,
      isCorrect:null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer:answer,
        isCorrect:QUESTIONS[index].answers[0] === answer
      })

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000);

    }, 1000);

  }

  let answerState = ''

  if(answer.selectedAnswer && answer.isCorrect !==null){
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }else if (answer.selectedAnswer){
    answerState = 'answered';
  }

  return (
    <div id='qustion'>
    <QuestionTimer  timeout={10000} onTimeout={onSkipAnswer}/>
      <h2>{QUESTIONS[index].text}</h2> 
      
      <Answers 
      answers={QUESTIONS[index].answers}
      selectedAnswer={answer.selectedAnswer}
      answerState={answerState}
      onSelect={handSelectAnswer} 
    
      />
    </div>
  )
}

export default Question