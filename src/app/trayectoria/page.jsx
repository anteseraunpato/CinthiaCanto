"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const TrayectoriaPage = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref})
  const x = useTransform(scrollYProgress,[0,1], ["0%","-75%"])

  const items = [
    {
      id:1,
      color: "from-violet-300 to-pink-300",
      title: "Titulo de ejemplo",
      desc: "Lorem impsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolores",
      img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1",
      link: "https://github.com/anteseraunpato"
    },

    {
      id:2,
      color: "from-pink-300 to-emerald-300",
      title: "Titulo de ejemplo2",
      desc: "Lorem impsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolores",
      img: "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57",
      link: "https://github.com/anteseraunpato"
    },
    {
      id:3,
      color: "from-emerald-300 to-pink-300",
      title: "Titulo de ejemplo 3",
      desc: "Lorem impsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolores",
      img: "https://images.unsplash.com/photo-1621112904887-419379ce6824",
      link: "https://github.com/anteseraunpato"
    },
    {
      id:2,
      color: "from-pink-300 to-purple-300",
      title: "Titulo de ejemplo4",
      desc: "Lorem impsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolores",
      img: "https://images.unsplash.com/photo-1648887233981-3d811bb838cf",
      link: "https://github.com/anteseraunpato"
    },
  ];
  
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>

            {/*CONTAINER*/}
            <div className="h-screen p-0 m-0 w-screen">
            {/*Text Container*/}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
            {/*Biografia*/} 
            <div className="flex flex-col gap-12 justify-center ">
                <h1 className="font-bold text-2xl">BIOGRAFIA</h1>
            {/* Descripcion bio */}
                <p className="text-xl">Soy Cinthia Canto, psicóloga especializada en salud mental desde una perspectiva feminista e inclusiva. Con más de X años de experiencia, me dedico a acompañar a mujeres y personas LGBT+ en sus procesos de autodescubrimiento y bienestar emocional, ofreciendo un espacio seguro para el crecimiento personal.</p>

                <span className="italic"> No se puede sanar lo que no se enfrenta.</span>
            {/* BIOGRAPHY SCROLL SVG */}
            <svg viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
                <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              </svg>
            </div>

            </div>  
            </div>     
            {/*Experiencia*/} 
        <div className="h-[600vh] relative" ref={ref}>
  <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
    <motion.div style={{x}} className="flex">
    {items.map(item=> (
      <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
        <div className="flex flex-col gap-8 text-white">
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">{item.title}</h1>
          <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
            <Image src={item.img} alt="" fill/>
          </div>
          <p className="w-80 md:w-96 lg:w-[500px] lg:text-md xl:w-[600px]">{item.desc}</p>
          <Link href={item.link} className="flex justify-end"><button className="p-2 text-sm md:text-sm lg:text-md bg-white text-black font-semibold rounded-full">Ver mas</button></Link>
        </div>
      </div>
      ))}

  </motion.div>

  </div>
</div>
<div className="w-screen h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-8xl font-semibold">¿Tienes un proyecto?</h1>
    <div className="relative">
      <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
        <defs>
          <path
          id="circlePath"
          d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text fill="#000">
          <textPath xlinkHref="#circlePath" className="text-lg">✨ Psicóloga clínica ✨✨ Conferencista ✨ </textPath>
        </text>
      </motion.svg>

      <a href="https://wa.me/15551234567?text=Hola%20Cinthia%20me%20gustaría%20agendar%20una%20conferencia" className="w-20 h-20 md:w-32 md:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center z-40">Hablemos</a>
    </div>
  </div>
  </motion.div>
  )
}

export default TrayectoriaPage
