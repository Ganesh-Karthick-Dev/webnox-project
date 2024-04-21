import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ImageUpload from "./components/ImageUpload";
import ImageRetrive from "./components/ImageRetrive";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AuthPage />}>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="home" element={<Home />} >
          <Route index element={<ImageUpload />} />
          <Route path="retrive" element={<ImageRetrive />}/>
        </Route>
      </Route>
    )
  );

  let clientId = "319799807729-f4o2e5qr8a1b4innj40v6urlaorrt73a.apps.googleusercontent.com" ;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
