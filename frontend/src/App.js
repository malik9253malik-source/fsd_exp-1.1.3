import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  return (
    <div>

      {isLoggedIn ?

      <Dashboard setIsLoggedIn={setIsLoggedIn}/>

      :

      <Login setIsLoggedIn={setIsLoggedIn}/>

      }

    </div>
  );

}

export default App;