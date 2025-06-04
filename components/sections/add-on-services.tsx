// import { Camera, Image, Video, PenTool, Edit, Users, Instagram, Palette, Globe } from "lucide-react"

// const addOnServices = [
//   {
//     icon: Camera,
//     iconColor: "text-green-600",
//     bgColor: "bg-green-100",
//     title: "Shot on the Phone Photography/Videography",
//     description: "Start from $250 CAD per shoot. Best for short Instagram Reels, and TikTok videos.",
//   },
//   {
//     icon: Image,
//     iconColor: "text-pink-500",
//     bgColor: "bg-pink-100",
//     title: "Professional Photography",
//     description: "Starts from $500. We work with talented photographers who are the best in their niche industry and are affordable.",
//   },
//   {
//     icon: Video,
//     iconColor: "text-orange-500",
//     bgColor: "bg-orange-100",
//     title: "Professional Videography",
//     description: "Start from $1500. We work with talented videographers & video editors who are the best in their niche industry.",
//   },
//   {
//     icon: PenTool,
//     iconColor: "text-orange-500",
//     bgColor: "bg-orange-100",
//     title: "Topic Research & Feature Writing",
//     description: "45 CAD per hour. (Hire one of our Trainees at $20 CAD per hour.)",
//   },
//   {
//     icon: Edit,
//     iconColor: "text-green-600",
//     bgColor: "bg-green-100",
//     title: "Video Creation & Editing",
//     description: "$45 CAD per hour. Price varies by scale of project. Please contact us via email.",
//   },
//   {
//     icon: Users,
//     iconColor: "text-pink-500",
//     bgColor: "bg-pink-100",
//     title: "Webinar Facilitation & Digital Event Management",
//     description: "$45 CAD per hour. Price varies by scale of project. Please contact us via email.",
//   },
//   {
//     icon: Instagram,
//     iconColor: "text-pink-500",
//     bgColor: "bg-pink-100",
//     title: "Instagram Engagement",
//     description: "We monitor the conversations in your industry and engage with your customers and followers. Starts from $250 CAD per month.",
//   },
//   {
//     icon: Palette,
//     iconColor: "text-orange-500",
//     bgColor: "bg-orange-100",
//     title: "Branding & Logos",
//     description: "Per project needs. Please email to discuss further.",
//   },
//   {
//     icon: Globe,
//     iconColor: "text-green-600",
//     bgColor: "bg-green-100",
//     title: "Website Creation & Development",
//     description: "Per project needs. Please email to discuss further.",
//   },
// ]

// export default function AddOnServices() {
//   const scrollToContact = () => {
//     const element = document.getElementById("addon-services")
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <section 
//       id="addon-services" 
//       className="py-20 bg-gray-50 relative z-10"
//       style={{ marginTop: '0', paddingTop: '120px' }} // Account for fixed navbar
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">ADD ON SERVICES</h2>
//           <div className="flex justify-center mb-6">
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {addOnServices.map((service, index) => {
//             const IconComponent = service.icon
//             return (
//               <div
//                 key={index}
//                 className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 bg-white rounded-lg"
//               >
//                 <div className="p-6 pb-4">
//                   <div className="flex items-start space-x-4">
//                     <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                       <IconComponent className={`h-6 w-6 ${service.iconColor}`} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-gray-900 leading-tight">{service.title}</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-6 pb-6">
//                   <p className="text-gray-600 leading-relaxed">
//                     {service.description}
//                     {service.description.includes("Please contact us via") && (
//                       <button
//                         onClick={scrollToContact}
//                         className="text-red-600 hover:text-red-500 font-medium underline ml-1"
//                       >
//                         email
//                       </button>
//                     )}
//                   </p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }










"use client"

import { Camera, ImageIcon, Video, PenTool, Edit, Users, Instagram, Palette, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const addOnServices = [
  {
    icon: Camera,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    title: "Shot on the Phone Photography/Videography",
    description: "Start from $250 CAD per shoot. Best for short Instagram Reels, and TikTok videos.",
  },
  {
    icon: ImageIcon,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100",
    title: "Professional Photography",
    description:
      "Starts from $500. We work with talented photographers who are the best in their niche industry and are affordable.",
  },
  {
    icon: Video,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Professional Videography",
    description:
      "Start from $1500. We work with talented videographers & video editors who are the best in their niche industry.",
  },
  {
    icon: PenTool,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Topic Research & Feature Writing",
    description: "$45 CAD per hour. (Hire one of our Trainees at $20 CAD per hour.)",
  },
  {
    icon: Edit,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    title: "Video Creation & Editing",
    description: "$45 CAD per hour. Price varies by scale of project. Please contact us via email",
    hasEmail: true,
  },
  {
    icon: Users,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100",
    title: "Webinar Facilitation & Digital Event Management",
    description: "$45 CAD per hour. Price varies by scale of project. Please contact us via email",
    hasEmail: true,
  },
  {
    icon: Instagram,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100",
    title: "Instagram Engagement",
    description:
      "We monitor the conversations in your industry and engage with your customers and followers. Starts from $250 CAD per month.",
  },
  {
    icon: Palette,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Branding & Logos",
    description: "Per project needs. Please email to discuss further.",
    hasEmail: true,
  },
  {
    icon: Globe,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    title: "Website Creation & Development",
    description: "Per project needs. Please email to discuss further.",
    hasEmail: true,
  },
]

export default function AddOnServices() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="add-on-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">ADD ON SERVICES</h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {addOnServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 bg-white h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className={`h-6 w-6 ${service.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-900 leading-tight">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                    {service.hasEmail && (
                      <button
                        onClick={scrollToContact}
                        className="text-red-600 hover:text-red-700 font-medium underline ml-1"
                      >
                        email
                      </button>
                    )}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
