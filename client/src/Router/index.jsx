import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Sidebar from "../Components/User/Layout/Sidebar";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
