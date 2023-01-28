import Card from "react-bootstrap/Card";
function LiveSection() {
  return (
    <div class="pt-5">
      {/* <div class="card cardbg cardshad">
        <div class="card-body">
          <h5 class="card-title">LIVE CONVERSATION</h5>
          <p>Most populare conversation</p>
        </div>
      </div> */}
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
