import React from 'react';
import Countdown from 'react-countdown';
import { AiOutlineBars } from 'react-icons/ai';

export default function Main() {
    // Custom renderer for Countdown
    const customRenderer = ({ days, hours, minutes, seconds }) => {
        return (
            <>
                <div className="countdown-container bg-dangr m-auto">

                    <div className='days'>
                        <div className="time-block">
                            <span className="time-value">{days.toString().slice(0, 1)}</span>
                        </div>
                        <div className={`time-block`}>
                            <span className="time-value">{days.toString().slice(1, 2)}</span>
                        </div>
                        <h3 className='w-100 text-uppercase fw-light mt-3'>Days</h3>
                    </div>

                    <div className='hours'>
                        <div className="time-block">
                            <span className="time-value">{hours.toString().slice(0, 1)}</span>
                        </div>
                        <div className={`time-block`}>
                            <span className="time-value">{hours.toString().slice(1, 2)}</span>
                        </div>
                        <h3 className='w-100 text-uppercase fw-light mt-3'>Hours</h3>
                    </div>



                    <div className='minutes'>
                        <div className="time-block">
                            <span className="time-value">{minutes.toString().slice(0, 1)}</span>
                        </div>
                        <div className={`time-block`}>
                            <span className="time-value">{minutes.toString().slice(1, 2)}</span>
                        </div>
                        <h3 className='w-100 text-uppercase fw-light mt-3'>Minutes</h3>
                    </div>


                    {/* <div className='seconds'>
                        <div className="time-block">
                            <span className="time-value">{seconds.toString().slice(0, 1)}</span>
                        </div>
                        <div className={`time-block`}>
                            <span className="time-value">{seconds.toString().slice(1, 2)}</span>
                        </div>
                        <h3 className='w-100 text-uppercase fw-light mt-3'>Seconds</h3>
                    </div> */}


                </div>

            </>

        );
    };

    return (
        <>
            <main>
                <aside>
                    <div>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    <div className='socilMediaIcons text-center'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitch"></i>
                    </div>

                </aside>



                <header>
                    <div className=" text-center mb-5 pt-4">
                        <img src={require('../../Assets/images/Logo.png')} alt="LogoImg" className="logo" />
                    </div>
                    <h1 className="text-capitalize text-white text-center mb-5">Launching Soon</h1>
                </header>

                <section className="text-white fw-bold fs-1 text-center mt-3">
                    <Countdown
                        date={Date.now() + 1100000000}
                        renderer={customRenderer}
                    />
                </section>

                <footer className='text-white text-capitalize text-center mt-5'>
                    <h4>We’ll let you know when we are Launching</h4>

                    <div className='inputWrapper'>
                        <input type="text" className='' placeholder='Email Address' />
                        <button>Notify Me</button>
                    </div>
                </footer>
            </main>

        </>
    );
}
