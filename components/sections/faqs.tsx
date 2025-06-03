"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "What types of content do you create?",
    answer:
      "We create a wide range of content including blog posts, articles, social media content, video scripts, email campaigns, website copy, infographics, and marketing materials. Our team adapts to your specific needs and industry requirements.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on scope and complexity. Simple blog posts typically take 3-5 business days, while comprehensive content strategies can take 2-4 weeks. We always provide clear timelines during our initial consultation.",
  },
  {
    question: "Do you work with businesses in all industries?",
    answer:
      "Yes, we have experience working across various industries including technology, healthcare, finance, e-commerce, education, and more. Our team researches and adapts to understand the unique requirements of each industry.",
  },
  {
    question: "Can you help with SEO optimization?",
    answer:
      "All our content is created with SEO best practices in mind. We conduct keyword research, optimize meta descriptions, use proper heading structures, and ensure your content ranks well in search engines.",
  },
  {
    question: "What is your content creation process?",
    answer:
      "Our process includes: 1) Discovery and strategy session, 2) Research and planning, 3) Content creation and design, 4) Review and revisions, 5) Final delivery and optimization. We keep you involved throughout the entire process.",
  },
  {
    question: "Do you offer ongoing content management?",
    answer:
      "Yes, we offer monthly content packages and ongoing management services. This includes content calendar planning, regular content creation, social media management, and performance tracking.",
  },
  {
    question: "How do you ensure content aligns with our brand voice?",
    answer:
      "We start every project with a comprehensive brand discovery session to understand your voice, tone, values, and target audience. We also provide style guides and maintain consistency across all content pieces.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing including project-based rates, monthly retainers, and hourly consulting. Pricing depends on project scope, timeline, and complexity. We provide detailed quotes after understanding your specific needs.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="h-5 w-5 text-brand-orange" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
