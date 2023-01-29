import axios from "axios";
import "./App.css";
import Layout from "./views/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Events from "./views/events/Events";
import EventDetails from "./views/event-details/EventDetails";
import { useState, createContext } from "react";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = "http://localhost:42069";
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.get("/").then((res) => console.log(res.data));
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ username: null });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/details" element={<EventDetails />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default App;
