import axios from "axios";
import "./register.css"
import { useRef } from "react"
import {useNavigate} from "react-router"

export default function Register() {
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
            await axios.post("/auth/register", user)
            history("/login");
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Ethiosocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Ethiosocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                        <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
                        <input placeholder="Password Again" type="password" required ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type="submit">Sign up</button>
                        <button className="loginregisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
