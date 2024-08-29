import "./App.css";
import { Tooltip } from "@mui/material";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameFocus, setUserNameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(""); // New state for welcome message
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "user" && password.trim() === "password") {
      setIsLoggedIn(true);
      setWelcomeMessage(`Welcome, ${userName}!`);
    } else if (userName.trim() !== "user" && password.trim() !== "password") {
      setIsLoggedIn(false);
      setError("Invalid username or password");
    } else {
      setWelcomeMessage(""); // Clear message if inputs are invalid
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <span>Username: </span>
            <Tooltip
              title={userName.trim() === "" ? "Fill out this field" : ""}
              placement="right"
              open={userNameFocus && userName.trim() === ""}
            >
              <input
                type="text"
                label="Username"
                value={userName}
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => setUserNameFocus(true)}
                onBlur={() => setUserNameFocus(false)}
                style={{ margin: "0.5rem" }}
              />
            </Tooltip>
          </div>
          <div>
            <span>Password: </span>
            <Tooltip
              title={password.trim() === "" ? "Fill out this field" : ""}
              placement="right"
              open={passwordFocus && password.trim() === ""}
            >
              <input
                type="password"
                label="Password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                style={{ margin: "0.5rem" }}
              />
            </Tooltip>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>{welcomeMessage}</h2>
      )}
    </div>
  );
}

export default App;
