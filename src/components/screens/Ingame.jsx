import React, { useEffect, useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import Timer from '../Timer';
import Result from './Result'
import Quiz from '../Quiz';
export const QuizContext = React.createContext();
export default function Ingame() {
    const [finished, setFinished] = useState(false)
    const [result, setResult] = useState(0)
    const [currentQ, setCurrentQ] = useState(0)
    const [qList, setQList] = useState([])
    const [userChoice, setUserChoice] = useState([])

    useEffect(() => {
        fetch('./data/questions.json')
            .then(response => response.json())
            .then(data => {
                for (let i = data.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [data[i], data[j]] = [data[j], data[i]];
                }
                setQList(data)
                setUserChoice(Array(data.length).fill({
                    answer: -1,
                    correct: false
                }))
            });
    }, []);

    const previous = () => {
        setCurrentQ(preQ => preQ - 1)
    }

    const next = () => {
        setCurrentQ(preQ => preQ + 1)
    }

    const submit = () => {
        userChoice.forEach(a => {
            a.correct && setResult(preResult => ++preResult)
        })
        setFinished(true)
    }

    const handleTimeUp = (e) => {
        if (e) {
            if (window.confirm('Do you want to submit answers ?')) {
                submit()
            }
        } else {
            submit()
        }
    }

    return !finished ? (
        <Container fluid className='d-flex flex-column p-0 align-items-center'>
            <Row className='mb-5'>
                <div className="btns-container d-flex justify-content-center pt-5">
                    <Row>
                        <Col>
                            <Button disabled={currentQ === 0} onClick={previous} variant='secondary' className='previous border-0'>
                                Previous
                            </Button>
                        </Col>
                        <Col>
                            <Button disabled={currentQ === qList.length - 1} onClick={next} className='start-btn border-0 next'>
                                Next
                            </Button>
                        </Col>
                        {currentQ === qList.length - 1 && (
                            <Col>
                                <Button className='submit border-0' onClick={handleTimeUp}>
                                    Submit
                                </Button>
                            </Col>
                        )}
                    </Row>
                </div>
            </Row>
            <Row className='timer-container mt-3'>
                <Col xs={12} className='justify-content-center d-flex position-relative'>
                    <Timer onTimeUp={handleTimeUp} />
                </Col>
            </Row>
            <Row className='' style={{ width: '50%', minWidth: "700px" }}>
                <Col>
                    {qList.length !== 0 ? <Quiz currentQ={currentQ} qList={qList} setUserChoice={setUserChoice} userChoice={userChoice} /> : <p className='text-center'>Loading...</p>}
                </Col>
            </Row>
        </Container >
    ) : (
        <QuizContext.Provider value={{ qList, userChoice }}>
            <Result result={result} />
        </QuizContext.Provider>
    )
}