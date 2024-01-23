import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from './Question.jsx';
import Summary from './Summary.jsx';



export default function Quiz(){



  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length;

  const completedQuiz = activeQuestionIndex === QUESTIONS.length

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){

    setUserAnswers((prevUserAnswers)=>{
      return [...prevUserAnswers, selectedAnswer] //we spread our state to make sure that we dont losse out state // we append selectedAnswer as new element to the array
    })

  },[])


  const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null),[handleSelectAnswer])

  // we wrap our functions with useCallback, because now we have functions that they are not recreated just becasue surrounded compmenet function was excuted again   

  if(completedQuiz){
    return (
     <Summary  userAnswers={userAnswers} />
    )
  }


 


  return (
      <div id='quiz'>
        <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
       />
      </div>
    
   
  )
}