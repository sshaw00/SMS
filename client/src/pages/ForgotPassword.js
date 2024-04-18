import { useState } from "react";
import { onForgotPassword } from "../api/auth";
import Layout from "../components/layout";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
import logo from "../components/img/IMG_20240219_090620519_HDR.jpg";
import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await onForgotPassword(values);
      dispatch(authenticateUser());

      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Layout>
      <img src={logo} className="img2 col-1" alt="Background-Pic" />

      <div className="fpwrapper col-2">
        <form onSubmit={(e) => onSubmit(e)} className="container mt-3">
          <center>
            {" "}
            <h2>Reset Password</h2>
          </center>

          <div className=" input-box">
            {/* <label htmlFor="email" className="form-label">
              Email address
            </label> */}
            <input
              onChange={(e) => onChange(e)}
              type="email"
              id="email"
              name="email"
              value={values.email}
              placeholder="Email ID"
              required
            />
            <FaUser className="icon" />
          </div>

          <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

          <button type="submit" className="regbutton">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
