'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Brain, Blocks, Wifi, Network, Sparkles, Zap, Shield, Database, TrendingUp, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ResearchAreasSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const areas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      shortDesc: 'Machine Learning & Deep Learning',
      description: 'Pioneering research in machine learning algorithms, deep neural networks, and AI applications in healthcare diagnostics, security systems, and intelligent automation.',
      technologies: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      bgGradient: 'from-violet-500/10 to-fuchsia-500/10',
      publications: 12
    },
    {
      icon: Blocks,
      title: 'Blockchain Technology',
      shortDesc: 'Distributed Ledger & Security',
      description: 'Developing blockchain-based solutions for secure healthcare systems, supply chain management, rumor detection, and cognitive radio networks.',
      technologies: ['Smart Contracts', 'DLT', 'Cryptography', 'Consensus'],
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bgGradient: 'from-amber-500/10 to-red-500/10',
      publications: 8
    },
    {
      icon: Wifi,
      title: 'Internet of Things',
      shortDesc: 'Connected Systems & 5G',
      description: 'Designing IoT architectures for health monitoring, industrial applications, and smart city infrastructure with focus on security and efficiency.',
      technologies: ['Sensors', 'Edge Computing', '5G Networks', 'IIoT'],
      gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
      bgGradient: 'from-cyan-500/10 to-emerald-500/10',
      publications: 10
    },
    {
      icon: Network,
      title: 'Social Network Analysis',
      shortDesc: 'Graph Theory & Community Detection',
      description: 'Analyzing social network structures using fuzzy graphs, community detection algorithms, and relationship prediction models for recommendation systems.',
      technologies: ['Graph Analysis', 'Fuzzy Logic', 'Link Prediction', 'SNA Tools'],
      gradient: 'from-blue-500 via-indigo-500 to-violet-500',
      bgGradient: 'from-blue-500/10 to-violet-500/10',
      publications: 9
    },
    {
      icon: Sparkles,
      title: 'Soft Computing',
      shortDesc: 'Fuzzy Systems & Optimization',
      description: 'Applying fuzzy logic, neural networks, and evolutionary algorithms to solve complex optimization problems and build intelligent decision systems.',
      technologies: ['Fuzzy Logic', 'Genetic Algorithms', 'Neuro-Fuzzy', 'Optimization'],
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      bgGradient: 'from-pink-500/10 to-red-500/10',
      publications: 6
    }
  ]

  return (
    <section id="research" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Research Focus</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Areas of <span className="gradient-text">Research</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Focused on cutting-edge research across emerging technologies and computational methodologies that address real-world challenges
            </p>
          </div>

          {/* Research areas grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {areas.map((area, index) => {
              const Icon = area.icon
              const isHovered = hoveredIndex === index
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${index === 4 ? 'lg:col-start-2' : ''}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${area.gradient} rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-500 overflow-hidden hover-lift">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-bold gradient-text">{area.publications}</span>
                          <p className="text-xs text-muted-foreground">Publications</p>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      
                      {/* Short description */}
                      <p className="text-sm font-medium text-primary/70 mb-4">
                        {area.shortDesc}
                      </p>
                      
                      {/* Full description */}
                      <p className="text-foreground/70 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      
                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent border border-current/20 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Bottom stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Database, value: '35+', label: 'Research Papers', color: 'text-primary' },
              { icon: TrendingUp, value: '5', label: 'Core Domains', color: 'text-accent' },
              { icon: Shield, value: '10+', label: 'Years Research', color: 'text-secondary' },
              { icon: Sparkles, value: '15+', label: 'Collaborations', color: 'text-primary' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 text-center hover-lift">
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
