'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { BookOpen, Users, Award, GraduationCap, Lightbulb, Target, Code, Database, Brain, Network, Sparkles } from 'lucide-react'

export default function TeachingSection() {
  const { ref, isVisible } = useScrollAnimation()

  const courses = [
    { name: 'Data Structures & Algorithms', level: 'Undergraduate', icon: Code },
    { name: 'Machine Learning', level: 'Graduate', icon: Brain },
    { name: 'Artificial Intelligence', level: 'Graduate', icon: Lightbulb },
    { name: 'Database Management Systems', level: 'Undergraduate', icon: Database },
    { name: 'Social Network Analysis', level: 'Graduate', icon: Network },
    { name: 'Distributed Systems', level: 'Graduate', icon: Target },
  ]

  // const teachingInfo = [
  //   // {
  //   //   icon: BookOpen,
  //   //   title: 'Academic Courses',
  //   //   description: 'Teaching core computer science subjects with emphasis on practical applications and industry relevance',
  //   //   gradient: 'from-blue-500 to-cyan-500',
  //   //   stats: { value: '6+', label: 'Courses' }
  //   // },
  //   // {
  //   //   icon: Users,
  //   //   title: 'Teaching Philosophy',
  //   //   description: 'Interactive learning environment combining theoretical foundations with hands-on projects and real-world case studies',
  //   //   gradient: 'from-purple-500 to-pink-500',
  //   //   stats: { value: '100+', label: 'Students/Year' }
  //   // },
  //   // {
  //   //   icon: Award,
  //   //   title: 'Mentorship Excellence',
  //   //   description: 'Dedicated guidance for student research, career development, and academic growth through personalized attention',
  //   //   gradient: 'from-amber-500 to-orange-500',
  //   //   stats: { value: '10+', label: 'Years' }
  //   // }
  // ]

  // const philosophyPoints = [
  //   { icon: Target, text: 'Bridging theory with practical industry applications' },
  //   { icon: Lightbulb, text: 'Fostering innovative thinking and problem-solving skills' },
  //   { icon: Users, text: 'Collaborative learning through group projects and discussions' },
  //   { icon: GraduationCap, text: 'Preparing students for research excellence and industry careers' },
  // ]

  return (
    <section id="teaching" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Teaching & <span className="gradient-text">Mentorship</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nurturing the next generation of computer science professionals through comprehensive education and research guidance
            </p>
          </div>

          {/* Teaching info cards */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
            {teachingInfo.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-300 hover-lift">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold gradient-text">{section.stats.value}</span>
                        <p className="text-xs text-muted-foreground">{section.stats.label}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {section.description}
                    </p>
                  </Card>
                </div>
              )
            })}
          </div> */}

          {/* Courses taught */}
          <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Courses Taught
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => {
                const Icon = course.icon
                return (
                  <div
                    key={index}
                    className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {course.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{course.level}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Teaching philosophy
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 bg-card rounded-3xl border border-border">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      Teaching Philosophy
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                      Education is not just about transferring knowledge—it's about inspiring curiosity, 
                      fostering critical thinking, and empowering students to become innovators and 
                      problem-solvers who can tackle tomorrow's challenges.
                    </p>
                  </div>
                  
                  <div className="lg:w-1/2 grid sm:grid-cols-2 gap-4">
                    {philosophyPoints.map((point, index) => {
                      const Icon = point.icon
                      return (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm text-foreground/80 leading-snug">{point.text}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
