import ProgressBar from "react-bootstrap/ProgressBar";

function ProgBar() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}

export default ProgBar;
