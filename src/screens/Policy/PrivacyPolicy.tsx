import Footer from "../../components/Footer"
import { Navbar } from "../../components/Navbar"


const policies = [
    {
        title:"Data Retention",
        desc: "We retain your information for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce agreements."
    },
    {
        title:"Cookies & Tracking Technologies",
        desc:"Our website may use cookies and similar technologies to improve functionality, analyze usage, and personalize your experience. You may disable cookies in your browser settings, but some features may not work properly."
    },
    {
        title:"Third-Party Links",
        desc:"Scaza may contain links to third-party websites or services. We are not responsible for their privacy practices or content. We encourage you to review their privacy policies."
    },
    {
        title:"Changes to this Policy",
        desc:"We may update this Privacy Policy from time to time. If we make material changes, we will notify you via the app, website, or email. Continued use of our Services constitutes acceptance of the updated policy"
    },
    {
        title:"Contact Us",
        desc:"If you have any questions about this Privacy Policy or our data practices, please contact us at: support@scaza.com"
    }
]


export const PrivacyPolicy = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 py-16">
                <h2 className="text-3xl text-left font-bold pt-20">Privacy Policy</h2>
                <p className="py-7">
                    Scaza (“we,” “our,” “us”) values your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Scaza Scan-to-Pay mobile application and website (“Services”). By accessing or using our Services, you agree to the practices described below.
                </p>
                <div className="">
                    <h2 className="text-2xl text-left font-bold pt-20">Information we collect</h2>
                    <p className="pt-7 pb-3">
                        We may collect the following types of information:
                    </p>
                    <ul className="list-none flex flex-col gap-5 py-5">
                        <li>Personal information: Name, Phone Number, email address, date of birth, and government-issued IDs (where required for KYC)</li>
                        <li>Financial Information: Bank details, linked cards, and transaction history.</li>
                        <li>Device Information: IP address, device type, operating system, and mobile network.
                        </li>
                        <li>
                            Location Data: For fraud prevention and transaction verification.
                        </li>
                        <li>
                            Usage Data: How you interact with our app, including clicks, scans, and payment
                            activity
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-left font-bold pt-20">How we use your information</h2>
                    <p className="pt-7 pb-3">
                        We use your information to::
                    </p>
                    <ul className="list-none flex flex-col gap-5 py-5">
                        <li>
                            Facilitate Scan-to-Pay transactions securely.
                        </li>
                        <li>
                            Verify your identity and comply with regulatory requirements.
                        </li>
                        <li>Prevent fraud, unauthorized activity, and money laundering.</li>
                        <li>Provide customer support and resolve disputes.</li>
                        <li>Improve our Services and personalize your user experience.</li>
                        <li>
                            Send important updates, including transaction alerts and policy changes.
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl text-left font-bold pt-20">
                        How We Share Your Information
                    </h2>
                    <p className="pt-7 pb-3">
                        We do not sell your personal information. However, we may share data with:
                    </p>
                    <ul className="list-none flex flex-col gap-5 py-5">
                        <li>
                            Financial institutions & payment processors (to complete transactions).
                        </li>
                        <li>Regulatory bodies & law enforcement (to comply with applicable laws).</li>
                        <li>Service providers & partners who support our operations (e.g., cloud hosting, analytics).
                        </li>
                        <li className="py-5">
                            All third parties are required to maintain confidentiality and use your information only for the agreed purpose.
                        </li>
                        
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl text-left font-bold ">
                        Data Security
                    </h2>
                    <p className="pt-7 pb-3">
                        We implement bank-grade encryption, multi-factor authentication, and real-time monitoring to safeguard
                        your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee
                        absolute security.
                    </p>
                </div>
                <div className="">
                    <h2 className="text-2xl text-left font-bold pt-20">
                        Your Rights
                    </h2>
                    <p className="pt-7 pb-3">
                        Depending on your location, you may have the right to:
                    </p>
                    <ul className="list-none flex flex-col gap-5 py-5">
                        <li>
                            Access the personal data we hold about you.
                        </li>
                        <li>Request correction or deletion of your data.</li>
                        <li>Withdraw consent for certain processing activities.</li>
                        <li>
                            All third parties are required to maintain confidentiality and use your information only for the agreed purpose.
                        </li>
                        <li>Lodge a complaint with a data protection authority.</li>

                    </ul>
                </div>
                { policies.map((policy,index)=>(
                    <div className="py-5" key={index}>
                        <h2 className="text-2xl text-left font-bold ">
                            {policy.title}
                        </h2>
                        <p className="pt-7 pb-3">
                            {policy.desc}
                        </p>
                    </div>
                ))}
               
            </section>
            <Footer />
        </div>
    )
}

