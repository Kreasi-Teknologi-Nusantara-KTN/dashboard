import Card from "react-bootstrap/Card";
import ProgressBar from "./parts/ProgBar";
import iconinf from "../assets/images/Iconinf.svg";

function FirstCard() {
  return (
    <div class="container">
      <div class="row firstsec">
        <Card style={{ width: "18rem", padding: "1.5rem", background: "#212121" }} class="rounded">
          <Card.Body>
            <div class="row">
              <div class="col-sm-8">
                <Card.Title>Imprestion</Card.Title>
              </div>
              <div class="col-sm-4 d-flex justify-content-end">
                <img class="icon flex-end" src={iconinf} alt="iconinf" />
              </div>
            </div>

            <h1>80/20</h1>
            <hr />
            <ProgressBar />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FirstCard;
