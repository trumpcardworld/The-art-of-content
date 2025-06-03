"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black"></div>
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-70">
        <div className="absolute top-[10%] left-[15%] w-[40rem] h-[40rem] bg-brand-green rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-[35rem] h-[35rem] bg-brand-orange rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[15%] left-[35%] w-[30rem] h-[30rem] bg-brand-red rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Geometric Patterns */}
  
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Stories That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-orange to-brand-red">
              Captivate & Convert
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform your brand's voice into compelling content that resonates with your audience and drives meaningful engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('#services')}
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-lg font-semibold group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#about')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-gray-600 hover:bg-white hover:text-brand-green px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
