import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Login from "./Login"

function Header({ user, setUser }) {
    const history = useHistory();

    const handleSignOut = () => {
        setUser(null);
        localStorage.setItem("isLoggedIn", false)
        history.push("/Home");
    };

    return (
        <header>
            <div className="loginDiv" >
                {!user && (

                    <Login setUser={setUser} />

                )}
                {user && (
                    <>
                        <span>Hello, {user.username}!</span>
                        <button onClick={handleSignOut}>Izloguj</button>
                    </>
                )}
            </div>
            <h2>Elan<span className="orangeText">Wave</span> bookstore</h2>
        </header>

    )
}

export default Header;