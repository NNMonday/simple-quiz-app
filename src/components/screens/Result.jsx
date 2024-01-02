import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Review from './Review'

export default function Result(props) {
  const [review, setReview] = useState(false)

  return !review ? (
    <Container className='text-center pt-5'>
      <Row>
        <Col xs={12}>
          <p className='text-white' style={{ fontSize: 'xx-large' }}>Your score is: <span className='fw-bolder'>{props.result}</span></p>
        </Col>
      </Row>
      <div className="btns-container d-flex justify-content-center pt-2">
        <Row>
          <Col>
            <Button className='start-btn border-0 next' onClick={() => window.location.reload()}>
              Try again
            </Button>
          </Col>
          <Col>
            <Button variant='danger' className='border-0' onClick={()=>{setReview(true)}}>
              Review
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  ) : (
    <Review />
  )
}
