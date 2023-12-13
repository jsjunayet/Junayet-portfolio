
import { Link } from 'react-router-dom';
import ShareTitle from '../Component/ShareTitle';
import img from "../assets/Screenshot 2023-12-13 224916.png";
import img1 from "../assets/Screenshot 2023-12-13 225008.png";
import img2 from "../assets/Screenshot 2023-12-13 225129.png";
import img3 from "../assets/Screenshot 2023-12-13 225222.png";
import img4 from "../assets/Screenshot 2023-12-13 225252.png";
import img5 from "../assets/Screenshot 2023-12-13 225323.png";
import img6 from "../assets/Screenshot 2023-12-13 225359.png";
import img7 from "../assets/Screenshot 2023-12-13 232440.png";



const Porfolio = () => {
    return (
        <section>
            <div>
                <ShareTitle opactityTitle={"PORTFOLIO"} Title={"My Work"}></ShareTitle>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-10'>
                    <Link target='"_blank' to={"https://splendid-stardust-cf0114.netlify.app/"}>
                        <img src={img} className=' md:h-[325px] h-full rounded shadow  object-cover' alt="" />
                    </Link>
                    <Link target={"_blank"} to={'https://adorable-horse-3c6729.netlify.app/'}>
                        <img src={img1} className=' object-cover rounded shadow ' alt="" />
                    </Link>
                    <Link target={"_blank"} to={"https://inspiring-churros-226b0a.netlify.app/"}>
                        <img src={img2} className=' object-cover rounded shadow ' alt="" />
                    </Link>
                    <Link to={"https://inspiring-churros-226b0a.netlify.app/"} target={"_blank"}> <img src={img3} className='object-cover rounded shadow ' alt="" /></Link>
                    <Link target={"_blank"} to={"https://incomparable-paprenjak-92812e.netlify.app/"}>
                        <img src={img4} className=' object-cover rounded shadow ' alt="" /></Link>
                    <Link target={"_blank"} to={"https://incomparable-paprenjak-92812e.netlify.app/"}>
                        <img src={img5} className=' md:h-[325px] h-full  object-cover rounded shadow ' alt="" />
                    </Link>
                    <Link target={"_blank"} to={"https://beautiful-griffin-33a882.netlify.app/"}>
                        <img src={img6} className=' md:h-[325px] h-full  object-cover rounded shadow ' alt="" />
                    </Link>
                    <Link target={"_blank"} to={"https://beautiful-griffin-33a882.netlify.app/"}>
                        <img src={img7} className=' md:h-[325px] h-full object-cover rounded shadow ' alt="" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Porfolio;