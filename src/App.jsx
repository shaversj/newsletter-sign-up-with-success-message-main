import mobileImage from '/src/assets/images/illustration-sign-up-mobile.svg'
import desktopImage from '/src/assets/images/illustration-sign-up-desktop.svg'

function App() {

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"max-w-screen-sm w-full lg:max-w-screen-lg bg-charcoal-grey mx-auto lg:min-h-[1080px] lg:max-h-[1080px] lg:flex lg:justify-center lg:items-center"}>
                <main className={" lg:w-[928px] lg:min-h-[641px] bg-white lg:rounded-[2.25rem]"}>
                    <div>
                        <img src={mobileImage} alt={""} />
                    </div>
                    <h1>Stay Updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>

                    <h2>Email address</h2>
                    <input placeholder={"email@company.com"}/>
                    <button>
                        <span>Subscribe to monthly newsletter</span>
                    </button>
                </main>
            </div>
        </div>
    </>
  )
}

export default App
