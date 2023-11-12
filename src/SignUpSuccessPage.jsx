import iconSuccess from "./assets/images/icon-success.svg";

const SignUpSuccessPage = ({ emailAddress, toggleModal }) => {
  return (
    <main className={"px-6 pt-[147px] pb-10 lg:px-16 lg:py-12 lg:w-[504px] lg:h-[520px] lg:items-center  bg-white lg:rounded-[2.25rem] font-Roboto text-charcoal-grey"}>
      <img className={""} src={iconSuccess} alt={""} />
      <h1 className={"pt-10 text-[40px] leading-[2.5rem] font-semibold lg:pt-10 lg:text-[56px] lg:leading-[3.5rem] lg:font-bold"}>Thanks for subscribing!</h1>
      <p className={"pt-6 lg:pt-6"}>
        A confirmation email has been sent to <span className={"font-bold"}>{emailAddress}</span>. Please open it and click the button inside to confirm your subscription
      </p>
      <button
        className={"mt-[265px] lg:mt-10 w-full h-[56px] bg-dark-slate-grey rounded-lg hover:bg-[url('./src/assets/images/illustration-sign-up-desktop.svg')] hover:bg-bottom shadow-2xl"}
        onClick={toggleModal}
      >
        <span className={"text-white font-medium"}>Dismiss message</span>
      </button>
    </main>
  );
};

export default SignUpSuccessPage;
