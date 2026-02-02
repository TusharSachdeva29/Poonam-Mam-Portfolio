'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Users, GraduationCap, BookMarked, Trophy, Target, Sparkles, ArrowUpRight } from 'lucide-react'

export default function StudentsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const studentCategories = [
    {
      icon: Users,
      title: 'PhD Scholars',
      count: '5+',
      description: 'Guiding doctoral researchers in advancing frontier research in AI, Blockchain, IoT, and Social Network Analysis',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      topics: [
        'Deep Learning for Healthcare Diagnostics',
        'Blockchain Security Frameworks',
        'IoT Architecture Design',
        'Social Network Graph Analytics',
        'Federated Learning Systems'
      ],
      achievement: 'Multiple PhD students with published research'
    },
    {
      icon: GraduationCap,
      title: 'M.Tech Students',
      count: '12+',
      description: 'Mentoring master\'s thesis projects with emphasis on practical implementation, innovation, and research excellence',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      topics: [
        'Machine Learning Applications',
        'Embedded IoT Systems',
        'Cloud Computing Solutions',
        'Big Data Analytics',
        'Network Security'
      ],
      achievement: 'Industry-ready thesis implementations'
    },
    {
      icon: BookMarked,
      title: 'B.Tech Projects',
      count: '20+',
      description: 'Supporting undergraduate final year projects with hands-on guidance, mentorship, and industry exposure',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      topics: [
        'Web & Mobile Applications',
        'IoT Prototypes & Demos',
        'Algorithm Implementations',
        'Data Visualization Tools',
        'Automation Projects'
      ],
      achievement: 'Award-winning student projects'
    }
  ]

  const mentorshipHighlights = [
    { icon: Trophy, value: '37+', label: 'Students Guided', description: 'Across all programs' },
    { icon: Target, value: '15+', label: 'Publications', description: 'With students as co-authors' },
    { icon: GraduationCap, value: '100%', label: 'Completion Rate', description: 'For supervised projects' },
    { icon: ArrowUpRight, value: '90%+', label: 'Placement Rate', description: 'In top companies' },
  ]

  return (
    <section id="students" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mentorship</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Students & <span className="gradient-text">Supervision</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to nurturing the next generation of researchers and technology leaders through dedicated mentorship
            </p>
          </div>

          {/* Highlights bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {mentorshipHighlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center hover-lift">
                  <Icon className="w-7 h-7 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-bold gradient-text mb-1">{item.value}</p>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Student categories */}
          <div className="grid md:grid-cols-3 gap-6">
            {studentCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-300 hover-lift overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Header with icon and count */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-bold gradient-text">{category.count}</span>
                          <p className="text-xs text-muted-foreground">Supervised</p>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Research topics */}
                      <div className="space-y-3 mb-6">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Research Topics
                        </p>
                        {category.topics.map((topic, topicIndex) => (
                          <div 
                            key={topicIndex} 
                            className="flex items-center gap-2 group/item"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                            <span className="text-sm text-foreground/70 group-hover/item:text-foreground transition-colors">{topic}</span>
                          </div>
                        ))}
                      </div>

                      {/* Achievement badge */}
                      <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${category.bgGradient} border border-current/10`}>
                        <p className="text-xs font-medium text-foreground/80 flex items-center gap-2">
                          <Trophy className="w-3.5 h-3.5 text-primary" />
                          {category.achievement}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Call to action */}
          <div className={`mt-16 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative px-8 py-6 bg-card rounded-2xl border border-border">
                <p className="text-lg font-medium text-foreground mb-2">
                  Interested in Research Opportunities?
                </p>
                <p className="text-muted-foreground mb-4">
                  I am always looking for motivated students to join my research group
                </p>
                <a 
                  href="mailto:poonam.rani@nsut.ac.in"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
