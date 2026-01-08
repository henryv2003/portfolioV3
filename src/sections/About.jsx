import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import { Meteors } from '../components/Meteors'
import Stars from '../components/Stars'


const About = () => {
  const grid2Container = useRef()
  return (
    <section className='c-space section-spacing'>
      <h2 className='text-heading'>About me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
          <img src="assets/coding-pov.png" className='absolute scale-[1.75]
          -right-10 bottom-10 md:scale-[3] md:left-50 md:inset-y-10 
          lg:scale-[2.5]'/>
          <div className='z-10'>
              <p className='headtext'>Hi, Im Henry V.</p>
                  <p className='subtext'>For the past 3 years, I've been developing frontend solutions that prioritize performance, accessibility, 
                    and user delight.
                  </p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
        </div>
        {/* grid 2 */}
        <div  className='grid-default-color grid-2'>
          <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
            <p className='flex items-end text-5xl text-gray-500'>
              CODE IS CRAFT
            </p>
                <Card style={{rotate: "75deg", top:"30%", left:"20%"}} 
                  text="GRASP"
                  containerRef={grid2Container}
                />
                <Card style={{rotate: "-30deg", top:"60%", left:"45%"}} 
                  text="SOLID"
                  containerRef={grid2Container}
                />
                <Card style={{rotate: "90deg", top:"30%", left:"70%"}} 
                      text="Design Patters"
                      containerRef={grid2Container}
                />
                <Card style={{rotate: "-45deg", top:"55%", left:"0%"}} 
                      text="Design Principles"
                      containerRef={grid2Container}
                />
                <Card style={{rotate: "20deg", top:"10%", left:"38%"}} 
                      text="SRP"
                      containerRef={grid2Container}
                />
                <Card style={{rotate: "30deg", top:"70%", left:"70%"}} 
                      image="./assets/logos/csharp-pink.png"
                      containerRef={grid2Container}
                />
                <Card style={{rotate: "-45deg", top:"70%", left:"25%"}} 
                      image="./assets/logos/dotnet-pink.png"
                      containerRef={grid2Container}
                />
                <Card style={{rotate: "-45deg", top:"5%", left:"10%"}} 
                      image="./assets/logos/blazor-pink.png"
                      containerRef={grid2Container}
                />
          </div>
        </div>
        {/* grid 3 */}
        <div className='grid-black-color grid-3'>
          <div className="relative h-[500px] w-full overflow-hidden">
            
            <div className="pointer-events-none absolute inset-0 z-0">
              <Stars className="absolute inset-0" />
              <Meteors />
            </div>

            <div className='relative z-20 w-[50%] text-white'>
              <p className='headtext'>Time Zone</p>
              <p className='subtext'>I'm based in Mars, and open to remote work worldwide</p>  
            </div>
            
            <figure className='absolute left-[30%] top-[10%] z-10'>
              <Globe/>
            </figure>
          </div>
        </div>
        {/* grid 4 */}
        <div className='grid-special-color grid-4'></div>
        {/* grid 5 */}
        <div className='grid-default-color grid-5'></div>
      </div>
    </section>
  )
}

export default About