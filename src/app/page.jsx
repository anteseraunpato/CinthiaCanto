"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
  <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-12 md:px-12 lg:px-20 xl:px-48">
{/*Image Container */}
<div className="h-1/2 lg:h-full lg:w-1/2 relative z-0">
  <Image src="/hero.jpg" alt="" fill className="object-contain"/>
</div>


{/*Text Container */}

<div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center z-10">
{/*Título */}
<h1 className="text-4xl md:text-6xl font-bold text-[#2b2243]">Tu bienestar, tu voz.</h1>
{/*Descripción*/}
<p className="md:text-xl">Soy Cinthia Canto, me dedico a brindar un espacio seguro e inclusivo para mujeres y personas LGBT+. Con perspectiva de género y centrada en el bienestar emocional, te acompaño en tu proceso de crecimiento personal, autodescubrimiento y sanación.</p>





<div className="w-full flex gap-4">
  {/*Botones */}
  <button className="p-4 rounded-lg ring-1 ring-[#db70a8] bg-[#db70a8] text-white"> <a href="https://wa.me/15551234567?text=Hola%20Cinthia%20me%20gustaría%20agendar%20una%20cita">Agenda tu cita</a> </button>
  <button className="p-4 rounded-lg ring-1 ring-[#db70a8]"><a rel="stylesheet" href="/trayectoria"> Conoce más</a></button>
  </div>
</div>
  </div>
  </motion.div>
  );

}
{/*aguamarina #8dc2ba*/}

export default Homepage;
