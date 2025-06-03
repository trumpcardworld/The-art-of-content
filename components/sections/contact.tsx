"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@theartofcontent.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Creative Street, Design City, DC 12345",
    description: "Come say hello at our office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 8am-6pm",
    description: "Weekend support available",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-brand-red">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your content strategy? Let's start a conversation about how we can help your brand tell
            its story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-brand-orange font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 text-lg font-semibold group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
