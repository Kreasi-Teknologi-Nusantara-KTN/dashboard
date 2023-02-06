import Card from "react-bootstrap/Card";
import ProgressBar from "./parts/ProgBar";
import iconinf from "../assets/images/Iconinf.svg";
import IconCom from "../assets/images/Iconcom.svg";
import iconSummary from "../assets/images/IconSummary.svg";
import DoughnutChart from "./parts/DoughnutChart";
import MinLineChart from "./parts/MinLineChart";

function FirstCard() {
  return (
    <div class="container ">
      <div class="row pt-5 ">
        <div class="col-sm-4 pt-5 d-flex justify-content-start">
          <Card style={{ width: "21rem", padding: "1.5rem", background: "#212121" }} class="rounded">
            <Card.Body>
              <div class="row">
                <div class="col-sm-10">
                  <Card.Title>Impresion</Card.Title>
                </div>
                <div class="col-sm-2 d-flex justify-content-end">
                  <img class="icon flex-end" src={iconinf} alt="iconinf" />
                </div>
              </div>

              <div class="mt-5">
                <h1>80/20</h1>
                <hr />
                <ProgressBar />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-4 pt-5 d-flex justify-content-center">
          <Card style={{ width: "21rem", padding: "1.5rem", background: "#212121" }} class="rounded">
            <Card.Body>
              <div class="row">
                <div class="col-sm-10">
                  <Card.Title>Sumarry</Card.Title>
                </div>
                <div class="col-sm-2 d-flex justify-content-end">
                  <img class="icon flex-end" src={iconSummary} alt="iconsum" />
                </div>
              </div>

              <div>
                <h1>12910</h1>
                <hr />
                <div className="container h-75 w-75">
                  <DoughnutChart />
                </div>
              </div>
              {/* <div class="row mt-4">
                <div class="col-sm-6">
                  <h1>12910</h1>
                </div>
                <div class="col-sm-6">
                  <DoughnutChart />
                </div>
              </div> */}
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-4 pt-5 d-flex justify-content-end">
          <Card style={{ width: "21rem", padding: "1.5rem", background: "#212121" }} class="rounded">
            <Card.Body>
              <div class="row">
                <div class="col-sm-10">
                  <Card.Title>Public Reaction</Card.Title>
                </div>
                <div class="col-sm-2 d-flex justify-content-end">
                  <img class="icon flex-end" src={IconCom} alt="iconcom" />
                </div>
              </div>

              <h1>19920</h1>
              <hr />
              <MinLineChart />
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row firstsec">
        <div col-sm-4></div>
      </div>
    </div>
  );
}

export default FirstCard;
