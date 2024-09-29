import React, { useState } from 'react'

function Card() {

    const questions = [{
        id: 1,
        text: "Do you work hard but still feel disappointed with your grades?"
    },
    {
        id: 2,
        text: "Do you lag behind your classmates in school/college?"
    },
    {
        id: 3,
        text: "Do you have currently active backlogs in semester?"
    },
    {
        id: 4,
        text: "Do you wish you had a better study enviorment with personalised learning?"
    }, 
    {
        id: 5,
        text: "Wishing to improve in your studies along with self-paced learning?"
    }
    ]

    const [question, setQuestion] = useState({
        id: 1,
        text: "Do you work hard but still feel disappointed with your grades?"
    })

    const handleClick = () => {
        if(question.id === questions.length) return;
        var newQuestion = questions.filter((q) => q.id == question.id+1);
        setQuestion(newQuestion[0]);
    }

  return (
    <div className='md:pt-4 px-8 md:px-0 font-semibold flex flex-col items-center justify-evenly rounded-xl bg-white w-[60vw] h-[50vh]'>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-secondary'>QUESTION {question.id} of {questions.length}</h1>
        <p className='text-lg text-center md:w-2/3 lg:w-full md:text-xl lg:text-2xl text-primary'>
            {question.text}
        </p>

        <div className='w-full flex justify-center gap-4 md:gap-6'>
        <button className='text-white bg-gradient-to-b from-secondary to-slate-400 px-8 md:px-16 py-3 font-semibold rounded-3xl' onClick={handleClick}>YES</button>

        <button className='text-white bg-gradient-to-b from-secondary to-slate-400 px-8 md:px-16 py-2 font-semibold rounded-3xl' onClick={handleClick}>NO</button>
        </div>
    </div>
  )
}

export default Card