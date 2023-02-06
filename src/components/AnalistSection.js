import { Pie } from "react-chartjs-2";
import PieChart from "./parts/PieChart";
import WordCloud from "react-d3-cloud";



const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'lol', value: 200 },
  { text: 'AHouy', value: 10000 },
];


function AnalistSection() {
  return (
    <div class="pt-5">
      <div class="row firstsec">
        <div class="col-sm-6">
          <h4>TOP ISSUE</h4>
          <p>A collection of widely discused issue</p>
          <div class=""><WordCloud data={data} /></div>
        </div>
        <div class="col-sm-6 ">
          <h4>SENTIMENT ANALYSIS RESULT</h4>
          <p>Cumulative calculation of sentiment analysis result</p>
          <div class="d-flex justify-content-center">

          <div class="h-75 w-75 "><PieChart/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnalistSection;
