import { Users, Target, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import about_img from "../../public/about-us.png"

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our heart into every project, ensuring authentic and compelling content.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every piece of content is strategically crafted to achieve your business objectives.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work closely with our clients as partners in their success journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we create.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-brand-green">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are storytellers, strategists, and creative minds dedicated to transforming your brand's narrative into
            powerful content that drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between brands and their audiences, The Art of Content has been
                at the forefront of creative storytelling for over five years. We believe that every brand has a unique
                story worth telling.
              </p>
              <p>
                Our journey began with a simple mission: to help businesses communicate their value through compelling,
                authentic content that resonates with their target audience and drives meaningful engagement.
              </p>
              <p>
                Today, we're proud to have helped over 500 clients across various industries tell their stories, build
                their brands, and achieve their business goals through the power of strategic content creation.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Image src={about_img} alt="about-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-brand-red to-brand-orange rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
