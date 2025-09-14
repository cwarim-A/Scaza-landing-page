

import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export const ContactPage = (): JSX.Element => {
  return (
    <div className='font-poppins'>
      <Navbar />

      {/* Header Section */}
      <section className='min-h-[200px] flex flex-col justify-center items-center py-20 px-5 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className='text-2xl md:text-3xl font-bold text-[#225C07]'
        >
          Contact Support
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className='mt-6 text-sm md:text-base max-w-2xl'
        >
          We are accessible at all times. <br /> Tell us how we may be of assistance.
        </motion.p>
      </section>

      {/* Contact Form */}
      <section className='h-[650px] bg-gray-100 flex justify-center items-center py-60 px-7'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className='w-[400px] md:w-[500px] h-[550px] md:h-[500px] bg-white rounded-2xl shadow-md px-7'
        >
          {/* Form Inputs */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-4 py-4 '>
            <div className='flex flex-col gap-2'>
              <label>First Name</label>
              <input type="text" className='w-full border border-gray-300 py-2 md:px-5 rounded-sm focus:outline-none' />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Last Name</label>
              <input type="text" className='w-full border border-gray-300 py-2 px-5 rounded-sm focus:outline-none' />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-md">
            <label htmlFor="phone" className="mb-2">Your phone number</label>
            <div className="flex gap-3">
              <input type="text" placeholder="" className="w-16 border border-gray-300 rounded-md px-2 focus:outline-none" />
              <input type="tel" id="phone" placeholder="" className="w-[170px] md:w-96 border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className='bg-[#225C07] text-white py-2 px-2 md:py-5 md:px-4 rounded-md w-full mt-5'
          >
            Send Your Message
          </motion.button>
        </motion.div>
      </section>

      {/* QR + CTA Section */}
      <section className="bg-[#C7E7B766] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-12 px-5 md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <img src="/Qr-scan.jpg" alt="" className='w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-2xl mx-auto' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className='md:w-2/5'
        >
          <h2 className='text-xl md:text-3xl font-bold'>
            Join Us and be guided through the new era of payment
          </h2>

          <motion.div
            className="flex items-center gap-3 py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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
            </motion.a>

            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

