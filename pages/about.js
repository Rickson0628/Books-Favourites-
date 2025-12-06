import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";

export function getStaticProps() {

  return new Promise((resolve, reject) => {
    fetch('https://openlibrary.org/works/OL8273964W.json').then(res => res.json()).then(data => {
      resolve({ props: { book: data } })
    })
  })
}

export default function About(props) {
  return (<>
    <PageHeader text="About the Developer" subtext="Rickson Bozar" />
    <p>Hi, my name is Rickson Bozar and I am currently a college student studying programming. I chose Aristotle’s Nicomachean Ethics because I resonate with its ideas about living a meaningful and balanced life. The book is about the pursuit of true happiness, not just through wealth or pleasure, but through living with virtue, good character, and purpose. Aristotle explains that happiness comes from practicing good habits, making wise choices, and building meaningful friendships. As a student, I connect with these ideas because they remind me that success is not only about academic achievement, but also about developing myself as a person and learning how to live well with others.</p>
    <BookDetails book={props.book} workId='OL8273964W' showFavouriteBtn={false} />
  </>)
}