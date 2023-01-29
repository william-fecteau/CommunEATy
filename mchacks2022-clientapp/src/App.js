import "./App.css";
import Layout from "./views/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Welcome from "./views/welcome/Welcome";
import Events from "./views/events/Events";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
