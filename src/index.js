import React from "react"
import ReactDOM from "react-dom"
import App from "./component/App"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
    <React.StrictMode>
        <h1 className="d-flex align-items-center justify-content-center "> Poll Master </h1>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)