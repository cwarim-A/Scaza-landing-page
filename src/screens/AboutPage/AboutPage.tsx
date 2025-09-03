import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
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
        <div className='font-poppins'>
            <Navbar/>
            <section className="h-[400px] px-40 py-40">
                <h2 className="text-2xl text-[#4CBB17] font-bold">About Scaza</h2>
                <p className="w-[30%] py-5 font-semibold">We specialize in QR-code-based payments and scan-to-pay solutions across Africa and beyond.</p>
                <button className="bg-[#225C07] text-white px-6 py-3 rounded-md">
                    Join Scaza
                </button>
            </section>
            <section className="">
                <div className="w-[100%] mx-auto text-center ">
                        <h2 className="text-2xl text-[#4CBB17] font-bold">Our Mission</h2>
                    <p className=" w-[100%] mx-auto text-base py-5">Scaza’s mission is to deliver fast, secure, fraud-free, and convenient <br /> financial transactions using QR-code technology, empowering merchants <br /> and customers with real-time visibility and operational efficiency</p>
                    </div>
            </section>
            <section>
                <div className="w-[100%] px-40 flex flex-wrap gap-8 py-5">
                    {
                        images.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={image.src} alt={image.alt} className="w-[300px] h-[340px] object-cover rounded-2xl" />
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="h-auto px-40 py-10">
                <h2 className="text-2xl text-[#4CBB17] font-bold">Our Vision</h2>
                <p className="w-[40%] py-5 font-semibold">Scaza envisions a world where cashless transactions powered by QR codes are the norm—streamlined, trusted, and globally integrated.</p>
                <div className="grid grid-cols-3 gap-5 py-5">
                    {
                        visionImages.map((image, index) => (
                            <div key={index} className="flex flex-col items-start gap-2 py-3 border px-5 rounded-2xl shadow-md">
                                <img src={image.src} alt={image.title} className="w-[30px] h-[30px] object-cover rounded-2xl" />
                                <h3 className="text-lg font-semibold">{image.title}</h3>
                                <p className="text-[12px] ">{image.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Footer/>
        </div>
    )
}

