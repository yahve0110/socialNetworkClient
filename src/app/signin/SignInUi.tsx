"use client"

import styles from "./SignIn.module.css";
import {useState} from "react";

export const SignInUi = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const sendData = async () => {
        console.log(username)
        console.log(password)

    }

    return (
        <div className={styles.signupWrapper}>
            <div className={styles.loginForm}>
                <h2>Sign In</h2>
                <div className={styles.underline}></div>
                <input
                    type="text"
                    placeholder="nickname/email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.loginBtn} onClick={sendData}>Log In</button>
            </div>
        </div>
    );
};
