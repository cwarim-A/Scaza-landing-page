import { Button } from "../../components/ui/button"


const navigationItems = [
    { label: "Personal", href: "#" },
    { label: "Business", href: "#" },
    { label: "Company", href: "#" },
    { label: "Help", href: "#" }
];

const images = [
    {
        src: "/security.jpg",
        alt: "Security Image",
    },
    {
        src:"/one-app.jpg",
        alt: "One App Image"
    },
    {
        src:"/Happy-user.jpg",
        alt: "Happy User Image"
    }
]

const visionImages = [
    {
        src: "/Vector-two.png",
        title:"Universal availability",
        desc:"We are available worldwide, moving money globally without delays."
    },
    {
        src: "/Vector-one.png",
        title:"Frictionless adoption",
        desc:"Targeting startups and all scales of merchants to embrace scan-to-pay with “cutting-edge scan-to-pay technology”"
    },
    {
        src: "/Vector-three.png",
        title:"Robust partnerships",
        desc:"We foster strong partnerships with global integrations for secure and reliable services"
    }
]

const footerSections = [
    {
        title: "Personal",
        links: ["Personal Account", "QR Card", "Payment"]
    },
    {
        title: "Business",
        links: ["Personal Account", "Qr Card", "Payment"]
    },
    {
        title: "Company",
        links: ["Blog", "Join our Team", "About us", "Press"]
    },
    {
        title: "Help",
        links: ["Get Help", "FAQs", "Contact us", "Security"]
    },
    {
        title: "Resources",
        links: ["Terms & Condition", "Privacy Policy"]
    }
];


export const AboutPage = (): JSX.Element => {
    return (
        <div className='bg-white grid justify-items-center w-screen'>
            <div className='bg-white overflow-x-hidden w-[1440px] h-[2500px] relative'>
                {/* Header */}
                <header className="w-[1442px] h-[65px] top-0 left-0 absolute">
                    <div className="relative w-[1440px] h-[65px] bg-white shadow-[0px_4px_4px_#00000040]">
                        <div className="flex flex-col w-[158px] h-[38px] items-center justify-center gap-2.5 absolute top-[18px] left-[69px]">
                            <div className="relative w-40 h-[54px] mt-[-8.00px] mb-[-8.00px] mr-[-2.00px]">
                                <div className="relative w-[158px] h-[54px]">
                                    <div className="absolute w-[200px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[1.20px] leading-[normal]">
                                        SC
                                        <img
                                            className="absolute w-[22px] h-[22px] top-[7px] left-[68px]"
                                            alt="Scaza LOGO"
                                            src="/scaza-logo-1.png"
                                        />
                                        ZA
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="flex items-center gap-8 absolute top-4 left-[341px]">
                            {navigationItems.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    className="h-auto p-2.5 [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.75px]"
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </nav>
                        <div className="absolute top-[21px] left-[1048px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] text-center tracking-[0.75px] leading-[normal]">
                            Login
                        </div>
                        <Button className="absolute w-[124px] h-10 top-3 left-[1125px] bg-[#225b06] rounded-[10px] [font-family:'Poppins',Helvetica] font-bold text-white text-base text-center tracking-[0.80px]">
                            Join Scaza
                        </Button>
                    </div>
                </header>
                <section className="absolute w-[1083px] h-[355px] top-[250px] left-[172px]">
                    <div className="flex flex-col justify-center items-start w-[100px] ">
                        <h2 className="absolute top-0  [font-family:'Poppins',Helvetica] font-bold  text-[25px] text-center tracking-[2.00px] leading-[normal] text-[#4cbb17]">
                            About Scaza
                        </h2>
                        <p className="absolute top-[70px] [font-family:'Poppins',Helvetica] font-normal text-black text-md tracking-[1.00px] leading-[normal]">
                            We specialize in QR-code-based <br /> payments and scan-to-pay solutions <br />across Africa and beyond.
                        </p>
                        <Button className="absolute w-[124px] h-10 top-[170px]  bg-[#225b06] rounded-[10px] [font-family:'Poppins',Helvetica] font-bold text-white text-base text-center tracking-[0.80px]">
                            Join Scaza
                        </Button>
                    </div>
                    <div className="relative" >
                        <h2 className="absolute top-[250px] left-[450px]  [font-family:'Poppins',Helvetica] font-bold text-[#4cbb17] text-[30px] text-center tracking-[2.00px] leading-[normal]">
                            Our Mission
                        </h2>
                        <p className="absolute top-[320px] left-[228px] [font-family:'Poppins',Helvetica] font-normal text-black text-sm  tracking-[1.00px] leading-[normal]">
                            Scaza’s mission is to deliver fast, secure, fraud-free, and convenient <br />financial transactions using QR-code technology, empowering merchants <br /> and customers with real-time visibility and operational efficiency
                        </p>
                    </div>
                    <div className="absolute top-[420px] left-[50px] grid grid-cols-3 gap-10 justify-center">
                            {
                                images.map((image, index) => (
                                    <div key={index} className=" border border-gray-200 rounded-xl  shadow-lg ">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            width={280}
                                            height={600}
                                            className="object-cover rounded-xl  "
                                        />
                                    </div>
                                ))
                            }
                    </div>
                    <div className=" flex flex-col justify-center items-start w-full ">
                        <h2 className="absolute top-[780px] left-[20px] [font-family:'Poppins',Helvetica] font-bold  text-[25px] text-center tracking-[2.00px] leading-[normal] text-[#4cbb17]">
                            Our Vision
                        </h2>
                        <p className="absolute top-[830px] left-[20px] [font-family:'Poppins',Helvetica] font-normal text-black text-md tracking-[1.00px] leading-[normal]">
                            Scaza envisions a world where cashless <br /> transactions powered by QR codes are the <br /> norm—streamlined, trusted, and globally integrated.
                        </p>
                        <div className="absolute top-[940px] left-[20px]  grid grid-cols-3 gap-2 [font-family:'Poppins',Helvetica]">
                                {
                                    visionImages.map((image, index) => (
                                        <div key={index} className="p-4 border border-gray-200 rounded-xl  shadow-lg ">
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                width={20}
                                                height={20}
                                                className="object-cover rounded-xl  "
                                            />
                                            <h2 className="font-bold py-2">{image.title}</h2>
                                            <p className="text-[14px]">{image.desc}</p>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </section>
                <section className="absolute w-[1442px] bg-[#225C07] h-auto top-[1450px] py-10 px-[120px]">
                        <div className="flex  items-center gap-5">
                           <div className="bg-white rounded-xl w-[500px] h-[400px] left-[50px]" />
                           <div>
                            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[25px] text-left tracking-[2.00px] leading-[normal] text-white">Who We Are</h1>
                            <p className=" text-white w-[500px] [font-family:'Poppins',Helvetica] mt-[25px]">
                                Scaza positions itself as a purpose-driven fintech innovator aimed at displacing cash with seamless, QR-powered transactions. Our mission is centred on speed, security, convenience, and empowering users with real-time insight. Our vision looks beyond individual markets—striving for cashless ubiquity, global reach, and reliable financial infrastructure, all supported by strategic partnerships.
                            </p>
                           </div>
                        </div>
                </section>
                <footer className="absolute w-[1446px] h-[1103px] top-[1500px] -left-0.5">
                    
                    
                    
                    <div className="absolute w-[1440px] h-[616px] top-[487px] left-0.5 bg-[#eaffe04c] border-[0.4px] border-solid border-[#00000066] shadow-[0px_4px_4px_#00000040]" />
                    <div className="inline-flex items-center gap-[70px] absolute top-[540px] left-[576px]">
                        {footerSections.map((section, index) => (
                            <div key={index} className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[0.20px] leading-5 whitespace-nowrap">
                                {section.title}
                            </div>
                        ))}
                    </div>
                    {/* Footer Links */}
                    <div className="absolute top-[585px] left-[576px] tracking-[0.15px] leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] font-medium text-black text-[15px]">
                        Personal Account
                    </div>
                    <div className="absolute top-[612px] left-[576px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5 whitespace-nowrap">
                        QR Card
                    </div>
                    <div className="absolute top-[639px] left-[576px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5 whitespace-nowrap">
                        Payment
                    </div>
                    <div className="absolute w-[138px] top-[579px] left-[738px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Personal Account
                    </div>
                    <div className="absolute w-[138px] top-[609px] left-[738px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Qr Card
                    </div>
                    <div className="absolute w-[138px] top-[639px] left-[738px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Payment
                    </div>
                    <div className="absolute w-[123px] top-[579px] left-[904px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Blog
                    </div>
                    <div className="absolute w-[123px] top-[609px] left-[904px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Join our&nbsp;&nbsp;Team
                    </div>
                    <div className="absolute w-[123px] top-[639px] left-[904px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        About us
                    </div>
                    <div className="absolute w-[123px] top-[669px] left-[904px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Press
                    </div>
                    <div className="absolute w-[101px] top-[579px] left-[1079px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Get Help
                    </div>
                    <div className="absolute w-[100px] top-[609px] left-[1076px] [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] tracking-[0.15px] leading-5">
                        FAQs
                    </div>
                    <div className="absolute w-[101px] top-[639px] left-[1079px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Contact us
                    </div>
                    <div className="absolute w-[100px] top-[669px] left-[1076px] [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] tracking-[0.15px] leading-5">
                        Security
                    </div>
                    <div className="absolute w-[143px] top-[579px] left-[1194px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Terms &amp; Condition
                    </div>
                    <div className="absolute w-[143px] top-[609px] left-[1194px] [font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0.15px] leading-5">
                        Privacy Policy
                    </div>
                    <div className="absolute top-[585px] left-[157px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0.80px] leading-[normal]">
                        We foster strong partnerships with <br />
                        global integrations for secure and
                        <br /> reliable services.
                    </div>
                    <div className="flex flex-col w-[158px] h-[38px] items-center justify-center gap-2.5 absolute top-[540px] left-[140px]">
                        <div className="relative w-40 h-[54px] mt-[-8.00px] mb-[-8.00px] mr-[-2.00px]">
                            <div className="relative w-[158px] h-[54px]">
                                <div className="absolute w-[158px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] text-center tracking-[1.60px] leading-[normal]">
                                    SC&nbsp;&nbsp;&nbsp;&nbsp;ZA
                                </div>
                                <img
                                    className="absolute w-[27px] h-[27px] top-3 left-[66px]"
                                    alt="Scaza LOGO"
                                    src="/scaza-logo.png"
                                />
                            </div>
                        </div>
                    </div>
                    {/* App Download Buttons in Footer */}
                    <div className="absolute w-[172px] h-[45px] top-[693px] left-[155px]">
                        <div className="relative w-[170px] h-[45px] bg-black rounded-[10px]">
                            <div className="absolute w-[104px] top-[9px] left-[49px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[10px] leading-[10px]">
                                <span className="text-white tracking-[0] leading-[15px]">
                                    Download on the
                                    <br />
                                </span>
                                <span className="font-bold text-white text-[13px] tracking-[0.02px] leading-[15px]">
                                    Apple Store
                                </span>
                            </div>
                            <img
                                className="absolute w-[26px] h-[26px] top-2.5 left-[11px] object-cover"
                                alt="Playstore removebg"
                                src="/playstore-removebg-preview-1-2.png"
                            />
                        </div>
                    </div>
                    <div className="absolute w-[172px] h-[45px] top-[693px] left-[345px]">
                        <div className="relative w-[170px] h-[45px] bg-black rounded-[10px]">
                            <div className="absolute w-[85px] top-2 left-[62px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[10px] leading-[10px]">
                                <span className="font-medium text-white tracking-[0] leading-[15px]">
                                    Get it on <br />
                                </span>
                                <span className="font-bold text-white text-[13px] tracking-[0.02px] leading-[15px]">
                                    Play Store
                                </span>
                            </div>
                            <img
                                className="absolute w-[26px] h-[26px] top-2.5 left-[17px] object-cover"
                                alt="Whitenapple removebg"
                                src="/whitenapple-removebg-preview-1-2.png"
                            />
                        </div>
                    </div>
                    {/* <div className="absolute w-[172px] h-[45px] top-[249px] left-[155px]">
                        <div className="relative w-[170px] h-[45px] bg-black rounded-[10px]">
                            <div className="absolute w-[104px] top-[9px] left-[49px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[10px] leading-[10px]">
                                <span className="text-white tracking-[0] leading-[15px]">
                                    Download on the
                                    <br />
                                </span>
                                <span className="font-bold text-white text-[13px] tracking-[0.02px] leading-[15px]">
                                    Apple Store
                                </span>
                            </div>
                            <img
                                className="absolute w-[26px] h-[26px] top-2.5 left-[11px] object-cover"
                                alt="Playstore removebg"
                                src="/playstore-removebg-preview-1-2.png"
                            />
                        </div>
                    </div> */}
                    {/* <div className="absolute w-[172px] h-[45px] top-[249px] left-[345px]">
                        <div className="relative w-[170px] h-[45px] bg-black rounded-[10px]">
                            <div className="absolute w-[85px] top-2 left-[62px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[10px] leading-[10px]">
                                <span className="font-medium text-white tracking-[0] leading-[15px]">
                                    Get it on <br />
                                </span>
                                <span className="font-bold text-white text-[13px] tracking-[0.02px] leading-[15px]">
                                    Play Store
                                </span>
                            </div>
                            <img
                                className="absolute w-[26px] h-[26px] top-2.5 left-[17px] object-cover"
                                alt="Whitenapple removebg"
                                src="/whitenapple-removebg-preview-1-2.png"
                            />
                        </div>
                    </div> */}
                    <div className="absolute top-[788px] left-[157px] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0.14px] leading-[14px]">
                        <span className="font-medium tracking-[0.02px] leading-[30px]">
                            Plot 3A, Block 7, Adeleke Road, Lekki Phase 1, Lagos State.
                            <br />
                        </span>
                        <a
                            href="mailto:info@moniepoint.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="font-medium tracking-[0.02px] leading-[30px] underline">
                                support@Scaza.com
                            </span>
                        </a>
                    </div>
                    <div className="absolute top-[938px] left-[157px] [font-family:'Poppins',Helvetica] font-bold text-black text-sm tracking-[0.14px] leading-[30px] whitespace-nowrap">
                        Copyright © 2025, Moniepoint
                    </div>
                    <img
                        className="absolute w-[280px] h-[35px] top-[760px] left-[605px]"
                        alt="Frame"
                        src="/frame-11.svg"
                    />
                </footer>
            </div>
        </div>
    )
}

