import { useState } from "react";
import {  Form, Alert, Button } from 'react-bootstrap';
import { registerUser } from "@/lib/authenticate";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";


export default function Login(props) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [warning, setWarning] = useState('');
  const router = useRouter();
 



  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await registerUser(userName, password, password2);
      router.push("/login");
    } catch (err) {
      setWarning(err.message);
    }
  }

  return (
    <>
      <PageHeader text="Register" subtext="Register for an account:"></PageHeader>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label>
          <Form.Control
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            id="userName"
            name="userName"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />
        </Form.Group>
        <br />
          <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            id="password2"
            name="password2"
          />
        </Form.Group>
        <br />
        { warning && ( <><br /><Alert variant="danger">{warning}</Alert></> )}
        <Button variant="primary" className="pull-right" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}