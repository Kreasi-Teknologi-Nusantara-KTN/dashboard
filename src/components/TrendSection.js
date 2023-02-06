import Card from "react-bootstrap/Card";
import LineChart from "./parts/LineChart";

function TrendSection() {
  return (
    <div class="pt-5">
      <h4>TRENDING</h4>
      <p>Word Trending On Spesific Time</p>
      <Card style={{ padding: "1.5rem", background: "#212121" }} class="rounded h-50 ">
        <Card.Body><LineChart/></Card.Body>
      </Card>
    </div>
  );
}
export default TrendSection;
