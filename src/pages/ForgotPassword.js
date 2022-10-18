import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, Toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    return setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("email was send ");
    } catch (error) {
      toast.error(
        "Could not send the email, kindly put correct email or SignUp"
      );
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="email"
            value={email}
            onChange={onChange}
            id="email"
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>
          <div className="signInBar">
            <div className="signInText">Send ResetLink</div>
            <button className="signInButton">
              <ArrowRightIcon fill="#fffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
