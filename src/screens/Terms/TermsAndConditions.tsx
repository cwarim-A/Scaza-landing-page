// import React from 'react'
// import { Navbar } from '../../components/Navbar'
// import Footer from '../../components/Footer'

// export const TermsAndConditions = () => {
//     return (
//         <div className='font-poppins'>
//             <Navbar />
//             <section className=' w-full max-w-2xl px-5 md:px-0 mx-auto py-10"'>
//                 <div>
//                     <h2 className="text-3xl text-left font-bold pt-20 pb-7">Term & Condition</h2>
//                     <p className='py-5'>
//                         Welcome to Scaza Scan-to-Pay (“Scaza,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your access to and use of the Scaza mobile application, website, and related services (collectively, the “Services”). By using our Services, you agree to be bound by these Terms. If you do not agree, you must not use Scaza
//                     </p>
//                 </div>
//                 <div>
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Eligibility</h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>You must be at least 18 years old to use Scaza</li>
//                         <li>You agree to provide accurate and complete information during registration.</li>
//                         <li>You are responsible for keeping your login credentials secure.</li>
//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">User Responsibilities</h2>
//                     <p className='mb-4'>By using Scaza, you agree to:</p>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>Use the Services only for lawful purposes.
//                             Not engage in fraudulent, illegal, or unauthorized transactions.</li>
//                         <li>Keep your account and device secure.</li>
//                         <li>Notify us immediately if you suspect unauthorized access to your account.</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Fees & Charges</h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>Scaza may charge transaction fees, service charges, or penalties (where applicable).</li>
//                         <li>Fees will be clearly displayed before completing a transaction.</li>
//                         <li>
//                             We reserve the right to update fees, and any changes will be communicated in advance.
//                         </li>
//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Transaction Limits</h2>
//                     <p className='mb-4'>To comply with regulations and enhance security, Scaza may impose limits on:</p>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>The maximum amount per transaction.</li>
//                         <li>Daily or monthly spending limits.</li>
//                         <li>Notify us immediately if you suspect unauthorized access to your account.</li>
//                         <li>Number of transactions allowed within a specific period.</li>
//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Security & Fraud Prevention</h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>All transactions are protected with bank-grade encryption and real-time monitoring.</li>
//                         <li>You authorize Scaza to use fraud prevention tools and may be required to complete additional verification steps.</li>
//                         <li>Scaza is not liable for losses resulting from your negligence (e.g., sharing passwords, using compromised devices).</li>

//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Disclaimers & Limitation of Liability</h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>Scaza provides Services on an “as is” and “as available” basis.</li>
//                         <li>We do not guarantee uninterrupted access or error-free operation.</li>
//                         <li>To the maximum extent permitted by law, Scaza is not liable for:</li>
//                         <li>Losses caused by unauthorized access due to your negligence.</li>
//                         <li>Failures beyond our control (e.g., network outages, third-party errors).</li>
//                         <li>Indirect, incidental, or consequential damages.</li>

//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7"> Termination</h2>
//                     <p className='mb-3'>We may suspend or terminate your account if you:</p>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>Engage in fraudulent or harmful activity.</li>
//                         <li>
//                             Provide false or misleading information.</li>
//                         <li className='pt-5'>You may close your account at any time by contacting support.</li>
                       

//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7"> Intellectual Property</h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>All content, logos, and trademarks on Scaza are owned by us or licensed to us.</li>
//                         <li>
//                             You may not copy, modify, or distribute our intellectual property without permission.</li>
//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7"> Changes to Terms </h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>We may update these Terms at any time. If material changes are made, we will notify you via the app, website, or email. Continued use of the Services after changes take effect means you accept the updated Terms.</li>
//                     </ul>
//                 </div>
//                 <div >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Governing Law </h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>These Terms are governed by the laws of [Insert Country — e.g., Federal Republic of Nigeria]. Any disputes shall be subject to the jurisdiction of the courts in [Insert Location].</li>
//                     </ul>
//                 </div>
//                 <div className='mb-20' >
//                     <h2 className="text-2xl text-left font-bold pt-20 pb-7">Contact Us </h2>
//                     <ul className='list-none flex flex-col gap-5'>
//                         <li>For questions or complaints regarding these Terms or our Services, please contact:</li>
//                         <li>support@scaza.com</li>
//                         <li>[Insert Business Address]</li>
//                     </ul>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     )
// }


import React from "react"
import { motion } from "framer-motion"
import { Navbar } from "../../components/Navbar"
import Footer from "../../components/Footer"

export const TermsAndConditions = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <motion.section
                className="w-full max-w-2xl px-5 md:px-0 mx-auto py-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl text-left font-bold pt-20 pb-7">
                        Term & Condition
                    </h2>
                    <p className="py-5">
                        Welcome to Scaza Scan-to-Pay (“Scaza,” “we,” “our,” or “us”). These
                        Terms & Conditions (“Terms”) govern your access to and use of the
                        Scaza mobile application, website, and related services
                        (collectively, the “Services”). By using our Services, you agree to
                        be bound by these Terms. If you do not agree, you must not use Scaza
                    </p>
                </motion.div>

                {/* Sections */}
                {[
                    {
                        title: "Eligibility",
                        items: [
                            "You must be at least 18 years old to use Scaza",
                            "You agree to provide accurate and complete information during registration.",
                            "You are responsible for keeping your login credentials secure."
                        ]
                    },
                    {
                        title: "User Responsibilities",
                        pre: "By using Scaza, you agree to:",
                        items: [
                            "Use the Services only for lawful purposes. Not engage in fraudulent, illegal, or unauthorized transactions.",
                            "Keep your account and device secure.",
                            "Notify us immediately if you suspect unauthorized access to your account."
                        ]
                    },
                    {
                        title: "Fees & Charges",
                        items: [
                            "Scaza may charge transaction fees, service charges, or penalties (where applicable).",
                            "Fees will be clearly displayed before completing a transaction.",
                            "We reserve the right to update fees, and any changes will be communicated in advance."
                        ]
                    },
                    {
                        title: "Transaction Limits",
                        pre: "To comply with regulations and enhance security, Scaza may impose limits on:",
                        items: [
                            "The maximum amount per transaction.",
                            "Daily or monthly spending limits.",
                            "Notify us immediately if you suspect unauthorized access to your account.",
                            "Number of transactions allowed within a specific period."
                        ]
                    },
                    {
                        title: "Security & Fraud Prevention",
                        items: [
                            "All transactions are protected with bank-grade encryption and real-time monitoring.",
                            "You authorize Scaza to use fraud prevention tools and may be required to complete additional verification steps.",
                            "Scaza is not liable for losses resulting from your negligence (e.g., sharing passwords, using compromised devices)."
                        ]
                    },
                    {
                        title: "Disclaimers & Limitation of Liability",
                        items: [
                            "Scaza provides Services on an “as is” and “as available” basis.",
                            "We do not guarantee uninterrupted access or error-free operation.",
                            "To the maximum extent permitted by law, Scaza is not liable for:",
                            "Losses caused by unauthorized access due to your negligence.",
                            "Failures beyond our control (e.g., network outages, third-party errors).",
                            "Indirect, incidental, or consequential damages."
                        ]
                    },
                    {
                        title: "Termination",
                        pre: "We may suspend or terminate your account if you:",
                        items: [
                            "Engage in fraudulent or harmful activity.",
                            "Provide false or misleading information.",
                            "You may close your account at any time by contacting support."
                        ]
                    },
                    {
                        title: "Intellectual Property",
                        items: [
                            "All content, logos, and trademarks on Scaza are owned by us or licensed to us.",
                            "You may not copy, modify, or distribute our intellectual property without permission."
                        ]
                    },
                    {
                        title: "Changes to Terms",
                        items: [
                            "We may update these Terms at any time. If material changes are made, we will notify you via the app, website, or email. Continued use of the Services after changes take effect means you accept the updated Terms."
                        ]
                    },
                    {
                        title: "Governing Law",
                        items: [
                            "These Terms are governed by the laws of [Insert Country — e.g., Federal Republic of Nigeria]. Any disputes shall be subject to the jurisdiction of the courts in [Insert Location]."
                        ]
                    },
                    {
                        title: "Contact Us",
                        items: [
                            "For questions or complaints regarding these Terms or our Services, please contact:",
                            "support@scaza.com",
                            "[Insert Business Address]"
                        ]
                    }
                ].map((section, i) => (
                    <motion.div
                        key={i}
                        className="pt-20 pb-7"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl text-left font-bold">{section.title}</h2>
                        {section.pre && <p className="mb-4">{section.pre}</p>}
                        <motion.ul
                            className="list-none flex flex-col gap-5"
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                            viewport={{ once: true }}
                        >
                            {section.items.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, x: -15 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.section>
            <Footer />
        </div>
    )
}

