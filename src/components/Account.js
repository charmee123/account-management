import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { toast } from "react-toastify";
import "../styles/FormStyles.css";

function Account({ user, setUser }) {
  //Initialize state with the user's current email and password
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const navigate = useNavigate();

  //function to handle form submission for account update
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = authService.updateUser({ email, password });
    setUser(updatedUser);
    toast.success("Account information updated successfully.");

    // Clear user data to log out and redirect to login
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Account Information</h2>
      <p>Update your account details below</p>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default Account;
