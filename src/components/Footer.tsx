import React from "react";


const footerSections = [
    {
        title: "Personal",
        links: ["Personal Account", "QR Card", "Payment"],
    },
    {
        title: "Business",
        links: ["Business Account", "QR Card", "Payment"],
    },
    {
        title: "Company",
        links: ["Blog", "Join our Team", "About us", "Press"],
    },
    {
        title: "Help",
        links: ["Get Help", "FAQs", "Contact us", "Security"],
    },
    {
        title: "Resources",
        links: ["Terms & Condition", "Privacy Policy"],
    },
];

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

const Footer = () => {
    return (
        <footer className="bg-[#EAFFE04D]  h-[200vh] md:h-[500px]  px-5 md:px-10 py-10 font-poppins">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                {/* Left Section */}
                <div className=" w-full md:w-[50%] md:ml-[45px]">
                    {/* Logo + Tagline */}
                    <div>
                        <div className="relative inline-block text-2xl  font-bold tracking-[3px] ml-0  ">
                            SC&nbsp;&nbsp;&nbsp;ZA
                            <img
                                src="scaza-logo.png"
                                alt="Scaza Logo"
                                className="absolute top-1 left-10 h-5 w-5 "
                            />
                        </div>
                        <p className="mt-3 mb-8 max-w-md text-[14px] leading-relaxed">
                            We foster strong partnerships with global integrations for secure and
                            reliable services.
                        </p>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Play Store */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.scaza"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white flex items-center gap-3 px-2 md:px-3 py-0 
                            md:py-1 rounded-lg hover:bg-gray-900 transition"
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
                            className="bg-black text-white flex items-center gap-3 px-2
                            md:px-3 py-0 md:py-1 rounded-lg hover:bg-gray-900 transition"
                        >
                            <img src="apple.png" alt="Apple Store" className="h-5 w-5" />
                            <div className="text-left leading-tight">
                                <p className="text-xs">Download on the</p>
                                <span className="text-[12px] font-semibold">APPLE STORE</span>
                            </div>
                        </a>
                    </div>

                    {/* Address */}
                    <div className="py-5">
                        <p className="py-3 max-w-sm text-[14px] leading-relaxed">
                            Plot 3A, Block 7,<br />
                            Adeleke Road,<br />
                            Lekki Phase 1, Lagos State.{" "}
                        </p>
                        <span className="underline">support@scaza.com</span>
                    </div>

                    {/* Copyright */}
                    <div>
                        <p className="font-bold text-[12px] py-3">
                            Copyright © 2025, Moniepoint
                        </p>
                    </div>
                </div>

                {/* Right Section - Footer Links */}
                <div className="w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-0 ">
                        {footerSections.map((section, index) => (
                            <div key={index} className="flex flex-col ">
                                <h2 className="font-bold mb-3">{section.title}</h2>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href="#"
                                                className="text-[14px]"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-5 ml-9 mt-9">
                        {footerIcons.map((icon) => (
                            <div key={icon.id} className="flex items-center justify-center">
                                <img src={icon.image} alt={`Icon ${icon.id}`} className="h-7 w-7" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
