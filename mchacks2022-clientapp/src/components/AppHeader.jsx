import { Icon } from "@iconify/react";
import LoginModal from "./LoginModal";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function AppHeader() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <nav
        style={{ fontFamily: "Poppins" }}
        className="font-semibold text-2xl flex justify-between align-middle p-4"
      >
        <Link className="hover:cursor-pointer" to="/">
          Commun<span className="text-primary">EAT</span>y
        </Link>
        {user?.username === null && (
          <div
            className="text-navGreen text-base cursor-pointer hover:text-primary"
            onClick={() => setShowLoginModal(true)}
          >
            <Icon icon="material-symbols:login" className="inline mr-1" />
            Login
          </div>
        )}
        {user?.username !== null && (
          <div className="flex gap-16">
            <div
              className="text-navGreen text-base cursor-pointer hover:text-primary"
              onClick={() => navigate("/events")}
            >
              <Icon
                icon="material-symbols:event-available-outline-rounded"
                className="inline mr-1"
              />
              Events
            </div>
            <div
              className="text-navGreen text-base cursor-pointer hover:text-primary"
              onClick={() => {}}
            >
              <Icon icon="carbon:checkmark" className="inline mr-1" />
              Joined
            </div>
            <div
              className="text-navGreen text-base cursor-pointer hover:text-primary"
              onClick={() => {
                setUser({ username: null });
                navigate("/");
              }}
            >
              <Icon icon="bi:people-circle" className="inline mr-1" />
              {user.username}
            </div>
          </div>
        )}
      </nav>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
}
