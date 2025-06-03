import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import About from "@/components/sections/about"
import FAQs from "@/components/sections/faqs"
import Partners from "@/components/sections/partners"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FAQs />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}
