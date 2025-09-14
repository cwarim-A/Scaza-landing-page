import React from 'react'
import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


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
                <div className='w-full max-w-[900px] bg-[#E1ECD9] rounded-2xl flex flex-col items-center py-10 px-5 sm:px-10'>
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-3 '>Follow Us on Social Media</h2>
                    <p className='text-sm sm:text-base text-center '>
                        Stay updated with the lastest thing on scaza
                    </p>
                    <div className="flex items-center gap-5  mt-9">
                        {footerIcons.map((icon) => (
                            <div key={icon.id} className="flex items-center justify-center">
                                <a
                                    href={icon.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={icon.image} alt={`Icon ${icon.id}`} className="h-8 w-8" /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

