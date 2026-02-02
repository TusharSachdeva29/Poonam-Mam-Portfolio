'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Lightbulb, TrendingUp, Zap, Shield, HeartPulse, Network, Cpu, Globe, Sparkles, IndianRupee, Users, Calendar } from 'lucide-react'

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      title: 'AI-Driven Healthcare Analytics',
      description: 'Developing advanced deep learning models for early disease prediction, patient monitoring, and diagnostic assistance using real-time IoT sensor data from wearable devices.',
      status: 'Active',
      icon: HeartPulse,
      gradient: 'from-rose-500 to-pink-500',
      tags: ['Deep Learning', 'Healthcare', 'IoT', 'Transfer Learning'],
      funding: 'Government Funded',
      duration: '2022-Present'
    },
    {
      title: 'Blockchain-based Supply Chain Security',
      description: 'Implementing decentralized supply chain management systems using blockchain technology for enhanced product traceability, transparency, and fraud prevention.',
      status: 'Active',
      icon: Shield,
      gradient: 'from-amber-500 to-orange-500',
      tags: ['Blockchain', 'Supply Chain', 'Smart Contracts', 'Security'],
      funding: 'Industry Collaboration',
      duration: '2021-Present'
    },
    {
      title: '5G Network Intelligence',
      description: 'Optimizing 5G network performance through intelligent resource allocation, spectrum sensing, and soft computing techniques for next-generation communications.',
      status: 'In Progress',
      icon: Zap,
      gradient: 'from-cyan-500 to-blue-500',
      tags: ['5G', 'Optimization', 'Cognitive Radio', 'Networks'],
      funding: 'Research Grant',
      duration: '2023-Present'
    },
    {
      title: 'Social Network Misinformation Detection',
      description: 'Building AI-powered systems to detect and combat rumor propagation and misinformation spread across social media platforms using NLP and graph analytics.',
      status: 'Active',
      icon: Network,
      gradient: 'from-violet-500 to-purple-500',
      tags: ['NLP', 'Social Networks', 'Fake News', 'Graph Analysis'],
      funding: 'Academic Research',
      duration: '2020-Present'
    },
    {
      title: 'IoT Security Framework',
      description: 'Designing comprehensive security frameworks for IoT ecosystems combining blockchain consensus mechanisms with cryptographic protocols.',
      status: 'Planning',
      icon: Cpu,
      gradient: 'from-emerald-500 to-teal-500',
      tags: ['IoT', 'Security', 'Blockchain', 'Cryptography'],
      funding: 'Upcoming',
      duration: '2024'
    },
    {
      title: 'Federated Learning for Privacy',
      description: 'Developing privacy-preserving machine learning systems using federated learning approaches for sensitive healthcare and financial data.',
      status: 'Planning',
      icon: Globe,
      gradient: 'from-indigo-500 to-blue-500',
      tags: ['Federated Learning', 'Privacy', 'ML', 'Healthcare'],
      funding: 'Proposed',
      duration: '2024'
    }
  ]

  const stats = [
    { icon: IndianRupee, value: '₹ XX Lakhs', label: 'Total Research Funding' },
    { icon: Lightbulb, value: '6+', label: 'Active Projects' },
    { icon: Users, value: '15+', label: 'Research Collaborations' },
    { icon: Calendar, value: '5+', label: 'Years of Projects' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'In Progress': return 'bg-blue-500/10 text-blue-600 border-blue-500/20'
      case 'Planning': return 'bg-amber-500/10 text-amber-600 border-amber-500/20'
      default: return 'bg-primary/10 text-primary border-primary/20'
    }
  }

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Research Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Projects & <span className="gradient-text">Grants</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sponsored research projects and collaborative initiatives addressing real-world technological challenges
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <Card className="relative h-full p-6 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-300 hover-lift overflow-hidden">
                    {/* Status badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <IndianRupee className="w-3 h-3" />
                        {project.funding}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.duration}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Grants summary card */}
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 bg-card rounded-3xl border border-border">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      Sponsored Projects & Research Grants
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Recipient of multiple grants from government agencies, academic institutions, and industry partners 
                      for research in AI, Blockchain, IoT technologies, and their applications in healthcare, security, 
                      and communication systems.
                    </p>
                  </div>
                  
                  <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div 
                          key={index}
                          className="p-5 rounded-2xl bg-muted/50 hover:bg-primary/5 transition-colors text-center"
                        >
                          <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      )
                    })}
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
