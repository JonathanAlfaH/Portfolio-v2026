

export default function Home() {
  return (
    <div>
      <nav className="fixed top-4  bg-white/50 w-[calc(100%-2rem)] max-w-6xl h-14 left-1/2 -translate-x-1/2 rounded-full shadow-md">
         <div className="flex h-16 items-center px-24 justify-between">
          <a className=" font-semibold text-gray-900" href="#">
            ALFAHER
          </a>

          <ul className="items-center gap-4 flex">
            <li>
              <a
                href="#inicio"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#sobremi"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Contacto
              </a>
            </li>
          </ul>

          <div>
            <button
              type="button"
              className="h-10 w-10 items-center justify-center rounded-xl text-gray-800 cursor-pointer"
            >
              <i className="text-semibold ">ES</i>
            </button>
            <button
              type="button"
              className="h-10 w-10 items-center justify-center rounded-xl text-gray-800 cursor-pointer"
            >
              <i className="bi bi-brightness-high-fill text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      <main className="scroll-smooth px-50 bg-gradient-to-tr from-gray-[#0D0D0D] to-[#0D004A]">
        <section id="inicio" className=" w-full h-screen flex flex-col items-center justify-center">
        </section>
        <section id="proyectos" className=" w-full h-screen flex flex-col items-center justify-center">
        </section>
        <section id="experiencia" className=" w-full h-screen flex flex-col items-center justify-center">
        </section>
        <section id="sobremi" className=" w-full h-screen flex flex-col items-center justify-center">
        </section>
        <section id="contacto" className=" w-full h-screen flex flex-col items-center justify-center">
        </section>
      </main>
    </div>
  );
}
