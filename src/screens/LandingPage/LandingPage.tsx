import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
  { label: "Personal", href: "#" },
  { label: "Business", href: "#" },
  { label: "Company", href: "#" },
  { label: "Help", href: "#" }
];

const featureCards = [
  {
    icon: "/frame-79.svg",
    title: "Make fast, secure payment at shops easily, Scan to pay instantly"
  },
  {
    icon: "/frame-75.svg", 
    title: "Pay essential bills in seconds directly from your Scaza wallet."
  },
  {
    icon: "/frame-80.svg",
    title: "Save money automatically any time you spend."
  }
];

const secondRowFeatureCards = [
  {
    icon: "/frame-76.svg",
    title: "Enjoy cashless payment while staying secure."
  },
  {
    icon: "/frame-77.svg",
    title: "Earn rewards for everyday payment when you pay with Scaza"
  },
  {
    icon: "/frame-78.svg",
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
    <div className="bg-white grid justify-items-center w-screen">
      <div className="bg-white overflow-x-hidden w-[1440px] h-[4989px] relative">
        {/* Header */}
        <header className="w-[1442px] h-[65px] top-0 left-0 absolute">
          <div className="relative w-[1440px] h-[65px] bg-white shadow-[0px_4px_4px_#00000040]">
            <div className="flex flex-col w-[158px] h-[38px] items-center justify-center gap-2.5 absolute top-[18px] left-[69px]">
              <div className="relative w-40 h-[54px] mt-[-8.00px] mb-[-8.00px] mr-[-2.00px]">
                <div className="relative w-[158px] h-[54px]">
                  <div className="absolute w-[158px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[1.20px] leading-[normal]">
                    <img
                      className="absolute w-[22px] h-[22px] top-[7px] left-[68px]"
                      alt="Scaza LOGO"
                      src="/scaza-logo-1.png"
                    />
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
        {/* Hero Section */}
        <section className="absolute w-[1083px] h-[355px] top-[183px] left-[152px]">
          <div className="absolute w-[394px] h-[355px] top-0 left-[689px]">
            <img
              className="absolute w-[249px] h-[249px] top-11 left-0 object-cover"
              alt="Img"
              src="/26591c5149efff6455ff28c6f77c6909-1-1.png"
            />
            <img
              className="absolute w-[295px] h-[355px] top-0 left-[99px] object-cover"
              alt="Scaza"
              src="/scaza-mockup2-1.png"
            />
          </div>
          <h1 className="absolute w-[528px] -top-px left-0 [font-family:'Poppins',Helvetica] font-extrabold text-[#4cbb17] text-4xl tracking-[0] leading-[normal]">
            Always better than cash,
            <br />
            Scan. Pay. Go
          </h1>
          <p className="absolute w-[435px] top-[132px] left-px [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            Redefining payments in Africa and <br />
            beyond. One scan at a time.
          </p>
          <div className="flex gap-4 absolute top-[223px] left-0">
            <div className="relative w-[170px] h-[45px] bg-black rounded-[10px]">
              <div className="absolute w-[104px] top-[3px] left-[49px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[10px] leading-[10px]">
                <span className="text-white tracking-[0] leading-5">
                  Download on the
                  <br />
                </span>
                <span className="font-bold text-white text-base tracking-[0.03px] leading-5">
                  Apple Store
                </span>
              </div>
              <img
                className="absolute w-[26px] h-[26px] top-2.5 left-[11px] object-cover"
                alt="Playstore removebg"
                src="/playstore-removebg-preview-1-2.png"
              />
            </div>
            <div className="relative w-[170px] h-[46px]">
              <div className="absolute w-[170px] h-[45px] top-0 left-0 bg-black rounded-[10px]" />
              <div className="absolute w-[85px] top-[3px] left-[60px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[10px] leading-[10px]">
                <span className="font-medium text-white tracking-[0] leading-5">
                  Get it on <br />
                </span>
                <span className="font-bold text-white text-base tracking-[0.03px] leading-5">
                  Play Store
                </span>
              </div>
              <img
                className="absolute w-[30px] h-[30px] top-2 left-[15px] object-cover"
                alt="Whitenapple removebg"
                src="/whitenapple-removebg-preview-1-2.png"
              />
            </div>
          </div>
        </section>
        {/* The Scaza Difference Section */}
        <section className="absolute top-[640px] left-[152px] w-[1136px]">
          <h2 className="absolute top-0 left-[320px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[40px] text-center tracking-[2.00px] leading-[normal]">
            <span className="text-black tracking-[0.80px]">The</span>
            <span className="text-black text-5xl tracking-[1.15px]">&nbsp;</span>
            <span className="text-[#4cbb17] text-5xl tracking-[1.15px]">
              Scaza{" "}
            </span>
            <span className="text-black tracking-[0.80px]">Difference</span>
          </h2>
          <p className="absolute top-[97px] left-[228px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[1.00px] leading-[normal]">
            Scaza is your trusted payment solution, offering secure and
            <br />
            &nbsp;&nbsp; instant transactions through advanced QR code technology.
          </p>
          {/* Feature Cards Row 1 */}
          <div className="flex gap-[55px] absolute top-[203px] left-0">
            {featureCards.map((card, index) => (
              <Card key={index} className="w-[332px] h-[120px] bg-white rounded-[10px] border-[0.4px] border-solid border-[#0000004c] shadow-[2px_4px_4px_#00000040]">
                <CardContent className="relative p-0 h-full">
                  <img
                    className="absolute w-6 h-6 top-[13px] left-[31px]"
                    alt="Feature icon"
                    src={card.icon}
                  />
                  <p className="absolute w-[249px] top-[58px] left-[26px] [font-family:'Poppins',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[normal]">
                    {card.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Feature Cards Row 2 */}
          <div className="flex gap-[55px] absolute top-[347px] left-0">
            <Card className="w-[332px] h-[120px] bg-white rounded-[10px] border-[0.4px] border-solid border-[#00000066] shadow-[0px_4px_4px_#00000040]">
              <CardContent className="relative p-0 h-full">
                <img
                  className="absolute w-6 h-6 top-[15px] left-7"
                  alt="Frame"
                  src="/frame-76.svg"
                />
                <p className="absolute w-[186px] top-[60px] left-7 [font-family:'Poppins',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[normal]">
                  Enjoy&nbsp;&nbsp;cashless payment while
                  <br />
                  staying secure.
                </p>
              </CardContent>
            </Card>
            <Card className="w-[332px] h-[120px] bg-white rounded-[10px] border-[0.4px] border-solid border-[#00000066] shadow-[2px_4px_4px_#00000040]">
              <CardContent className="relative p-0 h-full">
                <img
                  className="absolute w-6 h-6 top-[7px] left-[55px]"
                  alt="Frame"
                  src="/frame-77.svg"
                />
                <p className="absolute w-72 top-[52px] left-[26px] [font-family:'Poppins',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[normal]">
                  Earn rewards for everyday payment&nbsp;&nbsp;when <br />
                  you pay with Scaza
                </p>
              </CardContent>
            </Card>
            <Card className="w-[332px] h-[120px] bg-white rounded-[10px] border-[0.4px] border-solid border-[#00000066] shadow-[0px_4px_4px_#00000040]">
              <CardContent className="relative p-0 h-full">
                <img
                  className="absolute w-6 h-6 top-[13px] left-[31px]"
                  alt="Frame"
                  src="/frame-78.svg"
                />
                <p className="absolute w-[295px] top-[58px] left-[22px] [font-family:'Poppins',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[normal]">
                  Keep tabs on all your scanned transactions <br />
                  and balances in one convenient app.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Feature Sections */}
        <section className="absolute top-[1243px] left-[153px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#225b06] text-4xl tracking-[1.80px] leading-[normal]">
            One&nbsp;&nbsp;Scan +<br />
            one tap= <br />
            instant payment
          </h2>
          <p className="absolute top-[194px] left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
            We built SCAZA to make payment effortless. With
            <br />
            our scan-to- pay app and secure&nbsp;&nbsp;wallet, you&nbsp;&nbsp;can
            pay,
            <br />
            send and save in seconds, no cash, no stress.
          </p>
          <Button className="absolute top-[278px] left-[2px] w-[150px] h-[35px] bg-[#225b06] rounded-[5px] [font-family:'Poppins',Helvetica] font-bold text-white text-xs tracking-[0.60px]">
            Open an Account
          </Button>
        </section>
        <img
          className="absolute w-[400px] h-[400px] top-[1221px] left-[856px] object-cover"
          alt="Ellipse"
          src="/ellipse-8.png"
        />
        <section className="absolute top-[1726px] left-[803px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-black text-[#225b06] text-3xl tracking-[1.50px] leading-[normal]">
            One app that make every
            <br />
            payment easy.
          </h2>
          <p className="absolute top-[115px] left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[1.00px] leading-[normal]">
            Make payments faster than ever, just <br />
            scan the QR code and you&#39;re done. No <br />
            cash, no cards, no hassle.
          </p>
        </section>
        <img
          className="absolute w-[400px] h-[400px] top-[1677px] left-[145px] object-cover"
          alt="Ellipse"
          src="/ellipse-9.png"
        />
        <section className="absolute top-[2184px] left-[155px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-black text-[#225b06] text-3xl tracking-[1.50px] leading-[normal]">
            Effortless Payment with <br />
            unmatched security.
          </h2>
          <p className="absolute top-[115px] left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[1.00px] leading-[normal]">
            Our advanced QR technology ensures
            <br />
            every payment is safe, seamless, and
            <br />
            instantly processed.
          </p>
        </section>
        <img
          className="absolute w-[400px] h-[400px] top-[2096px] left-[861px] object-cover"
          alt="Ellipse"
          src="/ellipse-11.png"
        />
        <section className="absolute top-[2631px] left-[820px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-black text-[#225b06] text-3xl tracking-[1.50px] leading-[normal]">
            Rewards that comes with <br />
            every scan.
          </h2>
          <p className="absolute top-[115px] left-[-1px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[1.00px] leading-[normal]">
            With Scaza, unlock exclusive discounts <br />
            and cashback rewards with transaction <br />
            you make.
          </p>
        </section>
        <div className="absolute w-[400px] h-[400px] top-[2574px] left-[155px] bg-white rounded-[200px] shadow-[0px_4px_4px_#00000040]">
          <img
            className="absolute w-[105px] h-[105px] top-[105px] left-[189px] object-cover"
            alt="Img"
            src="/26591c5149efff6455ff28c6f77c6909-1-1.png"
          />
          <img
            className="absolute w-[274px] h-[229px] top-[98px] left-[63px]"
            alt="Vector"
            src="/vector.svg"
          />
        </div>
        <img
          className="absolute w-6 h-[17px] top-[1154px] left-[897px]"
          alt="Solar eye scan bold"
          src="/solar-eye-scan-bold-duotone.svg"
        />
        {/* Testimonials Section */}
        <section className="absolute top-[3064px] left-[545px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-black text-[#225b06] text-3xl tracking-[1.50px] leading-[normal]">
            What our users says
          </h2>
        </section>
        <div className="absolute w-[1440px] h-[150px] top-[3190px] -left-px overflow-hidden">
          <div className="inline-flex items-center justify-center gap-[30px] relative">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <Card key={index} className="relative w-[352px] h-[150px] bg-white rounded-[10px] border-[0.4px] border-solid border-[#00000080] shadow-[0px_4px_4px_#00000040]">
                <CardContent className="p-0 h-full">
                  <p className="absolute top-5 left-[21px] [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] tracking-[0.75px] leading-[normal]">
                    {testimonial.text}
                  </p>
                  <div className="inline-flex items-center gap-[5px] absolute top-[105px] left-[21px]">
                    <img
                      className="relative w-[30px] h-[30px] object-cover"
                      alt="User avatar"
                      src={testimonial.avatar}
                    />
                    <div className="relative w-fit [font-family:'Poppins',Helvetica] font-bold text-black text-[11px] tracking-[0.55px] leading-[normal]">
                      {testimonial.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Partners Section */}
        <section className="absolute w-[1440px] h-[354px] top-[3420px] left-0">
          <div className="absolute w-[1440px] h-[350px] top-0 left-0 bg-[#e1ecd9] border-b-[0.4px] [border-bottom-style:solid] border-[#00000066] shadow-[inset_0px_1px_1px_#00000040]" />
          <h2 className="absolute top-[49px] left-[613px] [font-family:'Poppins',Helvetica] font-bold text-[#225b06] text-3xl tracking-[1.50px] leading-[normal]">
            Our Partners
          </h2>
          <img
            className="absolute w-[300px] h-[300px] top-[54px] left-[553px] object-cover"
            alt="Element"
            src="/9189eaa8-f775-4785-bd17-98861722a6d4-removalai-preview-1.png"
          />
        </section>
        {/* Footer */}
        <footer className="absolute w-[1446px] h-[1103px] top-[3882px] -left-0.5">
          <img
            className="absolute w-[1446px] h-[498px] top-0 left-0"
            alt="Rectangle"
            src="/rectangle-16.svg"
          />
          <div className="absolute top-[45px] left-[159px] [font-family:'Poppins',Helvetica] font-black text-[#4cbb17] text-3xl tracking-[0] leading-[normal]">
            Get the Scaza Qr Code card for seamless
            <br />
            payments.
          </div>
          <p className="absolute top-[164px] left-[159px] [font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[0.60px] leading-[normal]">
            Experience fast, secure, and effortless payments with Scaza&#39;s Qr
            card. Easily manage
            <br />
            transactions, make instant payments using QR codes, and keep track
            of your financial <br />
            activities—all from the palm of your hand.
          </p>
          <img
            className="absolute w-[445px] h-[397px] top-[46px] left-[868px] rounded-[20px] border-[0.4px] border-solid border-[#0000004c] object-cover"
            alt="Rectangle"
            src="/rectangle-17.png"
          />
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
          <div className="absolute w-[172px] h-[45px] top-[249px] left-[155px]">
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
          <div className="absolute w-[172px] h-[45px] top-[249px] left-[345px]">
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
  );
};