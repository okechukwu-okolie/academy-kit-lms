import { Button } from "@/components/ui/button";
import React from "react";

const QuizGreeting = ({ numberOfQuestions, dispatch }) => {
  return (
    <div>
      <div className="flex min-w-screen justify-center text-2xl font-bold ">
        Welcome to the React Quiz
      </div>
      <div className="flex  min-w-screen justify-center text-1xl font-thin ">
        {numberOfQuestions + 20} questions to test you React mastery
      </div>
      <div className="flex min-w-screen justify-center mt-3">
        {" "}
        <Button onClick={()=>dispatch({type:'active'})}>Click to start</Button>
      </div>
    </div>
  );
};

export default QuizGreeting;
