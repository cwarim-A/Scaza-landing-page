

import { motion } from "framer-motion"
import Footer from "../../components/Footer"
import { Navbar } from "../../components/Navbar"

const policies = [
    {
        title: "Data Retention",
        desc: "We retain your information for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce agreements."
    },
    {
        title: "Cookies & Tracking Technologies",
        desc: "Our website may use cookies and similar technologies to improve functionality, analyze usage, and personalize your experience. You may disable cookies in your browser settings, but some features may not work properly."
    },
    {
        title: "Third-Party Links",
        desc: "Scaza may contain links to third-party websites or services. We are not responsible for their privacy practices or content. We encourage you to review their privacy policies."
    },
    {
        title: "Changes to this Policy",
        desc: "We may update this Privacy Policy from time to time. If we make material changes, we will notify you via the app, website, or email. Continued use of our Services constitutes acceptance of the updated policy"
    },
    {
        title: "Contact Us",
        desc: "If you have any questions about this Privacy Policy or our data practices, please contact us at: support@scaza.com"
    }
]

export const PrivacyPolicy = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <motion.section
                className="max-w-4xl mx-auto px-5 py-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-3xl text-left font-bold pt-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Privacy Policy
                </motion.h2>

                <motion.p
                    className="py-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Scaza (“we,” “our,” “us”) values your privacy. This Privacy Policy
                    explains how we collect, use, store, and protect your information when
                    you use the Scaza Scan-to-Pay mobile application and website
                    (“Services”). By accessing or using our Services, you agree to the
                    practices described below.
                </motion.p>

                {/* Example section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl text-left font-bold pt-20">
                        Information we collect
                    </h2>
                    <p className="pt-7 pb-3">
                        We may collect the following types of information:
                    </p>
                    <ul className="list-none flex flex-col gap-5 py-5">
                        <li>Personal information: Name, Phone Number, email address...</li>
                        <li>Financial Information: Bank details, linked cards...</li>
                        <li>Device Information: IP address, device type...</li>
                        <li>Location Data: For fraud prevention...</li>
                        <li>Usage Data: How you interact with our app...</li>
                    </ul>
                </motion.div>

                {/* Policies with stagger animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    viewport={{ once: true }}
                >
                    {policies.map((policy, index) => (
                        <motion.div
                            key={index}
                            className="py-5"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl text-left font-bold">{policy.title}</h2>
                            <p className="pt-7 pb-3">{policy.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
            <Footer />
        </div>
    )
}
