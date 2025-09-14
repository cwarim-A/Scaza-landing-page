

import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const links = [
    { title: "Recent" },
    { title: "News" },
    { title: "Personal" },
    { title: "Product Update" }
];

const cardDetails = [
    {
         image: "/Qr-scan.jpg",
         title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
        author: "By Scaza",
        date: "August 15, 2025"
     },
    {
        image: "/Qr-scan.jpg",
         title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
         author: "By Scaza",
         date: "August 15, 2025"
     },
    {
        image: "/Qr-scan.jpg",
        title: "How to transact through cashless payment in Nigeria",
        description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
         author: "By Scaza",
        date: "August 15, 2025"
    },
    {
         image: "/Qr-scan.jpg",
         title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
        author: "By Scaza",
        date: "August 15, 2025"
    },
    {
         image: "/Qr-scan.jpg",
         title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
         author: "By Scaza",
         date: "August 15, 2025"
     },
     {
         image: "/Qr-scan.jpg",
         title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
         author: "By Scaza",
         date: "August 15, 2025"
     },
     {
         image: "/Qr-scan.jpg",
         title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
        author: "By Scaza",
        date: "August 15, 2025"
    },
    {
        image: "/Qr-scan.jpg",
        title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
         author: "By Scaza",
         date: "August 15, 2025"
     },
    {
         image: "/Qr-scan.jpg",
        title: "How to transact through cashless payment in Nigeria",
         description: "In today’s fast-paced world, carrying physical cash is becoming less necessary because many other countries, is embracing cashless payments.",
         author: "By Scaza",
         date: "August 15, 2025"
     }
 ]

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

export const Blog = (): JSX.Element => {
    return (
        <div className="font-poppins">
            <Navbar />

            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className='relative font-poppins bg-[#59B82C57] min-h-[300px] flex flex-col items-center text-center py-16 md:mb-20'
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-[#4CBB17]">
                    Our Blog
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 py-5 px-4 max-w-2xl">
                    Discover our behind-the-scenes operations, fascinating stories,
                    <br />
                    and the individuals transforming millions of businesses' aspirations.
                </p>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="absolute w-[90%] sm:w-[80%] lg:w-[1000px] h-auto top-[80%] bg-white text-black shadow-lg rounded-lg overflow-hidden"
                >
                    <img
                        src="/marketplace2.jpg"
                        alt="point of usage"
                        className="object-cover w-full sm:h-[300px] md:h-[400px] object-center"
                    />
                    <p className="text-[18px] text-left font-bold px-5 py-2">
                        How Sacza is Revolutionizing the way African transact
                    </p>
                    <div className="flex items-center justify-between px-5 py-5 sm:text-sm">
                        <p>By Scaza</p>
                        <p>August 15, 2025</p>
                    </div>
                </motion.div>
            </motion.section>

            {/* Links Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-[500px] border-t-2 border-b-2 py-3 mb-20"
            >
                <div className="flex flex-col md:flex-row items-center justify-between w-[85%] mx-auto gap-4 px-5 md:px-20 lg:px-[170px]">
                    <div className="w-[250px] border rounded-2xl py-2 px-2">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search..."
                            className="outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-10">
                        {links.map((link, index) => (
                            <motion.p
                                key={index}
                                variants={fadeInUp}
                                className="text-[14px] font-bold text-[#4CBB17]"
                            >
                                {link.title}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Blog Cards */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-40 mb-40">
                    {cardDetails.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex flex-col items-center w-[320px] h-auto shadow-xl rounded-2xl overflow-hidden"
                        >
                            <img
                                src={card.image}
                                alt="background-image"
                                className="object-cover object-center"
                            />
                            <h2 className="text-[#225C07] font-bold text-[14px] px-3 py-5">
                                {card.title}
                            </h2>
                            <p className="text-[12px] px-3">{card.description}</p>
                            <div className="flex items-center justify-between px-3 py-5 text-[12px] w-full">
                                <p>{card.author}</p>
                                <p>{card.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#225C07] w-full h-[250px]"
            >
                <div className="flex flex-col justify-center items-center py-20">
                    <h2 className="text-white text-2xl font-bold">
                        Built for the Way You Pay
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black font-bold py-3 px-4 mt-10 rounded-lg w-[80%] md:w-[12%]"
                    >
                        Join Scaza
                    </motion.button>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};
