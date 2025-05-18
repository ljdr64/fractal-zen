import Image from "next/image"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-sahumerios.jpg')" }}
    >
      <div className="absolute inset-0 bg-black z-0" />
      <div
        className="absolute inset-0 z-0 bg-center bg-cover opacity-60"
        style={{ backgroundImage: "url('/bg-home-fractal-zen.png')" }}
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 gap-6">
        <Image
          src="/logo-white-fractal-zen.png"
          alt="Fractal Zen logo"
          width={400}
          height={400}
          priority
        />
        <h1 className="sr-only">Fractal Zen</h1>
        <h2 className="text-4xl md:text-5xl text-white font-semibold drop-shadow">
          Sahumerios, energía y armonía para tu espacio
        </h2>
      </div>
    </div>
  )
}

export default Hero
