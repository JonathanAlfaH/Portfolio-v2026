"use client";
import Card from "@/components/Card/Card";
import Icon from "@/components/Icon/Icon";
import Title from "@/components/Title/Title";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const languages = {
    es: {
      welcome: "Bienvenido",
      name: "Soy Jonathan Alfaro",
      description:
        "Desarrollador Front End con experiencia en el desarrollo de aplicaciones web",
      downloadCV: "Descargar CV",
      home: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      aboutMe: "Sobre mi",
      skills: "Habilidades",
      contact: "Contacto",
      aboutMeP1:
        "Estudiante de la carrera de Informática Empresarial con un fuerte interés en el diseño de interfaces de usuario y desarrollo frontend.",
      aboutMeP2:
        "Me destaco por tener mentalidad abierta a aprender nuevas habilidades, así como mi capacidad de aprender rápidamente, trabajo en equipo y creatividad.",
      aboutMeP3:
        "Busco una oportunidad para aplicar mis habilidades y conocimientos contribuyendo positivamente a la empresa y a su vez seguir aprendiendo para mejorar cada día como profesional.",
      mySkills: "Conocimientos y habilidades",
      mailName: "Nombre",
      mailEmail: "Email",
      mailMessage: "Mensaje",
      send: "Enviar Mensaje",
      phrase: "Hagamos algo interesante",
    },

    en: {
      welcome: "Welcome",
      name: " I am Jonathan Alfaro",
      description:
        "Front End Developer with experience in web application development",
      downloadCV: "Download CV",
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      aboutMe: "About Me",
      skills: "Skills",
      contact: "Contact",
      aboutMeP1:
        "I am a student of the Computer Science degree with a strong interest in user interface design and frontend development.",
      aboutMeP2:
        "I have a keen interest in learning new skills, as well as my ability to quickly learn, work in a team, and be creative.",
      aboutMeP3:
        "I am looking for an opportunity to apply my skills and knowledge and contribute positively to the company while also continuing to learn and improve each day as a professional.",
      mySkills: "Knowledge and Skills",
      mailName: "Name",
      mailEmail: "Email",
      mailMessage: "Message",
      send: "Send Message",
      phrase: "Let's do something interesting",
    },
  };

  const experiences = {
    es:{
      ucr: {
        title: "UCR",
        description: "Participé en el proyecto en colaboración de la Universidad de Costa Rica con el Comité municipal de Emergencias de Golfito para atender incidentes relacionados con desastres naturales. Con el objetivo de mejorar la comunicación con los comité municipales y la gestión de los incidentes.",
        activities: [
          "Desarrollé los formularios del módulo de autenticación de usuarios para el registro e inicio de sesión",
          "Implementé las funcionalidades de recuperación de cuenta/contraseña",
          "Realicé la documetentación con el funcionamiento del sistema web",
        ],
      },
      dynamic: {
        title: "Dynamic Advance",
        description: "Participé en el desarrollo de una aplicación web de gestión empresarial. Mis responsabilidades incluyeron la elaboración de componentes, formularios, diseño de interfaces de usuario, optimización de rendimiento y la integración de APIs.",
        activities: [
          "Desarrollé funcionalidades utilizando React y TypeScript, componentizando y realizando mantenimiento del código.",
          "Construí componentes y vistas orientadas a la gestión administrativa, alineadas con los requerimientos del sistema",
          "Implementé tablas y formularios de registro y actualización con opciones dinámicas según la selección del usuario",
          "Implementé interfaces con Tailwind CSS y HeroUI, manteniendo la consistencia visual y una experiencia UX/UI moderna",
        ],
      },  

    },

    en:{
      ucr: {
        title: "UCR",
        description: "I participated in a collaborative project between the University of Costa Rica and the Golfito Municipal Emergency Committee to address incidents related to natural disasters. The objective was to improve communication with the municipal committees and the management of incidents.",
        activities: [
          "Developed user authentication forms for registration and login",
          "Implemented account/password recovery features",
          "Documented the system's web functionality",
        ],
      },
      dynamic: {
        title: "Dynamic Advance",
        description: "I participated in the development of a web application for business management. My responsibilities included the creation of components, forms, user interface design, performance optimization, and API integration.",
        activities: [
          "Developed features using React and TypeScript, componentizing and maintaining code.",
          "Built components and views for administrative management, aligned with system requirements",
          "Implemented registration and update tables with dynamic options based on user selection",
          "Implemented interfaces with Tailwind CSS and HeroUI, maintaining visual consistency and a modern UX/UI experience",
        ],
      }

    }
  }

  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  const onSubmitEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      text: formData.get("text"),
    };
    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setTimeout(() => {
        setToast({
          message: "Email enviado con éxito!",
          type: "success",
        });
      }, 500);
      setTimeout(() => {
        setToast(null);
      }, 5000);
      form.reset();
    } catch (error) {
      setTimeout(() => {
        setToast({
          message: "Error enviando el email",
          type: "error",
        });
      }, 500);
      setTimeout(() => {
        setToast(null);
      }, 5000);
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="fixed top-4 bg-[var(--foreground)]/5 w-[calc(100%-2rem)] max-w-6xl h-14 left-1/2 -translate-x-1/2 rounded-full shadow-lg shadow-[var(--foreground)]/30 z-10 backdrop-blur-md">
      <div className="flex h-full items-center px-6 md:px-24 justify-between">
        <a className="font-semibold" href="#">
          ALFAHER
        </a>

        <ul className="hidden md:flex items-center gap-4">
          {[
            ["#inicio", languages[language].home],
            // ["#proyectos", languages[language].projects],
            ["#experiencia", languages[language].experience],
            ["#sobremi", languages[language].aboutMe],
            ["#habilidades", languages[language].skills],
            ["#contacto", languages[language].contact],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm transition-colors duration-500 hover:text-[var(--secondary)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="h-10 w-10 rounded-xl hover:bg-white/20 transition"
          >
            <i className="uppercase">{language}</i>
          </button>

          <button
            onClick={toggleTheme}
            className="h-10 w-10 rounded-xl hover:bg-white/20 transition"
          >
            {isDark ? (
              <i className="bi bi-brightness-high-fill text-xl"></i>
            ) : (
              <i className="bi bi-moon text-xl"></i>
            )}
          </button> 
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-10 w-10 rounded-xl hover:bg-white/20 transition"
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-xl`}></i>
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-[var(--background-primary)] shadow-xl backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            {[
              ["#inicio", languages[language].home],
              ["#proyectos", languages[language].projects],
              ["#experiencia", languages[language].experience],
              ["#sobremi", languages[language].aboutMe],
              ["#habilidades", languages[language].skills],
              ["#contacto", languages[language].contact],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm hover:text-[var(--secondary)] transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>

      <main className="px-4 sm:px-8 md:px-16 lg:px-32">
        <section
          id="inicio"
          className=" w-full h-[100vh] flex flex-col justify-center gap-4"
        >
          <Title title="Web" />
          <div className="flex items-center gap-4 align-middle">
            <div className="flex items-center md:w-1/2 w-full gap-6">
              <span className="h-px flex-1 bg-[var(--secondary)]"></span>

              <span className="text-2xl md:text-3xl text-[var(--secondary)] uppercase whitespace-nowrap">
                {languages[language].welcome}
              </span>

              <span className="h-px flex-1 bg-[var(--secondary)]"></span>
            </div>
          </div>
          <div className=" md:w-2/3 gap-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl text-[var(--main-text)] font-bold uppercase mb-6">
              {languages[language].name}
            </h1>
            <p className="text-2xl font-regular">
              {languages[language].description}
            </p>
          </div>
          <div className=" md:flex my-4 items-center gap-6 md:gap-12">
            <a
              href="/files/CVJonathanAlfaro2026.pdf"
              download
              className="text-center h-16 border border-[var(--secondary)] rounded-lg uppercase p-4 hover:bg-[var(--secondary)] hover:text-white transition-colors duration-500"
            >
              {languages[language].downloadCV}
            </a>
            <div className="mt-6 md:mt-0">
              <Title title="Portfolio" />
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-end gap-6 items-center md:absolute right-10 inset-y-0">
            <div className="h-px w-35 md:w-1 md:h-60 font-bold bg-[var(--secondary)]"></div>

            <a
              href="https://github.com/JonathanAlfaH"
              target="_blank"
              className="hover:scale-130 transition-transform duration-200"
            >
              <i className="bi bi-github text-4xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jona-alfaro/"
              target="_blank"
              className="hover:scale-130 transition-transform duration-200"
            >
              <i className="bi bi-linkedin text-4xl"></i>
            </a>

            <div className="h-px w-35 md:w-1 md:h-60 bg-[var(--secondary)]"></div>
          </div>
        </section>

        {/* <section id="proyectos" className="w-full md:h-screen pt-20">
          <Title title={languages[language].projects} />
        </section> */}
        <section id="experiencia" className="w-full mdh-screen pt-20">
          <Title title={languages[language].experience} />
          <div className="pt-6 h-[calc(100%-10rem)] grid grid-cols-1 md:grid-cols-6 grid-rows-2 md:grid-rows-3 gap-6">
            <div className=" md:col-span-2 md:row-span-3">
              <Card
                alt="UCR"
                image="/images/ucr.png"
                size={500}
                description={experiences[language].ucr.description}
                technologies={["Dart", "Flutter", "Firebase"]}
                activities={experiences[language].ucr.activities}
              />
            </div>
            <div className="md:col-span-4 md:row-span-3">
              <Card
                alt="Dynamic Advance"
                image="/images/dynamic.png"
                size={600}
                description={experiences[language].dynamic.description}
                technologies={["React", "Next.js", "TypeScript", "TailwindCSS"]}
                activities={experiences[language].dynamic.activities}
              />
            </div>
          </div>
        </section>
        <section id="sobremi" className="w-full md:h-screen pt-20">
          <Title title={languages[language].aboutMe} />
          <div className="flex md:flex-row grid md:grid-cols-2 gap-6 pt-6">
            <div className="text-xl md:text-3xl font-regular flex flex-col gap-6">
              <p>{languages[language].aboutMeP1}</p>

              <p>{languages[language].aboutMeP2}</p>

              <p>{languages[language].aboutMeP3}</p>
            </div>

            <div className=" md:h-[50%] aspect-3/4 rounded-3xl transiton-transform duration-500 ease-in-out hover:scale-102 hover:rotate-3 hover:border-[var(--secondary)]/50 hover:shadow-xl hover:shadow-[var(--secondary)]/30 hover:-translate-y-2 hover:-translate-x-2">
              <div className="relative  aspect-3/4 ">
                <Image
                  className="rounded-3xl "
                  src="/images/perfile.jpeg"
                  alt="perfil"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        <section id="habilidades" className="w-full md:h-screen pt-20">
          <Title title={languages[language].skills} />

          <div className="flex flex-col items-center justify-center gap-6 pt-6">
            <p className="text-lg md:text-4xl uppercase font-bold">
              {languages[language].mySkills}
            </p>
            <div className="flex flex-wrap justify-center max-w-5xl gap-6">
              <Icon name="html5" size={80} />
              <Icon name="css3" size={80} />
              <Icon name="javascript" size={80} />
              <Icon name="react" size={80} />
              <Icon name="java" size={80} />
              <Icon name="nextjs" size={80} />
              <Icon name="flutter" size={80} />
              <Icon name="sql server" size={80} />
              <Icon name="firebase" size={80} />
              <Icon name="git" size={80} />
              <Icon name="typescript" size={80} />
              <Icon name="figma" size={80} />
              <Icon name="tailwind" size={80} />
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full md:h-screen pt-20">
          {toast && (
            <div
              className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-lg font-semibold animate-slide-in
                ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            >
              {toast.message}
            </div>
          )}
          <Title title={languages[language].contact} />

          <div className="pt-6 md:h-[calc(100%-10rem)]">
            <form
              action="#"
              onSubmit={onSubmitEmail}
              className="h-full grid md:grid-cols-3 text-white md:grid-rows-4 gap-4 md:gap-6"
            >
              <input
                name="name"
                required
                type="text"
                placeholder={languages[language].mailName}
                className="bg-[#1B165E] md:col-span-1 rounded-3xl outline-none focus:ring-2 focus:ring-[var(--secondary)]/50 p-4"
              />
              <input
                name="email"
                required
                type="text"
                placeholder={languages[language].mailEmail}
                className="bg-[#1B165E] md:col-span-1 rounded-3xl outline-none focus:ring-2 focus:ring-[var(--secondary)]/50 p-4"
              />
              <div className="bg-[#1B165E] order-first md:order-none flex items-center justify-center md:row-span-4 rounded-3xl gap-2">
                <span className="text-4xl p-6 text-center font-bold">
                  {languages[language].phrase}
                </span>
              </div>
              <textarea
                name="text"
                required
                className="bg-[#1B165E] resize-none md:col-span-2 md:row-span-2 rounded-3xl outline-none focus:ring-2 focus:ring-[var(--secondary)]/50 p-4"
                placeholder={languages[language].mailMessage}
              />
              <button
                type="submit"
                className="bg-[#1B165E] md:col-span-2 rounded-3xl  font-bold cursor-pointer p-4 hover:bg-[var(--secondary)] transition-colors duration-500 "
              >
                {languages[language].send}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
