import { Button } from '@/components/ui/button';
import React, { useEffect, useReducer} from 'react'
import Question from './Question';
import { quizQuestions } from '@/jsonData/quizz';
import QuizGreeting from './QuizGreeting';
import SingleQuestion from './SingleQuestion';


const initialState ={
questions:[],
status:'loading',//'loading, error, ready, active, finished status

}
function reducer(state, action){
  switch(action.type){
    case 'dataReceived': 
    return{
      ...state,
      questions:action.payload,
      status:'ready',
    }
    case 'dataFailed'://synonymous to the function name
    return{
      ...state,
      status:'error'
    }
    case 'active':
      return {
        ...state,
        status:'active'
      }
    default:
    throw new Error('Action unknown') 
  }
}


const DateCounter = () => {
 const [state, dispatch] = useReducer(reducer, initialState)
 const{questions, status} = state

 useEffect(()=>{
  dispatch({type:'dataReceived', payload:quizQuestions})
 },[])
 const numberOfQuestions = questions.length
  
  return (
    <div className='bg-gray-800 text-white  h-screen'>
      {/* <Button className='p-2 m-2'>click me</Button> */}
      <h2 className='flex max-w-screen justify-center'>THE REACT QUIZ</h2>
      <input type="range" max={200} />
      {/* <h1 className='text-4xl font-bold font-sans'>{range}</h1> */}
        <Question>
          {status === 'loading' && <p>Loading questions...</p>}
          {status === 'error' && <p>There was an error fetching questions</p>}
          {status === 'ready' && <QuizGreeting numberOfQuestions={numberOfQuestions} dispatch= {dispatch}/>}
          {status === 'active' && <SingleQuestion questions = {questions}/>}
        </Question>
    </div>
  )
}

export default DateCounter
