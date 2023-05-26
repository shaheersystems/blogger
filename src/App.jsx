import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";
import Team from "./pages/Team";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blogs/:id' element={<SinglePost />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
