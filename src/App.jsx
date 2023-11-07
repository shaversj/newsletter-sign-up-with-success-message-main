import mobileImage from '/src/assets/images/illustration-sign-up-mobile.svg'
import desktopImage from '/src/assets/images/illustration-sign-up-desktop.svg'

function App() {

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"max-w-screen-sm w-full lg:max-w-screen-lg bg-charcoal-grey mx-auto lg:min-h-[1080px] lg:max-h-[1080px] lg:flex lg:justify-center lg:items-center"}>
                <main className={" lg:w-[928px] lg:min-h-[641px] bg-white lg:rounded-[2.25rem] font-Roboto text-charcoal-grey"}>
                    <div>
                        <img src={mobileImage} alt={""} />
                    </div>

                    <div className={"px-6 pt-8 pb-9"}>
                        <h1 className={"text-[40px] font-semibold"}>Stay updated!</h1>
                        <p className={"pt-3"}>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul className={"space-y-3 pt-6 "}>
                            <li className={"bg-[url('./src/assets/images/icon-list.svg')] bg-no-repeat pl-9"}>Product discovery and building what matters</li>
                            <li className={"bg-[url('./src/assets/images/icon-list.svg')] bg-no-repeat pl-9"}>Measuring to ensure updates are a success</li>
                            <li className={"bg-[url('./src/assets/images/icon-list.svg')] bg-no-repeat pl-9"}>And much more!</li>
                        </ul>

                        <h2 className={"text-xs font-medium pt-9"}>Email address</h2>
                        <input className={"mt-2 w-full h-[56px] border border-secondary-grey rounded-lg placeholder:pl-5 placeholder:text-[16px] placeholder:font-normal placeholder:text-secondary-grey"} placeholder={"email@company.com"}/>
                        <button className={"w-full h-[56px] bg-dark-slate-grey rounded-lg mt-6"}>
                            <span className={"text-white font-medium"}>Subscribe to monthly newsletter</span>
                        </button>
                    </div>

                </main>
            </div>
        </div>
    </>
  )
}

export default App
