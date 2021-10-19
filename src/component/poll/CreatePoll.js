import React, { useRef } from "react"
import { Form, Button, Card } from "react-bootstrap"
//import CenteredContainer from "../authentication/CencentedContainer"
import PollContainer from "./PollContainer"

//const [poll, setPoll] = useState

export default function CreatePoll() {

  const questionRef = useRef()
  const optionOneRef = useRef()
  const optionTwoRef = useRef()
  const optionThreeRef = useRef()
  const optionFourRef = useRef()

  return (
      <PollContainer>
      <Card >
        <Card.Body>
          <h2 className="text-center mb-4">Enter your Poll</h2>
          <Form>
            <Form.Group id="question" className="mt-4">
              <Form.Label>Question</Form.Label>
              <Form.Control as="textarea" rows={3} ref={questionRef} required />
            </Form.Group>

            <Form.Group id="option1" className="mt-4">
              <Form.Label>Option 1</Form.Label>
              <Form.Control type="text" ref={optionOneRef} required />
            </Form.Group>

            <Form.Group id="option1" className="mt-4">
              <Form.Label>Option 2</Form.Label>
              <Form.Control type="text" ref={optionTwoRef} required />
            </Form.Group>

            <Form.Group id="option1" className="mt-4">
              <Form.Label>Option 3</Form.Label>
              <Form.Control type="text" ref={optionThreeRef} required />
            </Form.Group>

            <Form.Group id="option1" className="mt-4">
              <Form.Label>Option 4</Form.Label>
              <Form.Control type="text" ref={optionFourRef} required />
            </Form.Group>
            
            <Button className="mt-4 w-100" type="submit">
              Submit Poll
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </PollContainer>
  )
} 