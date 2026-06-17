import { Briefcase, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador Full Stack Junior
            </h3>

            <p className="text-muted-foreground">
              Me apasiona transformar ideas en productos reales. Trabajo
              principalmente con React, JavaScript y Node.js, y disfruto tanto
              del diseño de interfaces como de la lógica del lado del servidor.
            </p>

            <p className="text-muted-foreground">
              Tengo varios proyectos en producción y aprendo rápido. Busco mi
              próxima oportunidad para sumar a un equipo, crecer como
              profesional y aportar desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Hablemos
              </a>

              <a
                href="/cv-alejo-rau.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Frontend</h4>
                  <p className="text-muted-foreground">
                    Interfaces responsivas y accesibles con React, Tailwind y
                    las mejores prácticas modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Backend</h4>
                  <p className="text-muted-foreground">
                    APIs y lógica de servidor con Node.js, manejo de bases de
                    datos e integración de servicios.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Proyectos reales</h4>
                  <p className="text-muted-foreground">
                    Llevo proyectos desde la idea hasta el deploy en producción,
                    cuidando cada detalle del proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
