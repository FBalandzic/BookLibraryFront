import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Login from "./Login"

function Header({ user, setUser }) {
    const history = useHistory();

    const handleSignOut = () => {
        setUser(null);
        history.push("/Home");
    };

    return (
        <header>
            <p>ElanWave bookstore</p>
            {!user && (
                <div className="loginDiv" >
                    <Login setUser={setUser} />
                </div>
            )}
            {user && (
                <button onClick={handleSignOut}>Izloguj</button>
            )}
        </header>
    )
}

export default Header;