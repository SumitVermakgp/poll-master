import React from "react"
import Signup from "./Singnup";
import {Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"

function App(){
    
    return  (
        <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" 
                style = {{minHeight:"50vh" }}    
            >
                <div className="w-100"  style={{ maxWidth: "500px"}}>
                <Signup />
                </div>
            </Container>
        </AuthProvider>
    )
}

export default App;