import Card from "react-bootstrap/Card";
import profile from "../assets/images/pf.png";

function LiveSection() {
  return (
    <div class="pt-5 pb-5">
      <Card style={{ padding: "1.5rem", background: "#212121" }} class="rounded">
        <Card.Body>
          <Card.Title>LIVE CONVERSATION</Card.Title>
          <Card.Subtitle>Most populare conversation</Card.Subtitle>
          <div className="row content pt-3">
            <div class="col-sm-6">
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <img src={profile} alt="profile" srcset="" class="rounded" />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-5">Ryojaya</div>
                      <div className="col-5 d-flex justify-content-end"><div class="label text-center w-50 rounded "  style={{background: "#227c70"}}>Positive</div></div>
                    </div>
                    <div className="row">
                      <div className="pt-3">
                        <p>status : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-3">
                        <div className="row">
                          <div className="col">2023-02-1 04:20</div>
                          <div className="col">l</div>
                          <div className="col">s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* artikel kedua */}
            <div class="col-sm-6">
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <img src={profile}  alt="profile" srcset="" class="rounded" />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-5">Ryojaya</div>
                      <div className="col-5 d-flex justify-content-end"><div class="label text-center w-50 rounded" style={{background: "#227c70"}}>Positive</div></div>
                    </div>
                    <div className="row">
                      <div className="pt-3">
                        <p>status : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-3">
                        <div className="row">
                          <div className="col">2023-02-1 04:20</div>
                          <div className="col">l</div>
                          <div className="col">s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LiveSection;
