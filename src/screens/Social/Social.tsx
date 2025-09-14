


import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const footerIcons = [
    {
        id: 1,
        image: "/Facebook.png",
        link: "https://www.facebook.com/profile.php?id=61579367357638"
    },
    {
        id: 2,
        image: "/Twitter.png",
        link: "https://x.com/SCAZA_NG?t=Kcz0gZbq9e9b0x8VGMFt0A&s=09"
    },
    {
        id: 3,
        image: "/Instagram.png",
        link: "https://www.instagram.com/scazang?igsh=MXVwNHF1ODRxM2RieQ=="
    },
    {
        id: 4,
        image: "/Linkedin.png",
        link: "https://www.linkedin.com/company/scaza1/"
    },
    {
        id: 5,
        image: "/Youtube.png",
        link: ""
    }
]

export const Social = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <section className='min-h-[60vh] flex justify-center items-center px-5 py-20 sm:py-32'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='w-full max-w-[900px] bg-[#E1ECD9] rounded-2xl flex flex-col items-center py-10 px-5 sm:px-10'
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='text-xl sm:text-2xl font-bold text-center py-3'
                    >
                        Follow Us on Social Media
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='text-sm sm:text-base text-center'
                    >
                        Stay updated with the lastest thing on scaza
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex items-center gap-5 mt-9"
                    >
                        {footerIcons.map((icon) => (
                            <motion.a
                                key={icon.id}
                                href={icon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center"
                            >
                                <img src={icon.image} alt={`Icon ${icon.id}`} className="h-8 w-8" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
            <Footer />
        </div>
    )
}
