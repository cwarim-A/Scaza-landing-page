
import Footer from '../../components/Footer'
import { Navbar } from '../../components/Navbar'


const faqQuestions = [
    {
        question:"How do I use Scaza to scan and pay?",
        answer:"Scaza is available across various payment platforms. Simply scan with you camera or a qr-scanner to start making payments."
    },
    {
        question:"Is Scaza secure for payments?",
        answer:"Yes, Scaza uses advanced encryption and security protocols to ensure all transactions are safe and secure."
    },
    {
        question:"How do I sign up for a Scaza account?",
        answer:"You can sign up via the Scaza app or website by providing your details and verifying your email address."
    },
    {
        question:"Does Scaza charge any fees for transactions?",
        answer:"Scaza keeps fees transparent. Minimal transaction fees may apply depending on the payment method or integration."
    },
    {
        question:"Can I manage multiple businesses with one account?",
        answer:"Yes, Scaza’s dashboard allows you to manage multiple businesses, keeping their records organized and accessible."
    },
    {
        question:"What support options does Scaza offer?",
        answer:"Scaza offers 24/7 customer support via live chat, email, and a comprehensive help center to address all your queries."
    },
    {
        question:"Can I connect Scaza to other banking apps?",
        answer:"Scaza supports integration with major banking apps, ensuring that you can manage your finances across multiple platforms seamlessly."
    },
    {
        question:"Can Scaza integrate with my e-shop?",
        answer:"Scaza supports integration with major banking apps, ensuring that you can manage your finances across multiple platforms seamlessly."
    },
    {
        question:"Scaza supports integration with major banking apps, ensuring that you can manage your finances across multiple platforms seamlessly.",
        answer:"The easiest way to reach us is to tap profileon the Scaza app then tap Chat With Us. You can also send an email to help@kuda.com"
    }
]

export const Faq = () => {
  return (
    <div className='font-poppins'>
        <Navbar/>
        <section className=' py-20'>
              <div className='w-full  px-5  md:px-0 md:w-[70%] lg:w-[50%] mx-auto '>
                  <h1 className='text-[#225C07] text-3xl font-bold'>Frequently Asked Questions</h1>
                  <p className='text-sm sm:text-base py-5 text-gray-700 '>Your guide to understanding Scaza's seamless payment solutions <br className='hidden sm:block' />
                      for individuals and businesses.</p>
             </div>
              <div className=" w-full px-5 md:px-0 md:w-[50%] mx-auto py-5">
                 {faqQuestions.map((item, index) => (
                     <div key={index} className=' border-gray-200 py-4'>
                         <h2 className='text-[#225C07] font-semibold'>{item.question}</h2>
                         <p className='text-[14px]'>{item.answer}</p>
                     </div>
                 ))}
             </div>
             <div className=' flex flex-col items-center justify-center gap-10 px-5  '>
                  <h2 className='text-[#225C07] font-semibold'>Don't see your question?</h2>
                  <button className='bg-[#225C07] text-white rounded-lg py-3 px-5 sm:w-full md:w-[18%] font-bold'>Visit our help centre</button>
             </div>
        </section>
        <Footer/>
    </div>
  )
}

