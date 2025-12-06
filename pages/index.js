
/*********************************************************************************
* WEB422 – Assignment 3
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name:Rickson Bozar Student ID: 167549237  Date: 2025-12-05
*
* Vercel App (Deployed) Link: _____________________________________________________
*
********************************************************************************/

import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Home() {

  const {register, handleSubmit,setValue, formState: {errors}}=useForm();
  const router = useRouter();

  function formSubmit(data){
    router.push({
      pathname: '/books',
      query: Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== ''))
    })
  }

  return (<>
  <Container>
    <PageHeader text="Search for Books" 
    subtext="Browse the extensive collection of books available on openlibrary.org.">
      
    </PageHeader>
    <Form onSubmit={ handleSubmit(formSubmit)}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formAuthor" className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author"
              {...register("author", {required: true})}
               className={errors.author ? "is-invalid" : ""}
            />
              {errors.author && <div className="invalid-feedback">Author is required</div>}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
               {...register("title")}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="formSubject" className="mb-3">
            <Form.Label>Subject (contains)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter subject keyword"
               {...register("subject")}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col lg={6}>
          <Form.Group controlId="formLanguage" className="mb-3">
            <Form.Label>Language Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter language code (e.g. eng)"
              maxLength="3"
               {...register("language")}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="formPublishYear" className="mb-3">
            <Form.Label>First Published (Year)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter published year"
               {...register("first_publish_year")}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12}>
          <Button variant="primary" type="submit" className="w-100 py-3 fs-5" disabled={Object.keys(errors).length > 0}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
    </Container>
  </>)
}