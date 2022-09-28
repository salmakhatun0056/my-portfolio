import React from 'react';
import myResume from '../../assest/SALMA KHATUN RESUME (1) (9).pdf'

const Landing = () => {
    return (
        <div>
            <div style={{ background: 'rgb(9, 18, 20)' }} className="hero h-screen md:h-[70vh] lg:h-[80vh] md:mt-0 mt-16">
                <div className="hero-content flex-col lg:flex-row gap-x-48">

                    <div className=' lg:mt-0 mt-6 '>
                        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200" className="text-5xl   text-white font-serif">HELLO!</h1>

                        <h1 className='text-white text-5xl font-serif' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">I am <span className='text-warning'>SALMA Khatun</span></h1>

                        <p style={{ color: '#3C5B63' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className=' py-6 max-w-xl text-justify'>Obviously I'm a Web Developer with over 1 years of experience. Experienced with all stages of the development </p>

                        <div data-aos="zoom-in" data-aos-delay="1700">
                            <a data-aos="zoom-in" data-aos-delay="1500" className=' font-bold' download href={myResume}><button className='btn btn-outline btn-warning'>Download Resume</button></a>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000" className=''>
                        <div className='  shrink-0'>
                            <img src="https://i.ibb.co/6Wm8vF9/Black-Pattern-Minimalist-Linked-In-Profile-Picture-2-2.png" alt="" className="h-full " />
                        </div>
                        {/* <div className='bg-warning z-100 relative h-1 mt-[-5px] ml-2' >

                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className='shadow-lg p-12 w-5/6 rounded-2xl mx-auto lg:mt-[-40px] mt-[-30px] md:mt-[-60px] bg-warning z-50 relative'>
                <h1 className='text-center'>Contact Me</h1>
                <div className=' w-full mx-auto '>
                    <form action="">

                        <div className='flex flex-row gap-x-12 w-full'>
                            <div className='flex flex-col gap-2'>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                                <input type="text" placeholder="Type here" class="input input-border w-full max-w-xs" />
                                <input type="text" placeholder="Type here" class="input input-border w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>


                    </form>
                </div>
            </div> */}
        </div>
    );
};

export default Landing;