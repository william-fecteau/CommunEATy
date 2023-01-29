import "./App.css";
import Layout from "./views/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Welcome from "./views/welcome/Welcome";
import Events from "./views/events/Events";
import EventDetails from "./views/event-details/EventDetails";
import { useState, createContext } from "react";

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
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/events" element={<Events />} />
            <Route path="/details" element={<EventDetails />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default App;
