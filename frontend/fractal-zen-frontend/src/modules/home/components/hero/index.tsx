const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/bg-home-fractal-zen.png')" }}
    >
      <div className="h-full w-full bg-black/50 flex flex-col">
        <div className="flex-1 basis-[75%] flex justify-center items-end mt-2 sm:mt-4 md:mt-6 lg:mt-8">
          <div
            className="h-full aspect-square bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/images/logo-png-white-fractal-zen.png')",
            }}
          />
        </div>
        <div className="flex-1 basis-[25%] flex justify-center items-start">
          <h1 className="sr-only">Fractal Zen</h1>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold drop-shadow px-4">
            Sahumerios, energía y armonía para tu espacio
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
