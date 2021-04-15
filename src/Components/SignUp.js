import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

export function SignUp() {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    const handleAddUser = async () => {
        if (password === repPassword) {
            const response = await fetch('https://localhost:44378/api/User/addUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': username,
                    'password': password
                })
            });
            history.push('/Home');
        }
    }

    return (
        <main className="SignUp">

            <span>
                <p>Username*</p>
                <p><input type="text" name="username" onChange={e => setUserName(e.target.value)} /></p>

                <p style={{ color: "red" }}>This username is taken</p>
            </span>

            <span>
                <p>Password*</p>
                <p><input type="password" name="password" onChange={e => setPassword(e.target.value)} /></p>
            </span>

            <span>
                <p>Repeat Password*</p>
                <p><input type="password" name="passwordRepeat" onChange={e => setRepPassword(e.target.value)} /></p>
                {password !== repPassword && (
                    <p style={{ color: "red" }}>Password don't match</p>
                )}

            </span>

            <div className="buttons">
                <button onClick={handleAddUser}>Confirm</button>
                <Link to="/Home">Cancel</Link>
            </div>
        </main>
    )
}

