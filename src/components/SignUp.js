// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Button, Typography } from "@material-ui/core";
// import { useDispatch } from "react-redux";
// import { signUp } from "../redux/slices/formSlice";
// import { Input } from "./form/Input";

// const useStyles = makeStyles({
//   signUpContainer: {
//     marginTop: "6rem",
//     width: 380,
//     margin: "0 auto",
//   },

//   titleContainer: {
//     padding: "2rem 2rem 1.5rem 2rem",
//     borderBottom: "1px solid #bcbbb5",
//   },

//   title: {
//     fontSize: "15px",
//     color: "#29303b",
//     fontWeight: "700",
//   },

//   form: {
//     padding: "1.5rem 2rem 1rem 2rem",
//   },
// });

// function SignUp() {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const handleSubmit = () => {};

//   return (
//     <div className={classes.signUpContainer}>
//       {/* Sign up container */}
//       <div className={classes.titleContainer}>
//         <Typography variant="body1" className={classes.title}>
//           Sign up and Start Learning!
//         </Typography>
//       </div>

//       {/* form Container */}
//       <form
//         noValidate
//         autoComplete="off"
//         className={classes.form}
//         onSubmit={handleSubmit}
//       >
//         <Input
//           id="name"
//           placeholder="Full Name"
//           startIcon="fas fa-user"
//           type="text"
//         />
//         <Input
//           id="email"
//           placeholder="Email"
//           startIcon="fas fa-envelope"
//           type="text"
//         />
//         <Input
//           id="password"
//           placeholder="Password"
//           startIcon="fas fa-lock"
//           endIcon="fas fa-eye-slash"
//           type="password"
//         />

//         <Button variant="outlined" onClick={() => dispatch(signUp())}>
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import {
  addName,
  addEmail,
  addPassword,
  signUp,
} from "../redux/slices/formSlice";

const useStyles = makeStyles({
  signUpContainer: {
    marginTop: "5rem",
    width: 380,
    margin: "0 auto",
  },

  titleContainer: {
    padding: "2rem 2rem 1.5rem 2rem",
    borderBottom: "1px solid #bcbbb5",
  },

  title: {
    fontSize: "15px",
    color: "#29303b",
    fontWeight: "700",
  },

  form: {
    padding: "1.5rem 2rem 1rem 2rem",
  },

  inputBase: {
    height: "1.8rem",
    width: "93%",
    border: "1px solid #777774",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    padding: "0.6rem",
    marginBottom: "0.6rem",
  },

  input: {
    display: "block",
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    fontSize: 18,
  },

  icon: {
    color: "#CACBCC",
    marginRight: "1rem",
  },

  checkbox: {
    display: "flex",
    alignItems: "flex-start",
  },

  checkboxLabel: {
    marginTop: "0.5rem",
    fontSize: 14,
  },

  btn: {
    width: "101%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: 16,
    background: "#ec5252",
    outline: "none",
    border: "none",
    color: "white",
    fontWeight: "600",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      background: "#992B37",
    },
  },

  conditionText: {
    fontSize: 10,
    marginTop: "2rem",
    paddingBottom: "1rem",
    textAlign: "center",
    borderBottom: "1px solid #bcbbb5",
  },

  spanText: {
    color: "#297791",
    cursor: "pointer",
  },

  alreadyAccountText: {
    textAlign: "center",
    marginTop: "1rem",
  },

  spanLogBtn: {
    color: "#297791",
    fontWeight: "700",
    cursor: "pointer",
  },
});

function SignUp() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addName(userName));
    dispatch(addEmail(userEmail));
    dispatch(addPassword(userPassword));
    dispatch(signUp());
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div className={classes.signUpContainer}>
      {/* Sign up container */}
      <div className={classes.titleContainer}>
        <Typography variant="body1" className={classes.title}>
          Sign up and Start Learning!
        </Typography>
      </div>

      {/* form Container */}
      <form noValidate autoComplete="off" className={classes.form}>
        <div className={classes.inputBase}>
          <i className={`fas fa-user ${classes.icon}`}></i>
          <input
            autoFocus
            ref={userNameRef}
            className={classes.input}
            placeholder="Full Name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            onKeyPress={(event) => {
              const { key } = event;
              if (key === "Enter") {
                emailRef.current.focus();
              }
            }}
          />
        </div>

        <div className={classes.inputBase}>
          <i className={`fas fa-envelope ${classes.icon}`}></i>
          <input
            ref={emailRef}
            className={classes.input}
            placeholder="Email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            onKeyPress={(event) => {
              const { key } = event;
              if (key === "Enter") {
                passwordRef.current.focus();
              }
            }}
          />
        </div>

        <div className={classes.inputBase}>
          <i className={`fas fa-lock ${classes.icon}`}></i>
          <input
            ref={passwordRef}
            className={classes.input}
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            onKeyPress={(event) => {
              const { key } = event;
              if (key === "Enter") {
                passwordRef.current.focus();
              }
            }}
          />
        </div>
        <div className={classes.checkbox}>
          <Checkbox size="small" color="primary" />
          <Typography className={classes.checkboxLabel}>
            Yes! I want to get the most out of Udemy by receiving emails with
            exclusive deals, personal recommendations and learning tips!
          </Typography>
        </div>

        <button
          className={classes.btn}
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          Sign up
        </button>

        <Typography className={classes.conditionText}>
          By signing up, you agree to our{" "}
          <span className={classes.spanText}>Terms of Use</span> and
          <span className={classes.spanText}> Privacy Policy.</span>
        </Typography>

        <Typography className={classes.alreadyAccountText}>
          Already have an account?{" "}
          <span className={classes.spanLogBtn}>Log In</span>
        </Typography>
      </form>
    </div>
  );
}

export default SignUp;
