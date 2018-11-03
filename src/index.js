import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(42);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data); //save users in the store
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h3>Counter</h3>
        <h1>{count} </h1>
        <button onClick={() => setCount(count + 1)}> Count up </button>
      </div>
      <div>
        <h3> Git Users </h3>
        <div className="section">
          {users.map(user => (
            <div key={user.id} className="card">
              <h5>
                {" "}
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} width="40px" height="40px" />{" "}
                </a>
                {user.login}{" "}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
