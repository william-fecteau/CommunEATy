import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import LoginModal from "../../components/LoginModal";
import { useState } from "react";

function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col mr-32">
          <div className="flex flex-col flex-wrap mt-8">
            <div className="font-extrabold text-4xl">
              Eat and Save,
              <br />
              Together 😎
            </div>
            <div className="mt-8">
              Save money 💸 <br />
              Discover new cuisines 🧑‍🍳 <br />
              Meet new people 🤝 <br />
            </div>
          </div>

          <PrimaryButton
            onClick={() => {
              setShowLoginModal(true);
            }}
          >
            Let's eat
          </PrimaryButton>
        </div>
        <img
          className="self-center"
          style={{ width: "512px" }}
          src={
            "https://cdn.discordapp.com/attachments/482569552933289984/1069090172131627128/test.png"
          }
        />
      </div>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
}
export default Home;
