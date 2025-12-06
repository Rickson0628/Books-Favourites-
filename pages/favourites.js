import { useAtom } from "jotai"
import { favouritesAtom } from "@/store"
import PageHeader from "@/components/PageHeader"
import { Col, Row } from "react-bootstrap"
import BookCard from "@/components/BookCard"



export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom)


  if(!favouritesList) return null;
  if (favouritesList.length == 0) return <><PageHeader text="Nothing Here" subtext="Try adding a book to the list"></PageHeader></>
  return (<>
    <PageHeader text="Favourites" subtext="All your favourite books, in one place"></PageHeader>
    <Row className="gy-4">
      {favouritesList.map((workId) => (
        <Col key={workId}lg={3} md={6}>
          <BookCard workId = {workId}></BookCard>
        </Col>
      ))
      }
    </Row>
  </>)
}