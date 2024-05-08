import React from 'react'
import { Tilt } from 'react-tilt' 
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index , title, icon}) =>
{
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      As an aspiring Full Stack Developer in my final years of studying Computer Science, I am fueled by a deep
      passion for personal growth and relentless self-improvement. My proficiency in React, JavaScript, Node.js,
      Firebase, CSS, MySQL, Java, and other technologies empowers me to craft comprehensive solutions. With a
      confident and organized approach, I tackle challenges head-on, collaborate seamlessly with teams, and
      consistently deliver exceptional results. I am excited about the prospect of leveraging my skills and
      dedication to make a meaningful impact in the world of technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About , "about")