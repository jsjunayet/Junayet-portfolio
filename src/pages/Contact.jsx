import { FaLinkedin, FaLock, FaMailBulk, FaPhone, FaPiggyBank, FaTwitter } from "react-icons/fa";
import ShareTitle from "../Component/ShareTitle";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="bg-[#F8F9FA]">
            <div className=" max-w-5xl mx-auto">
                <div className="my-12">
                    <ShareTitle opactityTitle={"CONTACT"} Title={"Get in Touch"}></ShareTitle>
                </div>
                <div className="flex  gap-20">
                    <div className=" text-xl font-medium">
                        <p className="text-2xl font-semibold mb-8">Address</p>
                        <p>5th Floor, Plot No.22</p>
                        <p className="mb-6">Savar,Dhaka,Bangladesh</p>
                        <div className=" space-y-2">
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
                        <div className="mt-6 space-y-2">
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
                    <div className="">
                        <p>Send us a note</p>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name..." className="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Email..." className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;