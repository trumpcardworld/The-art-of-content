

import { Palette, PenTool, Megaphone, BarChart3, Video, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: PenTool,
    title: "Content Writing",
    description:
      "Engaging blog posts, articles, and web copy that tell your brand's story and connect with your audience.",
    features: ["SEO Optimized", "Brand Voice", "Research-Based"],
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Visual storytelling through stunning graphics, infographics, and brand materials that capture attention.",
    features: ["Brand Identity", "Visual Assets", "Print & Digital"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that build communities and drive engagement across all platforms.",
    features: ["Content Strategy", "Community Management", "Paid Advertising"],
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Compelling video content from concept to completion, including promotional videos and documentaries.",
    features: ["Scriptwriting", "Production", "Post-Production"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Strategy",
    description: "Data-driven insights and strategic planning to optimize your content performance and ROI.",
    features: ["Performance Tracking", "Strategy Development", "ROI Analysis"],
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions including SEO, PPC, and email marketing campaigns.",
    features: ["SEO Optimization", "PPC Campaigns", "Email Marketing"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of content and marketing services designed to elevate your brand and engage
            your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-green to-brand-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-red rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
