import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import AuthProvider from "./contexts/auth.context.js";
import SignUp from "../src/components/SignUp.js";
import SignIn from "./components/SignIn.js";
import UserPage from "./components/UserPage/UserPage.js";
import Hashtag from "./pages/hashtag/hashtag.js";
//Quem estiver fazendo a rota timeline, por favor remove o comentário no components SingIn quando recebe a resposta da promise por favor.
function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/hashtag/:hashtag" element={<Hashtag />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
