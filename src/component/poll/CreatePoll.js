import React, { useRef, useState } from "react"
import { Form, Button, Card , Alert} from "react-bootstrap"
import PollContainer from "./PollContainer"
//import { collection } from "firebase/firestore"
import { db } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore";

export default function CreatePoll() {

  const questionRef = useRef()
  const optionOneRef = useRef()
  const optionTwoRef = useRef()
  const optionThreeRef = useRef()
  const optionFourRef = useRef()

  const history = useHistory()


  const { currentUser } = useAuth()
  const [error, setError] = useState("")

  async function handleSubmit(e) { 
    e.preventDefault()

    const poll = {
      userId: currentUser.email,
      question: questionRef.current.value,
      optionOne: optionOneRef.current.value,
      optionTwo: optionTwoRef.current.value,
      optionThree: optionThreeRef.current.value,
      optionFour: optionFourRef.current.value,
      optionOneVotes: 0,
      optionTwoVotes: 0,
      optionThreeVotes: 0,
      optionFourVotes: 0,
    };
    try {
    setError("")
    const docRef = await addDoc(collection(db, "polls"), poll);
    console.log("Document written with ID: ", docRef.id);
    history.push("/viewpoll")
    } catch (e) {
      console.log(e)
      setError("Failed add poll!")
    }

  }

  return (
      <PollContainer>
      <Card >
        <Card.Body>
          <h2 className="text-center mb-4">Enter your Poll</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
      <div className="w-100 text-center mt-2">
        <Button variant="link">
          <Link to="/viewpoll"> View My Polls </Link>
        </Button>
      </div>
    </PollContainer>
  )
} 