import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect is PowerFUll
  //useEffect hook - Piece of code that runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //User is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    });

    return () => {
      //any cleanup operations go in here
      unsubscribe();
    }
  }, []);

  console.log("user is >>>>>",user);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
