
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function MaritoMediaPortfolio() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <img src="/logo-marito-media.svg" alt="Marito Media logo" className="h-10 w-auto" />
          <span className="font-bold text-2xl tracking-tight">Marito Media</span>
        </div>
        <Button asChild className="hidden sm:inline-flex">
          <a href="#contacto">Contactar</a>
        </Button>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Contenido que factura en <span className="text-teal-600">48 h</span>.
        </motion.h1>
        <p className="text-lg max-w-xl mx-auto">
          Logos potentes, reels que atrapan, traducciones clínicas y presentaciones killer. Todo rápido,
          sin humo, con el toque criollo desde Barcelona.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="#servicios">Ver servicios</a>
        </Button>
      </section>

      {/* Servicios */}
      <section className="px-6 py-12 bg-white" id="servicios">
        <h2 className="text-3xl font-bold text-center mb-10">Servicios estrella</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Logo Exprés", desc: "3 propuestas · 24 h", price: "35 €" },
            { title: "Reel Social", desc: "≤30 s · 48 h", price: "40 €" },
            { title: "Traducción Médica", desc: "≤500 palabras · 24 h", price: "15 €" },
            { title: "Pitch Básico", desc: "10 diapositivas · 72 h", price: "50 €" },
          ].map((item) => (
            <Card key={item.title} className="hover:-translate-y-1 transition">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm">{item.desc}</p>
                <p className="font-semibold text-2xl">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 py-12 bg-neutral-100" id="portfolio">
        <h2 className="text-3xl font-bold text-center mb-10">Muestras de trabajo</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { src: "https://placehold.co/400x250", caption: "Rebranding Caruso Propiedades" },
            { src: "https://placehold.co/400x250", caption: "Teaser Sitcom 'Eixample 4º1º'" },
            { src: "https://placehold.co/400x250", caption: "Informe oftalmológico traducido" },
          ].map(({ src, caption }) => (
            <Card key={caption} className="overflow-hidden group">
              <img
                src={src}
                alt={caption}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <CardContent className="p-4">
                <p className="text-sm">{caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">¿Charlamos?</h2>
        <p className="mb-8">Escribime y tu proyecto sale con fritas.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:hola@maritomedia.com">
              <Mail className="mr-2 h-5 w-5" /> Email
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/34600000000">
              <Phone className="mr-2 h-5 w-5" /> WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.instagram.com/maritomedia/" target="_blank">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-4 bg-neutral-50 text-xs text-neutral-500">
        © {new Date().getFullYear()} Marito Media. Hecho con mate y código.
      </footer>
    </main>
  );
}
