import { useEffect, useState } from "react";

import API from "../services/api";

function Dashboard({ setIsLoggedIn }) {

    const [user, setUser] = useState({});

    useEffect(() => {

        const getData = async () => {

            const token = localStorage.getItem("token");

            const res = await API.get("/dashboard", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            });

            setUser(res.data.user);

        };

        getData();

    }, []);

    const logout = () => {

        localStorage.removeItem("token");

        setIsLoggedIn(false);

    };

    return (

        <div className="container">

            <h2>Dashboard</h2>

            <h3>Welcome {user.username}</h3>

            <p>Role : {user.role}</p>

            <button onClick={logout}>

                Logout

            </button>

        </div>

    );

}

export default Dashboard;