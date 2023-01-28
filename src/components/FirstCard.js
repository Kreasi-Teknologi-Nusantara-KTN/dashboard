import Card from "react-bootstrap/Card";

function FirstCard() {
  return (
    <div class="row firstsec ">
      <Card style={{ width: "18rem", padding: "1.5rem", background: "#212121" }} class="rounded">
        <Card.Body>
          <Card.Title>Imprestion</Card.Title>
          <h1>80/20</h1>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FirstCard;
