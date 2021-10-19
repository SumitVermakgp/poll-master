import React from "react"
import { Container } from "react-bootstrap"

export default function PollContainer({ children }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-100" style={{ maxWidth: "900px" }}>
        {children}
      </div>
    </Container>
  )
}