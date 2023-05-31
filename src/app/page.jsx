'use client';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Image from 'next/image';
import design from "../../public/design.png"
import consulting from "../../public/consulting.png"
import code from "../../public/code.png"
import jdpc from "../../public/jdpc.png"
import iasip from "../../public/iasip.png"
import volt from "../../public/volt.png"
import planner from "../../public/planner.png"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
      <main className='bg-blue-50 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          
          <nav className='py-4 md:py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>James Fisher Web Dev</h1>
            <ul className='flex items-center'>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/updtresumegdrive.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center md:p-10'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>James Fisher</h2>
              <h3 className='text-2xl py-2 md:text-3xl font-medium'>
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer', 'Problem Solver', 'Continuous Learner'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay:0.5 }}
            >
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
                Passionate Developer with a history in <span className='text-teal-500'>business and teaching</span>, seeking my 
                first position in software development.
              </p>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
                With a strong foundation in <span className='text-teal-500'>full-stack development
                </span>, I'm ready and eager to contribute my skills 
                to a dynamic team, and further my knowledge in the process.
              </p>
            </motion.div>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a href="#">
                <AiFillLinkedin />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <a href="mailto:jdfban@gmail.com">
                <AiFillMail />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <a href="https://github.com/ajammyfish" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </motion.div>
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-center'>Areas of Expertise</h3>
          </div>

          <div className='lg:flex gap-10'>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} className='m-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Front-End</h3>
                <p className='py-2'>
                  Combining a range of tools and libraries to create responsive, modern, 
                  elegant websites.
                </p>
                <h4 className='py-4 text-teal-600'>Technologies I use</h4>
                <p className='text-gray-800 py-1'>React</p>
                <p className='text-gray-800 py-1'>Next JS</p>
                <p className='text-gray-800 py-1'>Bootstrap</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100} className='m-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Back-End</h3>
                <p className='py-2'>
                  Creating secure and well structured server side code.
                </p>
                <h4 className='py-4 text-teal-600'>Technologies I use</h4>
                <p className='text-gray-800 py-1'>Django</p>
                <p className='text-gray-800 py-1'>Django REST framework</p>
                <p className='text-gray-800 py-1'>Flask</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={consulting} width={100} height={100} className='m-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Problem Solving</h3>
                <p className='py-2'>
                  Developing effective solutions to complex problems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-4xl py-1 text-center underline font-semibold'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 text-center'>
              Since the beginning of my journey, I've created a number of projects. Some of which, 
              you can view below.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap'>
            <div className='basis-1/3 flex-1 relative'>
              <a href="https://windowcleaningdorset.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={jdpc} className='rounded-lg object-cover' style={{layout: 'responsive'}} width={'100%'} height={'100%'} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-black bg-opacity-75 rounded-full px-6 py-3">
                    <p className="text-white text-center font-medium">View Site</p>
                  </div>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative'>
              <a href="https://ajammyfish.github.io/iasip/" target="_blank" rel="noopener noreferrer">
                <Image src={iasip} className='rounded-lg object-cover' style={{layout: 'responsive'}} width={'100%'} height={'100%'} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-black bg-opacity-75 rounded-full px-6 py-3">
                    <p className="text-white text-center font-medium">View Site</p>
                  </div>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative'>
              <a href="https://github.com/ajammyfish" target="_blank" rel="noopener noreferrer">
                <Image src={volt} className='rounded-lg object-cover' style={{layout: 'responsive'}} width={'100%'} height={'100%'} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-black bg-opacity-75 rounded-full px-6 py-3">
                    <p className="text-white text-center font-medium">View Code</p>
                  </div>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative'>
              <a href="https://github.com/ajammyfish" target="_blank" rel="noopener noreferrer">
                <Image src={planner} className='rounded-lg object-cover' style={{layout: 'responsive'}} width={'100%'} height={'100%'} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-black bg-opacity-75 rounded-full px-6 py-3">
                    <p className="text-white text-center font-medium">View Code</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}