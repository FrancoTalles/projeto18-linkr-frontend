import axios from "axios";
//Verificar como deixar essa baseURL no .env, que no meu ele não achou automaticamente
const baseURL="http://localhost:5000"

function submitSignUp(body){
    const promise = axios.post(`${baseURL}/signup`, body);
    return promise
};

function submitSignIn(body){
    const promise = axios.post(`${baseURL}/signin`, body);
    return promise
}

const apiAuth = {submitSignUp, submitSignIn};
export default apiAuth;