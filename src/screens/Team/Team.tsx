


import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "TUAKA CASTRO",
        role: "Co-Founder/CEO",
        image: "/Castro.jpg",
        link: "https://www.linkedin.com/in/tuaka-castro-b09810272",
    },
    {
        name: "IFIOK UKOSEN",
        role: "Co-Founder/CPO",
        image: "/Ifiok.jpg",
        link: "https://www.linkedin.com/in/ifiok-ukosen",
    },
    {
        name: "OKIEMUTE ENATO",
        role: "Co-Founder/CTO",
        image: "/CTO.jpg",
        link: "https://www.linkedin.com/in/okiemute-ihongbe-enato-9076bb196",
    },
    {
        name: "TAJUDEEN WARIZ",
        role: "Co-Founder/Mobile Engineer",
        image: "/CTO.jpg",
        link: "",
    },
    {
        name: "HUSSAIN ABDULHAMID",
        role: "Head of Sales and Growth",
        image: "/Hussaini.jpg",
        link: "https://www.linkedin.com/in/hussaini0",
    },
    {
        name: "FASHOYIN DAMILOLA",
        role: "UI/UX Designer",
        image: "/Damilola.jpg",
        link: "https://www.linkedin.com/in/fashoyin-damilola-4553bb197",
    },
    {
        name: "Leyira Hamilton",
        role: "Social Media and Branding",
        image: "/Leyira.jpg",
        link: "https://www.linkedin.com/in/leyira-hamilton-648953272",
    },
    {
        name: "Emediong Jeremiah",
        role: "UI/UX Researcher",
        image: "/Jeremiah.jpg",
        link: "https://www.linkedin.com/in/emediong-jeremiah-347109243",
    },
];

// Variants for staggered cards
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Team = (): JSX.Element => {
    return (
        <div className="font-poppins">
            <Navbar />
            <section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold mt-14 text-[#4CBB17]"
                >
                    Our Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="py-3 text-base md:text-lg"
                >
                    Meet the Innovators Powering Your Future Finance
                </motion.p>
            </section>

            <section className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 py-14">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="relative w-full max-w-[270px]"
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[360px] sm:h-[360px] rounded-xl object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 rounded-xl" />
                            <div className="absolute flex flex-col bottom-6 left-3 text-white">
                                <h3 className="text-sm sm:text-base font-bold">{member.name}</h3>
                                <p className="text-xs sm:text-sm mt-2">{member.role}</p>
                                <Link
                                    to={member.link}
                                    className="border flex justify-center items-center w-[30px] h-[30px] border-white rounded-full mt-2"
                                >
                                    <SlSocialLinkedin />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#C7E7B766] flex flex-col justify-center items-center px-4 py-12 text-center"
            >
                <h2 className="text-2xl md:text-4xl font-bold">
                    Ready to make life much easier
                </h2>
                <p className="text-base md:text-lg max-w-2xl py-6">
                    Come join a team that's redefining the financial payment experience
                    for millions of people in emerging markets.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#225C07] w-full py-5 px-5 text-white text-[20px] font-bold rounded-md md:w-[20%] mt-10"
                >
                    Join our Team
                </motion.button>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#225C07] [font-family:'Poppins',Helvetica] w-full h-[300px] relative"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute w-[50%] left-[27%] top-[75%] md:left-[43%] md:top-[75%] bg-[#ffff] py-3 px-5 text-[20px] font-bold rounded-md md:w-[15%]"
                >
                    Join Scaza
                </motion.button>
            </motion.section>

            <Footer />
        </div>
    );
};
