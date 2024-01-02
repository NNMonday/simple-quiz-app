import React, { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Ingame from './Ingame'

export default function Start() {
    const [start, setStart] = useState(false)
    return !start ? (
        <Container className='text-center'>
            <Row>
                <Col>
                    <h1 className='text-white mb-4' style={{ fontSize: '50px', fontWeight: 'bolder', marginTop: '50px' }}>
                        Welcome to React Quiz Game!
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => { setStart(true) }} className='start-btn border-0 rounded-3 shadow-sm' style={{ padding: '15px 70px', fontSize: 'larger', fontWeight: 'bolder' }}>
                        Start
                    </Button>
                </Col>
            </Row>
        </Container>
    ) : (
        <Ingame />
    )
}
