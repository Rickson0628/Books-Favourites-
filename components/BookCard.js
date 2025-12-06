import Error from "next/error";
import { useRouter } from "next/router";
import { Button, Card } from "react-bootstrap";
import useSWR from "swr"

export default function BookCard({workId}){
  const {data, error, isLoading} = useSWR(`https://openlibrary.org/works/${workId}.json`);
  const router = useRouter();

  if (error) return <Error statusCode={404}></Error>

  if (isLoading) return <>Loading...</>

  return(<>
    <Card>
  <Card.Img
    variant="top"
    src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-L.jpg`}
    alt={`${data?.title} picture`}
    className="img-fluid w-100"
    onError={(e) => (e.target.src = "https://placehold.co/400x600?text=No+Cover")}
  />
  <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>{data.first_publish_date ? data.first_publish_date : "N/A"}</Card.Text>
    <Button variant="outline-primary" onClick={() => router.push(`/works/${workId}`)}>
      View Book
    </Button>
  </Card.Body>
</Card>

    
  </>)
}