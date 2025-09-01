
import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'

export const ContactPage = (): JSX.Element => {
  return (
    <div className='font-poppins'>
      <Navbar />
      <section className='min-h-[200px] flex flex-col justify-center items-center py-20 px-5 text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-[#225C07]'>Contact Support</h2>
        <p className='mt-6 text-sm md:text-base max-w-2xl '>We are accessible at all times. <br /> Tell us how we may be of assistance.</p>
      </section>
      <section className='h-[650px] bg-gray-100 flex justify-center items-center py-60 px-7'>
        <div className='w-[500px] md:w-[500px] h-[550px] md:h-[500px] bg-white rounded-2xl shadow-md px-7'>
          <div className='flex flex-col md:flex-row  gap-6 md:gap-4 py-4 '>
            <div className='flex flex-col gap-2'>
              <label>First Name</label>
              <input type="text" className='w-full border border-gray-300 py-2  md:px-5 rounded-sm focus:outline-none' />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Last Name</label>
              <input type="text" className='w-full border border-gray-300 py-2 px-5 rounded-sm focus:outline-none' />
            </div>
          </div>
          <div className="flex flex-col w-full max-w-md">
            <label htmlFor="phone" className="  mb-2">
              Your phone number
            </label>

            <div className="flex gap-3">
              {/* Country Code */}
              <input
                type="text"
                placeholder=""
                className="w-16 border border-gray-300 rounded-md px-2 focus:outline-none"
              />

              {/* Phone Number */}
              <input
                type="tel"
                id="phone"
                placeholder=""
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  "
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-2 py-3'>
              <label>Email</label>
              <input type="email" className='w-full border border-gray-300 py-2 px-5 rounded-sm focus:outline-none' />
            </div>
            <div className='flex flex-col gap-2'>
              <label>How can we help?</label>
              <input type="text" className='w-full border border-gray-300 py-2 px-5 rounded-sm focus:outline-none' />
            </div>
          </div>
          <button className='bg-[#225C07] text-white py-2 px-2 md:py-5 md:px-4 rounded-md w-full mt-5'>
            Send Your Message
          </button>
        </div>
      </section>
      <section className="bg-[#C7E7B766] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-12 px-5  md:text-left">
        <div>
          <img src="/Qr-scan.jpg" alt="" className='w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-2xl mx-auto' />
        </div>
        <div className=' md:w-2/5'>
          <h2 className='text-xl md:text-3xl font-bold'>Join Us and be guided through the new era of payment</h2>
          <div className="flex items-center gap-3 py-5">
            {/* Play Store */}
            <a
              href="https://play.google.com/store/apps/details?id=com.scaza"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-gray-900 transition"
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
              className="bg-black text-white flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-gray-900 transition"
            >
              <img src="apple.png" alt="Apple Store" className="h-5 w-5" />
              <div className="text-left leading-tight">
                <p className="text-xs">Download on the</p>
                <span className="text-[12px] font-semibold">APPLE STORE</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

