import React from 'react'

  
const About = () => {
  return (
    <section id='about' className='mt-20' >
    <div className='bg-gradient-to-r from-sky-400/40 via-25% via-sky-400/40 min-h-[40rem]  max-w-[80rem] flex items-center justify-center rounded-[40px] ml-10'>
      <div className="container mx-auto px-4 text-white max-w-full mt-1 mb-1">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="ml-0 md:ml-0 text-center md:text-left mb-12">
            <h1 className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold text-[#ffcd41] leading-none " >02</h1>
            <h3 className="text-lg ml-12 md:text-xl tracking-wide mt-[-1rem] md:mt-[-2rem]">years of experience</h3>
            <div className="text-3xl md:text-4xl font-bold tracking-wider mt-4">
             
              <p className="opacity-50 ml-12">Jas Singh</p>
              <p className="opacity-50 ml-12">Ajmani</p>
            </div>
          </div>
  
       
          <div className="ml-0 md:ml-68 w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-5xl md:text-5xl text-[#ffcd41] font-bold px-4 mb-8">About Me</h2>
            <p className="mt-4 text-base md:text-lg px-4 md:px-0 mb-6">
             When I was in 12th grade, I discovered coding through Python, where I created my year-end project, Shoe Billing System. Since then, my journey has evolved into full-stack development, working with frameworks like React, Node, Express.js, and MongoDB. More over, I have enhanced my knowledge in Data Structures and Algorithm, having strong command on Graph, Trees, Arrays, Linked List, ect. <br />I am eager to expand my knowledge and explore new technologies. 
            </p>
            <button className="mt-6 bg-white text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:text-pink-700 transition-transform duration-300 hover:scale-110" onClick={()=>{window.location.href='https://www.instagram.com/js.ajmani/'}}>
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
