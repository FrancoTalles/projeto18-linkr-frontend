import { useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { Container, LinkToRedirect, BiggerPart, FormsPart } from "./auth.styled.js";
import apiAuth from "../../services/api.auth.js";
import { AuthContext } from '../../contexts/auth.context.js';
import { PropagateLoader } from "react-spinners";

export default function SignIn() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ email: '', password: '' });
    const { setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        apiAuth.submitSignIn(formInfo)
            .then(res => {
                setIsLoading(false);
                const { token, pictureURL, username } = res.data;
                setUser({ token, pictureURL, username })
                localStorage.setItem("user", JSON.stringify({ token, pictureURL, username }))
                navigate("/timeline")
            }).catch(err => {
                setIsLoading(false);
                alert(err.response.data)
            })
    }
    return (<>
        <Container>
            <BiggerPart>
                <h1>linkr</h1>
                <h3>save, share, discover</h3>
                <h3>the best links on the web</h3>
            </BiggerPart>
            <FormsPart>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={handleForm}
                        value={formInfo.email}
                        focus="true"
                        data-test="email"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleForm}
                        value={formInfo.password}
                        focus="true"
                        data-test="password"
                    />
                    <button type="submit" disabled={isLoading} data-test="login-btn">Log In</button>
                </form>
                <LinkToRedirect
                    onClick={() => navigate("/sign-up")}
                    data-test="sign-up-link">
                    {isLoading ? (<PropagateLoader color="#ffffff" size={10} speedMultiplier={0.6} />) : "First time? Create an account!"}

                </LinkToRedirect>
            </FormsPart>
        </Container>

    </>)
}