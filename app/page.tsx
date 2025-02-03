import { Terminal, Code2, Briefcase, User, Mail, Github, Linkedin, Database, Smartphone, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-muted">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="logo-ring">
                <Cpu className="w-10 h-10 text-primary animate-float" />
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="nav-link text-foreground hover:text-primary">About</a>
              <a href="#stack" className="nav-link text-foreground hover:text-primary">Stack</a>
              <a href="#projects" className="nav-link text-foreground hover:text-primary">Projects</a>
              <a href="#contact" className="nav-link text-foreground hover:text-primary">Contact</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Get in Touch
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen relative flex flex-col items-center justify-center space-y-8 px-4">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <Terminal className="w-16 h-16 text-primary animate-float" />
        <h1 className="text-4xl md:text-6xl font-bold text-center neon-text">
          Salman Mustansar
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center gradient-text">
          Full Stack Developer & Tech Innovator
        </p>
        <div className="flex gap-4">
          <Button variant="outline" className="neon-border">
            View Projects
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-20 px-4 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur tech-card">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Web Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  HTML
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Express.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Node.js
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur tech-card">
              <Smartphone className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Android Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  C++
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Kotlin
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur tech-card">
              <Database className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Databases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Firebase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  MongoDB
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur tech-card">
              <User className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
              <p className="text-muted-foreground">
                A passionate developer with expertise in modern web technologies.
                I transform ideas into elegant, efficient digital solutions.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur tech-card">
              <Code2 className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in building cutting-edge web applications with a focus
                on performance, user experience, and clean code.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
                description: "A modern e-commerce platform built with Next.js and Supabase."
              },
              {
                title: "AI Dashboard",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                description: "Real-time analytics dashboard with AI-powered insights."
              },
              {
                title: "Social Media App",
                image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
                description: "Feature-rich social platform with real-time messaging."
              },
              {
                title: "Portfolio Generator",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                description: "Dynamic portfolio generator with customizable themes."
              }
            ].map((project, index) => (
              <Card key={index} className="group relative overflow-hidden tech-card">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/5 relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Get In Touch</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:smustansar45@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/saluop" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="www.linkedin.com/in/salman-mustansar-7345262ab" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur max-w-md mx-auto tech-card">
            <p className="text-muted-foreground">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out if you'd like to work together!
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-muted">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Salman Mustansar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}