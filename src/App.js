import "./style/LandingPage.css";
import NavigationBar from "./components/NavigationBar";
import FirstCard from "./components/FirstCard";
import TrendSection from "./components/TrendSection";
import AnalistSection from "./components/AnalistSection";
import LiveSection from "./components/LiveSection";

function App() {
  return (
    <div className="bg">
      <div className="container">
        <NavigationBar className="navcolor" />
        <FirstCard />
        <TrendSection />
        <AnalistSection />
        <LiveSection />
      </div>
    </div>
  );
}

export default App;
