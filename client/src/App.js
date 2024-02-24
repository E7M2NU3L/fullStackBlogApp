import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/UserLogin/Login/Login";
import Register from "./Components/UserLogin/Register/Register";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Home from './Components/Home';
import NotFound from "./Components/NotFound/NotFound";
import CreateBlog from "./Components/CreateBlog/CreateBlog";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/v1/users/login" element={<Login />}/>
      <Route path="/api/v1/users/register" element={<Register />} />
      <Route path="/api/v1/users/profile" element={<Profile />} />
      <Route path="/api/v1/users/create-post" element={<CreateBlog />} />

      <Route
      path="*"
      element={<NotFound />}
      />
    </Routes>
    <Footer />
      </BrowserRouter>
  );
}

export default App;
