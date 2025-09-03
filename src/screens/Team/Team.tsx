import { SlSocialLinkedin } from "react-icons/sl";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";


const teamMembers = [
    {
        name: "TUAKA CASTRO",
        role: "Co-Founder/CEO",
        image: "/Castro.jpg",
        link: "https://www.linkedin.com/in/tuaka-castro-b09810272"
    },
    {
        name: "IFIOK UKOSEN",
        role: "Co-Founder/CPO",
        image: "/Ifiok.jpg",
        link: "https://www.linkedin.com/in/ifiok-ukosen"
    },
    {
        name: "OKIEMUTE ENATO",
        role: "Co-Founder/CTO",
        image: "/CTO.jpg",
        link: "https://www.linkedin.com/in/okiemute-ihongbe-enato-9076bb196"
    },
    {
        name: "TAJUDEEN WARIZ",
        role: "Co-Founder/Mobile Engineer",
        image: "/CTO.jpg",
        link: ""
    },
    {
        name: "HUSSAIN ABDULHAMID",
        role: "Head of Sales and Growth",
        image: "/Hussaini.jpg",
        link: "https://www.linkedin.com/in/hussaini0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "FASHOYIN DAMILOLA",
        role: "UI/UX Designer",
        image: "/Damilola.jpg",
        link: "https://www.linkedin.com/in/fashoyin-damilola-4553bb197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        name: "Leyira Hamilton",
        role: "Social Media and Branding",
        image: "/Leyira.jpg",
        link: "https://www.linkedin.com/in/leyira-hamilton-648953272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Emediong Jeremiah",
        role: "UI/UX Researcher",
        image: "/Jeremiah.jpg",
        link: "https://www.linkedin.com/in/emediong-jeremiah-347109243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
]




export const Team = (): JSX.Element => {
    return (
        <div className="font-poppins">
            <Navbar/>
            <section className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold mt-14 text-[#4CBB17]">Our Team</h1>
                <p className=" py-3 text-base md:text-lg">
                    Meet the Innovators Powering Your Future Finance
                </p>
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
                    {
                        teamMembers.map((member, index) => (
                            <div key={index} className="relative w-full max-w-[270px]">
                                <img src={member.image} alt={member.name} className="w-full h-[360px] sm:h-[360px] rounded-xl object-cover" />
                                <div className="absolute inset-0 bg-black/30 rounded-xl" />
                                <div className="absolute  flex flex-col bottom-6 left-3 text-white">
                                    <h3 className="text-sm sm:text-base font-bold">{member.name}</h3>
                                    <p className="text-xs sm:text-sm mt-2">{member.role}</p>
                                    <Link to={member.link} className=" border flex justify-center items-center w-[30px] h-[30px] border-white rounded-full mt-2 ">
                                        <SlSocialLinkedin className=" " />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="bg-[#C7E7B766] flex flex-col justify-center items-center px-4 py-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold">Ready to make life much easier</h2>
                <p className="text-base md:text-lg max-w-2xl py-6">Come join a team that's redefining the financial payment  experience for millions
                    of people in emerging markets.
                </p>
                <button className="bg-[#225C07] w-full py-5 px-5 text-white text-[20px] font-bold rounded-md md:w-[20%] mt-10 ">
                    Join our Team
                </button>
            </section>
            <section className="bg-[#225C07] [font-family:'Poppins',Helvetica] w-full h-[300px] relative ">
                <button className="absolute w-[50%] left-[27%] top-[75%] md:left-[43%] md:top-[75%] bg-[#ffff] py-3 px-5 text-[20px] font-bold rounded-md md:w-[15%] ">
                    Join Scaza
                </button>
            </section>
            <Footer/>

        </div>
    );
};
