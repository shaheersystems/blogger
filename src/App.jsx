import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";
import Team from "./pages/Team";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Header />
      <div className='flex'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/blogs/:id' element={<SinglePost />} />
          <Route path='*' element={<Error />} />
        </Routes>
        {location.pathname !== "/" ? (
          <div>
            <Sidebar />
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
