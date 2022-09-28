import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vuuv8w4', 'template_gciy8ut', form.current, 'dVIQ5gDdh__uEUOMs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div style={{ background: '#091214' }} className='lg:px-16 px:0 mt-16 '>
            <div class="hero  ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div style={{ background: '#091214' }} class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form ref={form} onSubmit={sendEmail} class="card-body">
                            <h1 className='text-xl text-warning font-bold text-center'> Contact Me</h1>
                            <hr />
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Name</span>
                                </label>
                                <input style={{ background: '#0F1D20' }} name='name' type="text" placeholder="Your Name" class="input input-bordered text-white" />
                            </div>
                            <div class="form-control">
                                <label class="label lable-warning">
                                    <span class="label-text text-white">Email</span>
                                </label>
                                <input style={{ background: '#0F1D20' }} type="text " name='user_email' placeholder="Your Email" class="input input-bordered text-white" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Message</span>
                                </label>
                                <textarea name='message' style={{ background: '#0F1D20' }} class="textarea text-white" placeholder="Write Your Message"></textarea>
                            </div>
                            <div class="form-control mt-6 txt-2xl">
                                <button class="btn btn-outline btn-warning">SEND EMAIL</button>
                            </div>
                        </form>
                    </div>
                    <div class="text-center lg:text-left lg:mr-64 mr:0">
                        <img src="https://i.ibb.co/HCP7dq0/contact-9f331cf8e5f3a6bdd1a2.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;