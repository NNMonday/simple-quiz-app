import React from 'react'
import { Col } from 'react-bootstrap'

export default function Quiz(props) {
    const { currentQ, qList, setUserChoice, userChoice } = props
    const quiz = qList[currentQ]
    const saveUserChoice = (index) => {
        let newUserChoice = [...userChoice]
        newUserChoice[currentQ] = {answer: index, correct: quiz.answers[index].correct}
        setUserChoice(newUserChoice)
    }

    return (
        <form>
            <div className='quiz-question text-center rounded-3 shadow-sm bg-white pt-5 w-100 pb-5'>
                <Col xs={12}>
                    <p className='mt-3 mb-5' style={{ color: '#4338ca', fontWeight: '600', fontSize: "large" }}>Question <span style={{ fontWeight: '800' }}>{currentQ + 1}</span>/{qList.length}</p>
                    <p className='mx-5' style={{ fontWeight: 'bold', fontSize: "large" }}>{quiz.question_content}</p>
                </Col>
            </div>
            <div className='quiz-answer w-100 pt-5' style={{ backgroundColor: '#a5b4fb' }}>
                {quiz.answers.map((answer, indexA) => (
                    <div className='w-100 ' key={indexA}>
                        <p
                            className={`shadow-sm rounded-3 answer ${userChoice[currentQ].answer === indexA ? 'selected' : ''}`}
                            style={{ margin: '20px', padding: '20px', border: '1px solid white' }}
                            onClick={() => saveUserChoice(indexA)}
                        >
                            {indexA + 1}) {answer.answer_content}
                        </p>
                    </div>
                ))}
            </div>
        </form>
    )
}
