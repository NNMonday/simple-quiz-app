import React, { useContext, useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import { QuizContext } from './Ingame';
import QuizReview from '../QuizReview';

export default function Review() {
  const { qList, userChoice } = useContext(QuizContext);
  const [currentQ, setCurrentQ] = useState(0)

  const previous = () => {
    setCurrentQ(preQ => preQ - 1)
  }

  const next = () => {
    setCurrentQ(preQ => preQ + 1)
  }

  return (
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
                <Button className='submit border-0' onClick={() => window.location.reload()}>
                  Restart
                </Button>
              </Col>
            )}
          </Row>
        </div>
      </Row>
      <Row className='timer-container mt-3'>
        <div className='justify-content-center d-flex position-relative'>
          <div className='timer position-absolute shadow-lg d-flex justify-content-center align-items-center' style={{ height: '90px', width: '90px', fontWeight: "bolder", color: 'red' }}>
            End!
          </div>
        </div>
      </Row>
      <Row className='' style={{ width: '50%', minWidth: "700px" }}>
        <Col>
          <QuizReview currentQ={currentQ} qList={qList} userChoice={userChoice}/>
        </Col>
      </Row>
    </Container >
  )
}