import React, { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { db } from "../../firebase"
//import { useAuth } from "../../contexts/AuthContext"
import { collection, onSnapshot } from "firebase/firestore";
import PollContainer from "./PollContainer";
//import {  useHistory } from "react-router-dom"
import Navbar from "./Navbar";

export default function ViewPoll() {

    //const history = useHistory()
    //const { currentUser } = useAuth()
    //const [error, setError] = useState("")

    //const [polls, setPolls] = useState([]);
    
    //useEffect(() => {
    //    onSnapshot(collection(db, "polls"), (snapshot) => {
    //        setPolls(snapshot.docs.map(doc => doc.data()));
    //    });
    //
    //}, []);

    //const test = polls[0].userId;
    //console.log(polls[0].userId)

    return  (
        <>
        <Navbar />
        
        <Card>
            <Card.Body>
            <h2 className="text-center mt-1 space-left2">View Polls</h2>
            </Card.Body>
        </Card>
       
        <Card>
            <Card.Body>
            <h2 > Poll 1</h2>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <h2 > Poll 2</h2>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <h2 > Poll 3</h2>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <h2 > Poll 4</h2>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <h2 > Poll 5</h2>
            </Card.Body>
        </Card>
        </>
    )     
} 