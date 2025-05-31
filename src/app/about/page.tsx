import Image from "next/image"

const AboutMePage = () => {
  return (
    <div className="bg-black px-20 xl:px-30 text-white min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-white md:px-20 mt-30">
          <h1 className="text-white text-4xl md:text-5xl font-bold underline underline-offset-6 decoration-cyan-500 decoration-[3px] mb-20 md:mb-30">
            ABOUT
          </h1>
          <p className="text-white md:text-1xl  xl:text-2xl">
            Passionate Full Stack Developer with expertise in building scalable web applications and delivering seamless
            user experiences. Skilled in both front-end and back-end development, I thrive on solving complex problems,
            learning new technologies, and contributing to impactful projects.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-[800px] xl:h-[1000px] relative">
          <Image
            src="/images/about-me.png"
            alt="About me"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMePage
