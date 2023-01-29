import axios from "axios";
import "./App.css";
import Layout from "./views/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Events from "./views/events/Events";
import EventDetails from "./views/event-details/EventDetails";
import { useState, createContext } from "react";
import CreateEvent from "./views/create-event/CreateEvent";
import About from "./views/about/About";
import Joined from "./views/joined/Joined";

axios.defaults.baseURL = "http://localhost:42069";
axios.defaults.headers.common["Content-Type"] = "application/json";

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
            <Route path="/joined" element={<Joined />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default App;
