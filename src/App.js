import React , {Component} from "react";
import "./sigCanvas.css";
import "./App.css";
import NavBar from "./components/navbar";
import Signature from "./components/signature";  

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br/>
        <br/>
        <div className="row justify-content-center">
          <div className="col-6">
           <Signature/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
