import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  const sendText = (myText) => {
    fetch(`http://localhost:4000/iecho?text=${myText}`)
      .then((res) => res.json())
      .then(
        (data) => {
          // setIsLoaded(true);
          if (data.error) alert(data.error);
          else setTexts([...texts, data]);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      );
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    sendText(text);
  };

  return (
    <Container className="general-container" fluid>
      <Container className="header-container" fluid>
        <Form>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Insert Text"
                  value={text}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md="auto">
              <Button disabled={!text} onClick={handleClick} variant="primary">
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container className="results-container">
        <h2>Results</h2>
        {texts.map((t, index) => (
          <div className="result" key={index}>
            {t.text}
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default App;
