"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "FAQs", href: "#faqs" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Content Writing",
  "Creative Design",
  "Social Media Marketing",
  "Video Production",
  "Analytics & Strategy",
  "Digital Marketing",
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="The Art of Content"
                width={200}
                height={50}
                className="h-10 w-auto mb-4 "
              />
              <p className="text-gray-300 leading-relaxed">
                Transforming brands through compelling storytelling and strategic content creation that drives
                meaningful engagement and results.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-300"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-brand-orange transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">hello@theartofcontent.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Creative Street
                    <br />
                    Design City, DC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 The Art of Content. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
