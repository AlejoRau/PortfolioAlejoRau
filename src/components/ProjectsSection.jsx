import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "8AM",
    description:
      "Sitio web de la marca 8AM. Diseño moderno, responsive y enfocado en la presentación de producto.",
    image: null, // reemplazar por "/projects/8am.png" cuando tengas el screenshot
    url: "https://8am-page.vercel.app",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Antic",
    description:
      "Plataforma web con dominio propio (antic.lat). Experiencia limpia y orientada a la conversión.",
    image: null, // "/projects/antic.png"
    url: "https://antic.lat",
    tags: ["React", "Web"],
  },
  {
    title: "Entrenemos 8AM",
    description:
      "Aplicación de entrenamiento para la comunidad 8AM. Interfaz dinámica y centrada en el usuario.",
    image: null, // "/projects/entrenemos.png"
    url: "https://entrenemos-8am.vercel.app",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Leamos",
    description:
      "Aplicación de lectura con foco en la experiencia y la accesibilidad del contenido.",
    image: null, // "/projects/leamos.png"
    url: "https://leamos-woad.vercel.app",
    tags: ["React", "Web"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mis <span className="text-primary">Proyectos</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Una selección de proyectos en producción. Hacé click en cualquiera
          para verlo en vivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover gradient-border rounded-xl overflow-hidden text-left flex flex-col bg-card"
            >
              {/* Preview / screenshot */}
              <div className="relative h-48 w-full overflow-hidden bg-primary/5 flex items-center justify-center border-b border-border">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-4xl font-bold text-primary/40">
                    {project.title}
                  </span>
                )}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 flex-grow">
                  {project.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Ver proyecto
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
