
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

const navigationItems = [
  { label: "Personal", href: "/blog" },
  { label: "Business", href: "/blog" },
  { label: "Company", href: "/team" },
  { label: "Help", href: "/faq" }
];

const featureCards = [
  {
    icon: "/send-icon.png",
    title: "Make fast, secure payment at shops easily, Scan to pay instantly"
  },
  {
    icon: "/money-icon.png",
    title: "Pay essential bills in seconds directly from your Scaza wallet."
  },
  {
    icon: "/save-icon.png",
    title: "Save money automatically any time you spend."
  },
  {
    icon: "/security-icon.png",
    title: "Enjoy cashless payment while staying secure."
  },
  {
    icon: "/rewards-icon.png",
    title: "Earn rewards for everyday payment when you pay with Scaza"
  },
  {
    icon: "/eye-icon.png",
    title: "Keep tabs on all your scanned transactions and balances in one convenient app."
  }
];



const testimonials = [
  {
    text: "Scaza's QR code payment system has been a game-changer for my business. It's fast, secure and easy too use.",
    author: "Emediong Ekanem Jeremiah",
    avatar: "/ellipse-20-9.png"
  },
  {
    text: "I love how i can send money and pay for stuff without even touching cash.",
    author: "Victor Ubong Essien",
    avatar: "/ellipse-20-9.png"
  },
  {
    text: "With Sccaza, I've stopped carrying my wallet. My phone is all i need.",
    author: "Daniel Babatunde Fashola",
    avatar: "/ellipse-20-9.png"
  },
  {
    text: "I can easily just scan and pay in seconds. No delay, no stress. scaza made my day easier",
    author: "Ayomide David Oyedepo",
    avatar: "/ellipse-20-9.png"
  },
  {
    text: "I love how i can send money and pay for stuff without even touching cash",
    author: "Abasienyene Itim Friday",
    avatar: "/ellipse-20-9.png"
  }
];

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

export const LandingPage = (): JSX.Element => {
  return (
    <div className="font-poppins">
      <Navbar />
      <section className=" flex  flex-col md:flex-row justify-center items-center gap-10 md:gap-40 py-10 md:py-20 px-5 md:px-0 ">
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-[#4CBB17] leading-loose">
            Always better than cash, <br className="hidden md:block" /> Scan.
            Pay. Go
          </h2>
          <p className="py-5">
            Redefining payments in Africa and <br /> beyond. One scan at a time.
          </p>
          <div className="flex items-center gap-3">
            {/* Play Store */}
            <a
              href="https://scaza.com.ng/pilot/scaza.apk"
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
              href="https://scaza.com.ng/pilot/merchant.apk"
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
        </div>
        <div>
          <img
            src="/scaza-mockup.png"
            alt=""
            className="hidden md:block w-[300px] h-[300px] mr-20"
          />
        </div>
      </section>
      <section className="  md:py-10 flex flex-col justify-center items-center  gap-7">
        <h1 className=" text-3xl font-bold">
          {" "}
          The <span className="text-[#4CBB17] text-4xl font-bold">
            Scaza
          </span>{" "}
          Difference
        </h1>
        <p className="text-base text-center md:text-left">
          Scaza is your trusted payment solution, offering secure and <br />{" "}
          instant transactions through advanced QR code technology.
        </p>
      </section>
      <section className="px-5  md:px-[180px] py-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 ">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="  h-[100px] flex flex-col justify-center md:justify-start gap-2  shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] py-3 px-5  rounded-xl"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="h-8 w-8 text-center"
              />
              <p className="text-[12px]">{card.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        {/* First Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 md:px-40 py-5 ">
          {/* Text */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl md:text-4xl text-[#225C07] font-bold">
              One Scan + <br className="hidden md:block" /> one tap ={" "}
              <br className="hidden md:block" /> instant payment
            </h2>
            <p className="text-sm md:text-base md:w-[80%] text-gray-700">
              We built SCAZA to make payment effortless. With our scan-to-pay
              app and secure wallet, you can pay, send and save in seconds — no
              cash, no stress.
            </p>
            <button className="bg-[#225C07] w-full md:w-[40%] text-white py-2 rounded-lg">
              Open an account
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/first-image.jpg"
              alt="Scaza Scan Example"
              className="rounded-full max-w-sm w-full"
            />
          </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-40 py-5 ">
          {/* Image */}
          <div className="md:w-1/2 ">
            <img
              src="/one-app.jpg"
              alt="Scaza App Example"
              className="rounded-full max-w-sm w-full"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl md:text-4xl text-[#225C07] font-bold">
              One app that makes every payment easy
            </h2>
            <p className="text-sm md:text-base md:w-[70%] text-gray-700">
              Make payments faster than ever — just scan the QR code and you’re
              done. No cash, no cards, no hassle.
            </p>
          </div>
        </div>
        {/* Third Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 md:px-40 py-5 ">
          {/* Text */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl md:text-4xl text-[#225C07] font-bold">
              Effortless Payment with unmatched security.
            </h2>
            <p className="text-sm md:text-base md:w-[80%] text-gray-700">
              Our advanced QR technology ensures every payment is safe,
              seamless, and instantly processed.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/third-image.jpg"
              alt="Scaza Scan Example"
              className="rounded-full max-w-sm w-full"
            />
          </div>
        </div>
        {/* Fourth Block */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-40 py-5 ">
          {/* Image */}
          <div className="md:w-1/2 ">
            <img
              src="/fourth-image.jpg"
              alt="Scaza App Example"
              className="rounded-full max-w-sm w-full"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl md:text-4xl text-[#225C07] font-bold">
              Rewards that comes with every scan.
            </h2>
            <p className="text-sm md:text-base md:w-[70%] text-gray-700">
              With Scaza, unlock exclusive discounts and cashback rewards with
              transaction you make.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-2xl text-[#225C07] text-center font-bold">
          What our users says
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-5 gap-5 py-[50px] px-2 md:px-0 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" flex flex-col w-full md:w-[263px]  justify-between border border-gray-400 h-[150px] px-3 text-[12px] py-2 rounded-xl"
            >
              <p className=" py-3">{testimonial.text}</p>
              <div className="flex items-center gap-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="rounded-full h-5 w-5"
                />
                <p className="text-[12px] font-bold "> {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#FCFFFA] h-[250px] py-10 border border-1">
        <h2 className="text-center text-[#225C07] text-2xl font-bold">
          Our Partners
        </h2>
        <img
          src="/Partners.png"
          alt="Our Partners"
          className="mx-auto h-full object-contain"
        />
      </section>
      <section className="flex flex-col h-[800px] md:h-[500px] md:flex-row justify-between px-5  md:px-40 gap-20 py-20 ">
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-[#4CBB17]">
            Get the Scaza Qr Code card for seamless payments.
          </h2>
          <p className="text-[14px]">
            Experience fast, secure, and effortless payments with Scaza's Qr
            card. Easily manage transactions, make instant payments using QR
            codes, and keep track of your financial activities—all from the palm
            of your hand.
          </p>
          {/* App Store Buttons */}
          <div className="flex items-center gap-3">
            {/* Play Store */}
            <a
              href="https://scaza.com.ng/pilot/scaza.apk"
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
              href="https://scaza.com.ng/pilot/merchant.apk"
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
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/Qr-scan.jpg"
            alt="QR Code"
            className="h-[300px] w-[350px] rounded-lg"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};