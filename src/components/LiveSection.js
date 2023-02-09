import Card from "react-bootstrap/Card";
import profile from "../assets/images/pf.png";
import feedimg from "../assets/images/feed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";

function LiveSection() {
  return (
    <div class="pt-5 pb-5">
      <Card style={{ padding: "1.5rem", background: "#212121" }} class="rounded">
        <Card.Body>
          <Card.Title>LIVE CONVERSATION</Card.Title>
          <Card.Subtitle>Most populare conversation</Card.Subtitle>
          <div className="row content pt-3">
            {/* konten pertama */}
            <div class="col-sm-6 mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-2 p-1">
                    <img src={profile} alt="profile" srcset="" class="rounded" />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-5">Ryojaya</div>
                      <div className="col-5 d-flex justify-content-end">
                        <span class="badge rounded-pill p-2" style={{ background: "#227c70" }}>
                          Positif
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col text-secondary pt-1">
                        {" "}
                        <FontAwesomeIcon icon={faCalendar} /> 2023-02-1 04:20
                      </div>
                      <div className="pt-3">
                        <p>status : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-3">
                        <div className="row">
                          <div className="col-4">
                            {" "}
                            <FontAwesomeIcon icon={faHeart} /> 20
                          </div>
                          <div className="col-3">
                            {" "}
                            <FontAwesomeIcon icon={faRetweet} /> 5
                          </div>
                        </div>
                        <div class="pt-3">
                          <img src={feedimg} alt="profile" srcset="" class="rounded w-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end konten pertama */}

            {/* artikel kedua */}
            <div class="col-sm-6 mt-5 ">
              <div className="container">
                <div className="row">
                  <div className="col-2 p-1">
                    <img src={profile} alt="profile" srcset="" class="rounded" />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-5">Ryojaya</div>
                      <div className="col-5 d-flex justify-content-end">
                        <span class="badge rounded-pill p-2" style={{ background: "#227c70" }}>
                          Positif
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-secondary pt-1">
                        {" "}
                        <FontAwesomeIcon icon={faCalendar} /> 2023-02-1 04:20
                      </div>
                      <div className="pt-3">
                        <p>status : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-3">
                        <div className="row">
                          <div className="col-4">
                            {" "}
                            <FontAwesomeIcon icon={faHeart} /> 20
                          </div>
                          <div className="col-3">
                            {" "}
                            <FontAwesomeIcon icon={faRetweet} /> 5
                          </div>
                        </div>
                        <div class="pt-3">
                          <img src={feedimg} alt="profile" srcset="" class="rounded w-50" />
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
