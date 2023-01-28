import Card from "react-bootstrap/Card";
function LiveSection() {
  return (
    <div class="pt-5 pb-5">
      <Card style={{ padding: "1.5rem", background: "#212121" }} class="rounded">
        <Card.Body>
          <Card.Title>LIVE CONVERSATION</Card.Title>
          <Card.Subtitle>Most populare conversation</Card.Subtitle>
          <div className="row content pt-3">
            <div class="col-sm-6">t</div>
            <div class="col-sm-6">t</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LiveSection;
