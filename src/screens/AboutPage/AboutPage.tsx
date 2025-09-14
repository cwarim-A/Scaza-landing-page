

import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

// Variants for animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const AboutPage = (): JSX.Element => {
  return (
    <div className="font-poppins">
      <Navbar />

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="h-[300px] md:h-[400px] px-5 py-10 md:px-40 md:py-40"
      >
        <h2 className="text-2xl text-[#4CBB17] font-bold">About Scaza</h2>
        <p className="w-full md:w-[30%] py-5 font-semibold">
          We specialize in QR-code-based payments and scan-to-pay solutions
          across Africa and beyond.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#225C07] text-white px-6 py-3 rounded-md"
        >
          Join Scaza
        </motion.button>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-[100%] mx-auto text-center">
          <h2 className="text-2xl text-[#4CBB17] font-bold ">Our Mission</h2>
          <p className="w-[100%] mx-auto text-base py-5 px-5 md:px-0">
            Scaza’s mission is to deliver fast, secure, fraud-free, and
            convenient <br className="hidden md:block" /> financial transactions
            using QR-code technology, empowering merchants{" "}
            <br className="hidden md:block" /> and customers with real-time
            visibility and operational efficiency
          </p>
        </div>
      </motion.section>

      {/* Images Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-[100%] items-center justify-center md:px-40 flex flex-wrap gap-8 py-5">
          {["/security.jpg", "/one-app.jpg", "/Happy-user.jpg"].map(
            (src, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <img
                  src={src}
                  alt="Scaza illustration"
                  className="w-[300px] h-[340px] object-cover rounded-2xl"
                />
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="h-auto px-5 md:px-40 py-10"
      >
        <h2 className="text-2xl text-[#4CBB17] font-bold text-center md:text-left">
          Our Vision
        </h2>
        <p className="w-full md:w-[40%] py-5 font-semibold">
          Scaza envisions a world where cashless transactions powered by QR
          codes are the norm—streamlined, trusted, and globally integrated.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-10 md:gap-1 px-5 md:px-0 py-5"
        >
          {[
            {
              src: "/Vector-two.png",
              title: "Universal availability",
              desc: "We are available worldwide, moving money globally without delays."
            },
            {
              src: "/Vector-one.png",
              title: "Frictionless adoption",
              desc: "Targeting startups and all scales of merchants to embrace scan-to-pay with “cutting-edge scan-to-pay technology”."
            },
            {
              src: "/Vector-three.png",
              title: "Robust partnerships",
              desc: "We foster strong partnerships with global integrations for secure and reliable services"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-start gap-2 py-3 border px-5 rounded-2xl shadow-md w-[300px]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-[30px] h-[30px] object-cover rounded-2xl"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-[12px]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="h-[600px] md:h-[500px] bg-[#225C07] text-white px-5 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10 md:gap-5"
      >
        <motion.img
          src="/who-we-are.jpg"
          alt="Who-we-are"
          whileHover={{ scale: 1.02 }}
          className="w-[300px] h-[250px] md:w-2/5 md:h-[400px] rounded-2xl bg-cover bg-center"
        />

        <div className="flex flex-col gap-3 md:gap-5 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-white text-center md:text-left">
            Who We Are
          </h2>
          <p className="text-[14px] px-2 md:px-0 md:text-base">
            Scaza positions itself as a purpose-driven fintech innovator aimed
            at displacing cash with seamless, QR-powered transactions. Our
            mission is centred on speed, security, convenience, and empowering
            users with real-time insight. Our vision looks beyond individual
            markets—striving for cashless ubiquity, global reach, and reliable
            financial infrastructure, all supported by strategic partnerships.
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

