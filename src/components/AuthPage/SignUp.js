import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Container, LinkToRedirect, BiggerPart, FormsPart } from "./auth.styled.js";
import apiAuth from "../../services/api.auth.js";
import { PropagateLoader } from "react-spinners";

export default function SignUp() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ email: '', password: '', username: '', pictureURL: '' });
    const [isLoading, setIsLoading] = useState(false);
    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
        console.log(formInfo)
    }

    function handleSubmit(e) {
        if (formInfo.email === "" || formInfo.password === "" || formInfo.username === "" || formInfo.pictureURL === "") {
            alert("Please fill in all text fields.");
            return;
        }
        e.preventDefault();
        setIsLoading(true);
        apiAuth.submitSignUp(formInfo)
            .then(res => {
                setIsLoading(false);
                navigate("/")
            }).catch(err => {
                console.log(err.response)
                setIsLoading(false);
                alert(err.response)
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
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleForm}
                        value={formInfo.username}
                        focus="true"
                        data-test="username"
                    />
                    <input
                        type="text"
                        name="pictureURL"
                        placeholder="picture url"
                        onChange={handleForm}
                        value={formInfo.pictureURL}
                        focus="true"
                        data-test="picture-url"
                    />
                    <button type="submit" disabled={isLoading} data-test="sign-up-btn">
                        {isLoading ? (<PropagateLoader color="#ffffff" size={10} speedMultiplier={0.6} />) : "Sign Up"}
                    </button>
                </form>
                <LinkToRedirect
                    onClick={() => navigate("/")}
                    data-test="login-link">
                    Switch back to log in
                </LinkToRedirect>
            </FormsPart>
        </Container>

    </>)
}