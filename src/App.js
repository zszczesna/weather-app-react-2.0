import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Venice"/>
     
     <small>This project was coded by <a href="mailto:szczesna.zuzia@gmail.com" target="blank"> Zuzanna Szczęsna </a>and is
    <a href="https://github.com/zszczesna/weather-app-react-2.0" target="blank"> open-sourced on GitHub{" "}</a>
    and <a href="https://www.netlify.com/" target="blank">hosted on Netlify</a></small>
    </div>
    </div>
  );
}

export default App;
