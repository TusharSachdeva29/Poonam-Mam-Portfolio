'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Phone, Mail, MapPin, LinkIcon, Linkedin, BookOpen, Globe, Sparkles, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '011 - 25000051',
      href: 'tel:+911125000051',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Office Hours: Mon-Fri, 9AM-5PM'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'poonam.rani@nsut.ac.in',
      href: 'mailto:poonam.rani@nsut.ac.in',
      gradient: 'from-primary to-accent',
      description: 'For academic inquiries'
    },
    {
      icon: MapPin,
      label: 'Office Location',
      value: 'NSUT, Dwarka, New Delhi',
      href: 'https://maps.google.com/?q=NSUT+Delhi',
      gradient: 'from-orange-500 to-red-500',
      description: 'Department of CSE'
    },
    {
      icon: BookOpen,
      label: 'Google Scholar',
      value: 'View Publications',
      href: '#',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Research profile & citations'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: BookOpen, label: 'ORCID', href: '#', color: 'hover:text-green-600' },
    { icon: Globe, label: 'ResearchGate', href: '#', color: 'hover:text-teal-600' },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Contact <span className="gradient-text">Information</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for research collaborations, academic inquiries, or mentorship opportunities
            </p>
          </div>

          {/* Contact cards grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Link 
                  key={index} 
                  href={info.href}
                  className={`group block transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Card className="relative overflow-hidden p-6 hover-lift border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Gradient accent on hover */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${info.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    <div className="flex items-start gap-5">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} p-3.5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {info.description}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Social links card */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10 bg-card rounded-3xl border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      Connect on Professional Networks
                    </h3>
                    <p className="text-muted-foreground">
                      Follow my research journey and academic contributions
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={index}
                          href={link.href}
                          className={`group/icon p-4 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 hover-lift`}
                          aria-label={link.label}
                        >
                          <Icon className={`w-6 h-6 text-foreground/70 ${link.color} transition-colors`} />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Quick contact info */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium text-foreground">poonam.rani@nsut.ac.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="text-sm font-medium text-foreground">011 - 25000051</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="text-sm font-medium text-foreground">NSUT, New Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
