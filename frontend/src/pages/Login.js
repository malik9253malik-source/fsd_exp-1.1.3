import { useState } from "react";
import API from "../services/api";

function Login({ setIsLoggedIn }) {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const res = await API.post("/login", {

                username,

                password

            });

            localStorage.setItem("token", res.data.token);

            setIsLoggedIn(true);

        }

        catch {

            alert("Invalid Credentials");

        }

    };

    return (

        <div className="container">

            <h2>JWT Login</h2>

            <input

                type="text"

                placeholder="Username"

                onChange={(e) => setUsername(e.target.value)}

            />

            <input

                type="password"

                placeholder="Password"

                onChange={(e) => setPassword(e.target.value)}

            />

            <button onClick={login}>

                Login

            </button>

        </div>

    );

}

export default Login;