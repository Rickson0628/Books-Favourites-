import { useState } from "react";
import {  Form, Alert, Button } from 'react-bootstrap';
import { authenticateUser } from "@/lib/authenticate";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { favouritesAtom } from '@/store';
import { getFavourites } from "@/lib/userData";
import PageHeader from './../components/PageHeader';

export default function Login(props) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [warning, setWarning] = useState('');
  const router = useRouter();
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom); 

  async function updateAtom(){
    setFavouritesList(await getFavourites()); 
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await authenticateUser(userName, password);
      await updateAtom();
      router.push("/");
    } catch (err) {
      setWarning(err.message);
    }
  }

  return (
    <>
  
        <PageHeader text="Login" subtext="Enter your login information below:"></PageHeader>
  
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
        { warning && ( <><br /><Alert variant="danger">{warning}</Alert></> )}
        <Button variant="primary" className="pull-right" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}