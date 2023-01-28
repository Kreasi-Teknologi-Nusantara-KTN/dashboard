function FirstCard() {
  return (
    <div class="row firstsec">
      <div class="col-sm-4">
        <div class="card cardbg cardshad">
          <div class="card-body">
            {/* card contents */}
            <div class="row d-flex">
              <div class="col-sm-6">
                <h5 class="card-title">Imprestion</h5>
              </div>
              <div class="col-sm-6 ">{/* icon */}</div>
            </div>
            <div className="content">
              <h1 class="align-content-center">80/20</h1>
            </div>
            <p class="card-text">Impression rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
