import mobileImage from '/src/assets/images/illustration-sign-up-mobile.svg'
import desktopImage from '/src/assets/images/illustration-sign-up-desktop.svg'

function App() {

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"max-w-screen-sm w-full lg:max-w-screen-lg bg-charcoal-grey mx-auto lg:min-h-[1080px] lg:max-h-[1080px] lg:flex lg:justify-center lg:items-center"}>
                <main className={" lg:w-[928px] lg:min-h-[641px] lg:grid lg:grid-rows-1 lg:grid-cols-[54.2%,45.8%] lg:items-center  bg-white lg:rounded-[2.25rem] font-Roboto text-charcoal-grey"}>
                    <div className={"lg:col-start-2 lg:col-end-2 "}>
                        {/*<img src={mobileImage} alt={""} />*/}
                        <picture>
                            <source className={""} srcSet={desktopImage} media="(min-width: 1440px)" />
                            <img className={""} src={mobileImage} alt="" />
                        </picture>
                    </div>

                    <div className={"px-6 pt-8 pb-9 lg:row-start-1 lg:col-start-1 lg:col-end-1 lg:px-[63px] lg:pt-0 lg:pb-4 relative"}>
                        <h1 className={"text-[40px] font-semibold lg:text-[56px]"}>Stay updated!</h1>
                        <p className={"pt-3 lg:pt-2"}>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul className={"space-y-3 pt-6 lg:space-y-[.7rem]"}>
                            <li className={"bg-[url('./src/assets/images/icon-list.svg')] bg-no-repeat pl-9"}>Product discovery and building what matters</li>
                            <li className={"bg-[url('./src/assets/images/icon-list.svg')] bg-no-repeat pl-9"}>Measuring to ensure updates are a success</li>
                            <li className={"bg-[url('./src/assets/images/icon-list.svg')] bg-no-repeat pl-9"}>And much more!</li>
                        </ul>

                        <h2 className={"text-xs font-medium pt-9"}>Email address</h2>
                        <input type={"email"} className={"peer invalid:bg-secondary-tomato invalid:text-tomato invalid:focus:outline-dark-tomato invalid:border-dark-tomato mt-2 px-5 w-full h-[56px] border border-secondary-grey rounded-lg placeholder:text-[16px] placeholder:font-normal placeholder:text-secondary-grey focus:outline focus:outline-dark-slate-grey focus:outline-[1px]"} placeholder={"email@company.com"}/>
                        <p className={"absolute bottom-[11.25rem] left-[15.25rem] lg:bottom-40 lg:left-[20.8rem] hidden text-xs font-medium text-tomato  peer-invalid:block"}>Valid email required</p>
                        <button className={"w-full h-[56px] bg-dark-slate-grey rounded-lg mt-6 hover:bg-[url('./src/assets/images/illustration-sign-up-desktop.svg')] hover:bg-bottom"}>
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
