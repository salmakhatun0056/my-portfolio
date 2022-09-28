import React from 'react';

const About = () => {
    return (
        <div>
            <div style={{ background: '#091214' }} class="hero min-h-screen bg-base-200 mt-16 lg:mt-8 lg:px-16 px-0">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <img src="https://i.ibb.co/88BMjrt/Profile-and-Career-Promotion-for-Life-and-Business-Coach-Instagram-Post-2.png" class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:mx-16 mx-6'>
                        <h1 class="text-5xl lg:mt-20 mt-0 text-white font-serif">I am <span className='text-warning'>Salma Khatun</span></h1>
                        <p class="py-6 text-justify text-white">I am a self-curious Web Developer as my educational background is not related programming, I am student of Bangla but enjoy Web Development so much, try to develop the front end of a web application using React.js and the back-end using Node.js(express) with comfortable. Besides always ready to learn any new technology. Honestly, I am excited to start my career as a web developer as well as to enhance my workplace and reputation day by day. I always focus on learning new technology. I am currently studying in the Sirajganj Govt.College.</p>

                    </div>

                </div>
            </div>
            <div style={{ background: '#091214', }} className='flex justify-center px-16 gap-x-4 '>
                <div className='lg:w-1/2 w-full'>
                    <h1 className='text-warning font-bold text-4xl my-2 text-center'>My Skills</h1>
                    <div className='border border-4 rounded border-warning lg:p-4 p-2 mt-4 mb-8'>
                        <div className='lg:flex lg:items-center flex-col  lg:flex-row lg:gap-x-6 gap-x-2 '>
                            <div className='text-warning font-bold text-2xl my-2'> Expertise: </div>
                            <div className=' flex flex-wrap  gap-2 text-white lg:ml-10 ml-0'>
                                <p className=' border  border-warning px-1'>ReactJs</p>
                                <p className=' border  border-warning px-1'>Html5</p>
                                <p className=' border  border-warning px-1'>Rest api</p>
                                <p className=' border  border-warning px-1'>Jsx</p>
                                <p className=' border  border-warning px-1'>Css3</p>
                                <p className=' border  border-warning px-1'>Context Api</p>
                                <p className=' border  border-warning px-1'>React Router Dom</p>
                                <p className=' border  border-warning px-1'>Javascript(es6)</p>
                                <p className=' border  border-warning px-1'>DaisyUi</p>
                                <p className=' border  border-warning px-1'>Tailwind</p>
                                <p className=' border  border-warning px-1'>Bootstrap</p>
                                <p className=' border  border-warning px-1'>Firebase Authentication</p>
                                <p className=' border  border-warning px-1'>Firebase Hosting</p>
                            </div>

                        </div>
                        <div className='lg:flex lg:items-center my-4 flex-col lg:flex-row lg:gap-x-6 gap-x-2 '>
                            <div className='text-warning font-bold text-2xl my-2'> Comfortable: </div>
                            <div className=' flex flex-wrap  gap-2 text-white'>
                                <p className=' border  border-warning px-1'>NodeJs</p>
                                <p className=' border  border-warning px-1'>Express</p>
                                <p className=' border  border-warning px-1'>React hook form</p>
                                <p className=' border  border-warning px-1'>Mongodb</p>
                                <p className=' border  border-warning px-1'>React Bootstrap</p>
                            </div>

                        </div>
                        <div className='lg:flex lg:items-center my-4 flex-col lg:flex-row lg:gap-x-6 gap-x-2 '>
                            <div className='text-warning font-bold text-2xl my-2'> Familiar: </div>
                            <div className=' flex flex-wrap  gap-2 text-white lg:ml-12 ml-0'>
                                <p className=' border  border-warning px-1'>Github</p>
                                <p className=' border  border-warning px-1'>Netlify</p>
                                <p className=' border  border-warning px-1'>Heroku</p>
                                <p className=' border  border-warning px-1'>Dev tool</p>
                                <p className=' border  border-warning px-1'>Figma</p>
                                <p className=' border  border-warning px-1'>Vs code</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;