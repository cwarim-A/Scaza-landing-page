import React from 'react'
import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'


const footerIcons = [
    {
        id: 1,
        image: "/Facebook.png"
    },
    {
        id: 2,
        image: "/Twitter.png"
    },
    {
        id: 3,
        image: "/Instagram.png"
    },
    {
        id: 4,
        image: "/Linkedin.png"
    },
    {
        id: 5,
        image: "/Youtube.png"
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
                                <img src={icon.image} alt={`Icon ${icon.id}`} className="h-8 w-8" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

