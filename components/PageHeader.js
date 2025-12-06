import { Card } from "react-bootstrap";

export default function PageHeader({text, subtext}) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
            <h1 className="mb-2">{text}</h1>
            {subtext && <p className="text-secondary fs-5">{subtext}</p>}
        </Card.Body>
      </Card>
      <br />
    </>
  );
} 