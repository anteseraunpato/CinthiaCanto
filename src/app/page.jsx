import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-0">
{/*Image Container */}
<div className="h-1/2 lg:h-full lg:w-1/2 relative">
  <Image src="/hero.jpg" alt="" fill className="object-contain"/>
</div>


{/*Text Container */}

<div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center z-10">
{/*Título */}
<h1 className="text-4xl md:text-6xl font-bold">Tu bienestar, tu voz, tu camino hacia la libertad</h1>
{/*Descripción*/}
<p className="md:text-xl">Soy Cinthia Canto, me dedico a brindar un espacio seguro e inclusivo para mujeres y personas LGBT+. Con perspectiva de género y centrada en el bienestar emocional, te acompaño en tu proceso de crecimiento personal, autodescubrimiento y sanación, ofreciéndote apoyo cercano y empático en cada paso de tu camino.</p>





<div className="w-full flex gap-4">
  {/*Botones */}
  <button className="p-4 rounded-lg ring-1 ring-[#8b7ab7] bg-[#8b7ab7] text-white">Platiquemos</button>
  <button className="p-4 rounded-lg ring-1 ring-purple-500">Agendar</button>
  </div>
</div>
  </div>;
};

export default Homepage;
