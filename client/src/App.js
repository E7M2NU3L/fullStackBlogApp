import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/UserLogin/Login/Login";
import Register from "./Components/UserLogin/Register/Register";
import Navbar from './utils/Navbar/Navbar';
import Footer from "./utils/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Home from './Components/Home';
import NotFound from "./Components/NotFound/NotFound";
import CreateBlog from "./Components/CreateBlog/CreateBlog";
import Protected from "./pages/Protected";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <BrowserRouter> 
    <Navbar />
    <Routes>
      <Route path="/" element={<Protected authentication={false}>
        <Home />
      </Protected>} />
      <Route path="/api/v1/users/login" element={<Protected authentication={false}>
        <Login />
      </Protected>}/>
      <Route path="/api/v1/users/register" element={<Protected authentication={false}>
        <Register />
      </Protected>} />
      
      <Route path="/api/v1/users/profile" element={<Protected authentication={true}>
        <Profile />
      </Protected>} />
      
      <Route path="/api/v1/users/create-post" element={<Protected authentication={true}>
        <CreateBlog />
      </Protected>} />

      <Route path="/api/v1/users/posts/:id" element={
        <Protected authentication={true}>
          <Blog />
        </Protected>
      }
      />

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
