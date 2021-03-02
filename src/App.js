import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body"
import Map from "./components/Map"
//  import Table from "./components/Table"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return(
    <Router>
      {/* <div className="container"> */}
      <div className="App container">
      <Header />
      <Body />
      {/* <Table /> */}
      <Map />

    </div>
    
    </Router>
    
  );
}

export default App;
