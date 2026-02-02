'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Trophy, Award, Star, Medal, BookOpen, Users, Target, Sparkles } from 'lucide-react'

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const achievements = [
    {
      year: '2023',
      title: 'Best Research Contribution Award',
      description: 'Recognized for outstanding contributions to AI and Blockchain research with significant impact on healthcare and security applications',
      icon: Trophy,
      category: 'Research Excellence',
      gradient: 'from-amber-400 via-yellow-500 to-orange-500',
      highlight: true
    },
    {
      year: '2022',
      title: 'SCIE Publication Excellence',
      description: 'Multiple high-impact publications in SCIE indexed journals including Springer, IEEE, and Elsevier with Impact Factors ranging from 2.5 to 4.5',
      icon: BookOpen,
      category: 'Publications',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      year: '2022',
      title: 'Research Innovation Award',
      description: 'Honored for innovative approach in developing IoT-based health monitoring systems using blockchain technology',
      icon: Award,
      category: 'Innovation',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      year: '2021',
      title: 'Faculty Excellence Grant',
      description: 'Selected for advanced research funding in emerging technologies including 5G, Deep Learning, and Healthcare Analytics',
      icon: Star,
      category: 'Grants & Funding',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      year: '2020',
      title: 'Teaching Excellence Recognition',
      description: 'Honored for exceptional contributions to student mentorship, innovative pedagogy, and academic guidance',
      icon: Users,
      category: 'Education',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      year: '2019',
      title: 'IEEE Conference Best Paper',
      description: 'Awarded best paper at IEEE COMITCon for research on Social Network Analysis using machine learning techniques',
      icon: Medal,
      category: 'Conference Award',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      year: '2018',
      title: 'Industry Collaboration Excellence',
      description: 'Recognized for bridging academia and industry through collaborative research projects and technology transfer',
      icon: Target,
      category: 'Industry Partnership',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  const stats = [
    { value: '7+', label: 'Awards & Honors' },
    { value: '35+', label: 'Publications' },
    { value: '12+', label: 'SCIE Papers' },
    { value: '10+', label: 'Years Excellence' },
  ]

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Animated stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`absolute w-4 h-4 text-amber-400/20 animate-pulse`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 200}ms`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Achievements & <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Awards</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition for excellence in research, teaching, and contributions to the academic community
            </p>
          </div>

          {/* Stats bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="group p-5 rounded-2xl bg-card border border-border hover:border-amber-500/30 transition-all duration-300 text-center hover-lift">
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-primary/50 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                const isLeft = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {/* Mobile/Tablet layout */}
                    <div className="md:hidden">
                      <div className="flex gap-4">
                        {/* Timeline dot */}
                        <div className="flex-shrink-0 relative">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg ${achievement.highlight ? 'ring-4 ring-amber-500/30' : ''}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          {index !== achievements.length - 1 && (
                            <div className="absolute top-14 left-1/2 w-0.5 h-20 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-grow pb-8">
                          <Card className={`p-5 border-border hover:border-primary/30 transition-all duration-300 ${achievement.highlight ? 'ring-2 ring-amber-500/20 bg-amber-500/5' : ''}`}>
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${achievement.gradient} text-white`}>
                                {achievement.year}
                              </span>
                              <span className="text-xs text-muted-foreground">{achievement.category}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              {achievement.description}
                            </p>
                          </Card>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout - alternating sides */}
                    <div className={`hidden md:flex items-center gap-8 ${isLeft ? '' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right' : 'text-left'}`}>
                        <Card className={`group p-6 border-border hover:border-primary/30 transition-all duration-300 hover-lift ${achievement.highlight ? 'ring-2 ring-amber-500/20 bg-amber-500/5' : ''}`}>
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : ''}`}>
                            {isLeft && <span className="text-xs text-muted-foreground">{achievement.category}</span>}
                            <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${achievement.gradient} text-white`}>
                              {achievement.year}
                            </span>
                            {!isLeft && <span className="text-xs text-muted-foreground">{achievement.category}</span>}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h3>
                          <p className="text-foreground/70 leading-relaxed">
                            {achievement.description}
                          </p>
                        </Card>
                      </div>

                      {/* Center dot */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-xl z-10 relative ${achievement.highlight ? 'ring-4 ring-amber-500/30 animate-pulse-glow' : ''}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="w-[calc(50%-2rem)]"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Future achievements note */}
          <div className={`mt-16 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-full border border-border">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Continuously striving for excellence in research and education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
