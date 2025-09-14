import React from 'react'
import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import { icons } from 'lucide-react'
import { Link } from 'react-router-dom'

const cardContent = [
    {
        icon: "/question.png",
        title: "Have a question?",
        desc: "Check out our FAQ section for answers to some of our most common customer questions.It’s the fastest way to get the answer you’re looking for",
        msg: "Visit our FAQs page",
        link:"/faq"
    },
    {
        icon: "/message.png",
        title: "Send us a message",
        desc: "Our priority is your satisfaction, support team is available to take your queries and deliver on-time response.",
        msg: "Send us a message",
        link:"/contact-page"
    },
    {
        icon: "/socials.png",
        title: "Our Socials",
        desc: "Stay connected with us on our official social media channel for updates, news and support.",
        msg: "Visit our social media page",
        link:"/social"

    }
]

export const Contact = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      place-items-center gap-6 px-[190px] py-20 bg-gray-100'>
                {cardContent.map((card, index) => (
                    <div key={index} className='w-[320px] h-[350px] flex justify-between flex-col gap-3 bg-white py-10 px-5 rounded-xl shadow-lg mb-5 md:mb-40'>
                        <img src={card.icon} alt={card.title} className='w-[40px] h-[40px]' />
                        <h3 className='text-[18px] font-bold text-[#4CBB17] py-5'>{card.title}</h3>
                        <p className='text-[14px]'>{card.desc}</p>
                        <Link to={card.link}><button className='text-[14px] text-left font-bold text-[#4CBB17] mt-5'>{card.msg}</button></Link>
                    </div>
                ))}
            </main>
            <section className='bg-[#C7E7B766] flex flex-col lg:flex-row 
                          items-center justify-center gap-10 py-16 px-5'>
                <div>
                    <img src="/Qr-scan.jpg" alt="" className='w-[300px] h-[300px]  rounded-2xl' />
                </div>
                <div className='max-w-lg text-center md:text-left'>
                    <h2 className='text-3xl font-bold'>Join Us and be guided through the new era of payment</h2>
                    <div className="flex px-3  items-center   md:justify-start gap-3 py-5">
                        {/* Play Store */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.scaza"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white flex items-center gap-3 px-1 py-1 rounded-lg hover:bg-gray-900 transition"
                        >
                            <img src="playstore.png" alt="Play Store" className="h-5 w-5" />
                            <div className="text-left leading-tight">
                                <p className="text-xs">Download on the</p>
                                <span className="text-[12px] font-semibold">PLAY STORE</span>
                            </div>
                        </a>

                        {/* Apple Store */}
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white flex items-center gap-3 px-1 py-1 rounded-lg hover:bg-gray-900 transition"
                        >
                            <img src="apple.png" alt="Apple Store" className="h-5 w-5" />
                            <div className="text-left leading-tight">
                                <p className="text-xs">Download on the</p>
                                <span className="text-[12px] font-semibold">APPLE STORE</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

