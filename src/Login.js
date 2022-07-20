import React from "react";
import Header from "./Header";
import { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); // prevents refresh.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const register = (e) => {
    e.preventDefault(); // prevents refresh.
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
      <img
      className="login__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon _PNG"
      /></Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
        <button classname="login__signinButton" onClick={signIn}>
          {" "}
          Continue
        </button>
        <p>
          By continuing, you agree to Amazon's Clone{" "}
          <a href="http://www.amazon.com"> Conditions of Use</a> and{" "}
          <a href="http://www.amazon.com">Privacy Notice.</a>
        </p>
        <button classname="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;







// import React, { useState } from "react";
// import Header from "./Header";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "./Firebase";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = (event) => {
//     event.preventDefaulf(); // this stops the refresh!!!!
//     // heres the login logic

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((auth) => {
//         //logged in, redirect to homepage
//         navigate('/')
//       })
//       .catch((event) => alert(event.message));
//   };
//   const register = (event) => {
//     event.preventDefaulf(); // this stops the refresh!!!!
//     // heres the register logic
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         // created a user and logged in
//         navigate('/')
//       })
//       .catch((event) => alert(event.message));
//   };

//   return (
//     <div>
//       <Header />
//       <div className="login">
//         <Link to="/">
//           <img
//             className="login__logo"
//             src="https://www.signsallsigns.com/wp-content/uploads/2019/03/amazon-logo-transparent.png"
//             alt=""
//           />
//         </Link>
//         <div className="login__container">
//           <h1>Sign in</h1>
//           <form>
//             <h5>E-mail</h5>
//             <input
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               type="email"
//             />
//             <h5>Password</h5>
//             <input
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//               type="password"
//             />
//             <button
//               onClick={login}
//               type="submit"
//               className="login__signInButton"
//             >
//               Sign In
//             </button>
//           </form>
//           <p>
//             By creating an account or logging in, you agree to Amazon’s
//             Conditions of Use and Privacy Policy.
//           </p>
//           <button onClick={register} className="login__registerButton">
//             Create your Amazon Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
