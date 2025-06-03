import Image from "next/image"

const partners = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120" },
  { name: "GlobalBrand", logo: "/placeholder.svg?height=60&width=120" },
  { name: "StartupHub", logo: "/placeholder.svg?height=60&width=120" },
  { name: "CreativeStudio", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DigitalFirst", logo: "/placeholder.svg?height=60&width=120" },
  { name: "BrandMakers", logo: "/placeholder.svg?height=60&width=120" },
  { name: "ContentPro", logo: "/placeholder.svg?height=60&width=120" },
]

const testimonials = [
  {
    quote:
      "The Art of Content transformed our brand story and helped us connect with our audience in ways we never thought possible.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
  },
  {
    quote: "Their creative approach and strategic thinking have been instrumental in our 300% growth in engagement.",
    author: "Michael Chen",
    position: "CEO",
    company: "InnovateLab",
  },
  {
    quote: "Professional, creative, and results-driven. They truly understand the art of storytelling.",
    author: "Emily Rodriguez",
    position: "Brand Manager",
    company: "GlobalBrand",
  },
]

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-brand-green">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with amazing brands and businesses that trust us to tell their stories and drive their
            success.
          </p>
        </div>

        {/* Partners Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Trusted by Leading Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4 pt-4">"{testimonial.quote}"</blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-brand-orange font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
