import { useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()
  const { http, setToken } = AuthUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    const data = { email: email, password: password, name: name };
    http.post("/register", data).then((res) => {
      navigate('/login')
      console.log(data);
    })
    .catch((err) => {
      setErrorMessage(err.response.data.message);
      console.log(err.response.data.message);
    });
  };

  return (
    <div className="row justify-content-left pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <h1 className="text-center mb-3">Register </h1>
          {errorMessage && <div style={{color:"red"}}>{errorMessage}</div>}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="test"
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              id="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
            />
          </div>
          <button
            type="button"
            onClick={submitForm}
            className="btn btn-primary mt-4"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
