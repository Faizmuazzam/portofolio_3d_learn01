import React, { Fragment } from 'react';

import { motion } from 'framer-motion'

const Section = ({ children }) => {
  return (
    <motion.section
      className={'h-screen w-screen p-8 max-w-screen-2xl mx-auto flex items-start justify-center flex-col'}
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5
        }
      }}
    >
      {children}
    </motion.section>
  )
}

const Interfaces = () => {
  return (
    <div className='flex flex-col items-center w-screen'>
      <AboutSection />
      <SkillSection />
      <Section>
        <h2>Project</h2>
      </Section>
      <ContactSection />
    </div>
  );
}


const AboutSection = () => {
  return (
    <Section>
      <div className='ttl-banner'>
        <h1 className='text-6xl font-extrabold leading-snug'>
          Hi, I'm <br />
          <span className='bg-white px-2 italic'>Faiz Muazzam</span>
        </h1>
      </div>
      <motion.div
        className='desc-banner'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1.25
        }}
      >
        <p className='text-lg text-gray-600 mt-4'>
          I am a Front-End Developer. <br /> I enjoy creating attractive interfaces and I like taking on new challenges <br />
          in the world of Front-End Developer.
        </p>
      </motion.div>
      <motion.div
        className='link-banner'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1.75
        }}
      >
        <button className='bg-indigo-600 px-8 py-4 text-white rounded-lg font-bold text-lg mt-12'>
          Contact Me
        </button>
      </motion.div>
    </Section>
  )
}

const skills = [
  {
    title: "Three Js/React Three Fiber",
    level: 80
  },
  {
    title: "React/React Native",
    level: 70
  },
  {
    title: "Node Js",
    level: 70
  },
  {
    title: "Typescript",
    level: 60
  },
  {
    title: "3D Modelling",
    level: 80
  }
]

const languages = [
  {
    title: "Bahasa Indonesia",
    level: 100
  },
  {
    title: "English",
    level: 70
  }
]

const SkillSection = () => {
  return (
    <Section>
      <div className='box-skill'>
        <div className='ttl-skill'>
          <h2 className='text-5xl font-bold'>
            Skills
          </h2>
        </div>
        <div className='content-skill mt-8 space-y-4'>
          {skills.map((skill, index) => (
            <div className='box-item w-64' key={index}>
              <motion.h3
                className='text-xl font-bold text-gray-800'
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                transition={{
                  duration: 1,
                  delay: 1 + index * 0.2
                }}
              >
                {skill.title}
              </motion.h3>
              <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                <motion.div
                  className='h-2 bg-indigo-500 rounded-full'
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0
                  }}
                  whileInView={{
                    scaleX: 1
                  }}
                  transition={{
                    duration: 1,
                    delay: 1 + index * 0.2
                  }}
                >
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='box-lang mt-10'>
        <div className='ttl-skill'>
          <h2 className='text-5xl font-bold'>
            My Language
          </h2>
        </div>
        <div className='content-lang mt-8 space-y-4'>
          {languages.map((lang, index) => (
            <div className='box-item w-64' key={index}>
              <motion.h3
                className='text-xl font-bold text-gray-800'
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                transition={{
                  duration: 1,
                  delay: 2 + index * 0.2
                }}
              >
                {lang.title}
              </motion.h3>
              <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                <motion.div
                  className='h-2 bg-indigo-500 rounded-full'
                  style={{ width: `${lang.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0
                  }}
                  whileInView={{
                    scaleX: 1
                  }}
                  transition={{
                    duration: 1,
                    delay: 2 + index * 0.2
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Interfaces;
