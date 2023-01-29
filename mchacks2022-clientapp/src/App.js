import "./App.css";
import Layout from "./views/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Welcome from "./views/welcome/Welcome";
import Login from "./views/login/Login";
import Events from "./views/events/Events";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
