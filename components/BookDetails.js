import { Button, Col, Container, Row } from "react-bootstrap";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { favouritesAtom } from "@/store";
import { addToFavourites, removeFromFavourites } from "@/lib/userData";

export default function BookDetails({ book, workId, showFavouriteBtn = true }) {
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  const [showAdded, setShowAdded] = useState(false);
  //favouritesList.includes(workId)

  useEffect(()=>{

    setShowAdded(favouritesList?.includes(workId))

  }, [favouritesList])


  const favouritesClicked = async() => {
    if (showAdded) {
      setFavouritesList(await removeFromFavourites(workId));
    } else {
      setFavouritesList(await addToFavourites(workId));
    }
    setShowAdded(!showAdded);
  }

  return (
    <Container>
      <Row>
        <Col lg="4">
          <img
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = "https://placehold.co/400x600?text=Cover+Not+Available";
            }}
            className="img-fluid w-100"
            src={`https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`}
            alt="Cover Image"
          />
          <br /><br />
        </Col>

        <Col lg="8">
          <h3>{book?.title}</h3>
          {book?.description && (
            <p>{typeof book.description === "string" ? book.description : book.description.value}</p>
          )}

          {book?.subject_people && (
            <div>
              <h5>Characters</h5>
              {book.subject_people.join(', ')}
            </div>
          )}

          {book?.subject_places && (
            <div>
              <h5>Settings</h5>
              {book.subject_places.join(', ')}
            </div>
          )}

          {book?.links && book.links.length > 0 && (
            <div>
              <h5>More Information</h5>
              {book.links.map((link, index) => (
                <div key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </div>
              ))}
            </div>
          )}

          {showFavouriteBtn && (
            <Button
              variant={showAdded ? "primary" : "outline-primary"}
              onClick={favouritesClicked}
              className="mt-3"
            >
              {showAdded ? "+ Favourite (added)" : "+ Favourite"}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
