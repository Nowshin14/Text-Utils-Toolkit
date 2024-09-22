import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type) => {
    
    setAlert({
      msg: message,
      type: type,
    
    });

    /* Auto dismissing the alert after some time : */

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient( rgb(241, 241, 241) 100%, rgb(158, 232, 255) 0%)";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    } 
    
    else 
    
    {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(rgb(92, 92, 92) 100%, rgb(27, 27, 27) 0%)";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";

    }
  };

  return (
    <>
      <Router>
        <Navbar
          title= "TextUtils"
          about= "About Us"
          mode= {mode}
          togglemode= {togglemode}/>
        <Alert alert= {alert} />
        
        <Switch>
          <Route exact path= "/about">
            <About mode= {mode} />
          </Route>
          <Route exact path= "/contact">
            <Contact mode= {mode} />
          </Route>
          <Route exact path= "/">
            <TextForm
              heading= "Your Complete Text-Utility Toolkit"
              summaryHead= "Summery Of Your Text"
              mode= {mode}
              showAlert= {showAlert}/>
          </Route>
        </Switch>

        <Footer creatername = "Nowshin Zaman" />
      </Router>
    </>
  );
}

export default App;
