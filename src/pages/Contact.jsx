import { FaLinkedin, FaLock, FaMailBulk, FaPhone, FaPiggyBank, FaTwitter } from "react-icons/fa";
import ShareTitle from "../Component/ShareTitle";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
    // const [name, setname] = useState('')
    // const [email, setemail] = useState('')
    // const [message, setmessage] = useState('')
    // const handleform = (e) => {
    //     e.preventDefault();
    //     const serviceid = 'service_jtcfjzr';
    //     const templete = 'template_m58weau';
    //     const api = 'BeNNFtPCQezvr023U'
    //     const doc = {
    //         service_id: serviceid,
    //         template_id: templete,
    //         user_id: api,
    //         templeparams: {
    //             from_name: name,
    //             from_email: email,
    //             to_name: "js junayet",
    //             message: message
    //         }

    //     }

    //     try {
    //         const res = axios.post('https://api.emailjs.com/api/v1.0/email/send', doc)
    //         console.log(res);
    //         setname('')
    //         setemail('')
    //         setmessage('')

    //     }
    //     catch (error) {
    //         console.log(error);
    //     }

    // }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jtcfjzr',
            'template_m58weau',
            form.current,
            'BeNNFtPCQezvr023U')
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Success fully send the message",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.current.reset();

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" className="bg-[#F8F9FA]">
            <div className=" max-w-5xl mx-auto">
                <div className="my-12 py-5">
                    <ShareTitle opactityTitle={"CONTACT"} Title={"Get in Touch"}></ShareTitle>
                </div>
                <div className="md:flex  mx-3 gap-20">
                    <div className=" text-xl text-[#323232] font-medium md:w-[35%] w-full">
                        <p className="text-2xl text-black font-semibold mb-8">Address</p>
                        <p>5th Floor, Plot No.22</p>
                        <p className="mb-8">Savar,Dhaka,Bangladesh</p>
                        <div className=" space-y-3">
                            <div className="flex gap-2 w-56 justify-center items-center">
                                <FaPhone className="text-2xl text-green-600"></FaPhone>
                                <p>(+800) 01640011818</p>
                            </div>
                            <div className="flex gap-2">
                                <FaLock className="text-3xl text-green-600"></FaLock>
                                <p>(060) 555 545 555</p>
                            </div>
                            <div className="flex gap-2">
                                <BiLogoGmail className="text-3xl text-green-600" />
                                <p>junayetshiblu0@gmail.com</p>
                            </div>
                        </div>
                        <div className="mt-8 space-y-2">
                            <p>Follow Me</p>
                            <div className='flex gap-4 items-center'>

                                <Link target={"_blank"} to={'https://www.facebook.com/jsjunayet73?mibextid=ZbWKwL'}>
                                    <FaSquareFacebook className='h-6 w-6' />
                                </Link>
                                <Link target={"_blank"} to={'https://github.com/jsjunayet'}><FaSquareGithub className='h-6 w-6' />
                                </Link>
                                <FaTwitter className='h-6 w-6' />
                                <FaLinkedin className='h-6 w-6' />

                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[60%] w-full">
                        <p className="text-3xl font-semibold mb-6">Send us a note</p>
                        <form ref={form} onSubmit={sendEmail} >
                            <div className="flex gap-4">
                                <input name="to_name" type="text" placeholder="Name..." className="input input-bordered w-full" />
                                <input name="from_name" type="text" placeholder="Email..." className="input input-bordered w-full" />
                            </div>
                            <textarea name="message" className="textarea textarea-bordered w-full h-40 mt-8" placeholder="Tell us more about your needs..."></textarea>
                            <button className="btn btn-success btn-outline my-3">Send Message </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;