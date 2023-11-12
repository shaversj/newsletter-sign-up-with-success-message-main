import { useState } from "react";
import SignUpSuccessPage from "./SignUpSuccessPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

function App() {
  const [emailAddress, setEmailAddress] = useState("");
  const [showSignUpSuccessPage, setShowSignUpSuccessPage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEmailAddress(e.currentTarget.elements.email.value);
    toggleSuccessPage();
  }

  function toggleSuccessPage() {
    setShowSignUpSuccessPage(!showSignUpSuccessPage);
  }

  return (
    <>
      <div className={"bg-black min-h-screen flex items-center"}>
        <div className={"max-w-screen-sm w-full lg:max-w-screen-lg bg-charcoal-grey mx-auto lg:min-h-[1080px] lg:max-h-[1080px] lg:flex lg:justify-center lg:items-center"}>
          {showSignUpSuccessPage ? <SignUpSuccessPage emailAddress={emailAddress} toggleModal={toggleSuccessPage} /> : <SignUpPage handleSubmit={handleSubmit} />}
        </div>
      </div>
    </>
  );
}

export default App;
