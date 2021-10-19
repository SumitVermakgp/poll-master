import React from "react"
import Signup from "./authentication/Singnup";
import Profile from "./Profile"
import Login from "./authentication/Login"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./authentication/PrivateRoute"
import CenteredContainer from "./authentication/CencentedContainer";

function App(){
    
    return  (
            <CenteredContainer>
            
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path="/" component={Profile} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </CenteredContainer>
    )
}

export default App;