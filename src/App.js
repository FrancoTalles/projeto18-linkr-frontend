import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import AuthProvider from "./contexts/auth.context.js";
import SignUp from "../src/components/AuthPage/SignUp.js";
import SignIn from "../src/components/AuthPage/SignIn.js";

function App() {
  return (<>
    <GlobalStyle />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/timeline" element={<Home />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
  );
}

export default App;
