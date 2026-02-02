'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Quote, Target, Lightbulb, Heart, Sparkles } from 'lucide-react'

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  const highlights = [
    {
      icon: Target,
      title: 'Research Excellence',
      description: 'Pioneering research in AI, Blockchain, IoT, and Social Networks with 35+ publications in prestigious journals',
      gradient: 'from-primary to-accent'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Bridging theoretical knowledge with real-world applications through cutting-edge technology solutions',
      gradient: 'from-accent to-secondary'
    },
    {
      icon: Heart,
      title: 'Student Mentorship',
      description: 'Dedicated to nurturing the next generation of researchers and technology leaders',
      gradient: 'from-secondary to-primary'
    }
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Passionate About <span className="gradient-text">Research</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto"></div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
            {/* Left - Quote card */}
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative p-8 bg-card rounded-2xl border border-border shadow-xl">
                  <Quote className="w-12 h-12 text-primary/30 mb-4" />
                  <p className="text-xl font-display italic text-foreground/90 leading-relaxed mb-6">
                    "Research is the art of seeing what everyone else has seen and thinking what no one else has thought."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                      👩‍🎓
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Dr. Poonam Rani</p>
                      <p className="text-sm text-muted-foreground">Associate Professor, NSUT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - About text */}
            <div className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Dr. Poonam Rani is an accomplished <span className="text-primary font-semibold">Associate Professor</span> in the Department of Computer Science & Engineering at <span className="text-accent font-semibold">Netaji Subhas University of Technology (NSUT)</span>, New Delhi. With a Ph.D. in Computer Science & Engineering, she brings over a decade of expertise and research excellence to her academic pursuits.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Her research interests span across the most dynamic and transformative areas of modern computing, including <span className="font-medium text-primary">Artificial Intelligence</span>, <span className="font-medium text-accent">Blockchain Technology</span>, <span className="font-medium text-secondary">Internet of Things (IoT)</span>, <span className="font-medium text-primary">Social Network Analysis</span>, and <span className="font-medium text-accent">Soft Computing</span>.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Through her work, she aims to bridge the gap between theoretical research and practical applications, contributing to solutions that address real-world challenges in healthcare, security, and communication systems.
              </p>

              {/* Stats inline */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-foreground/70">35+ Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse delay-300"></div>
                  <span className="text-sm text-foreground/70">5 Research Domains</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse delay-600"></div>
                  <span className="text-sm text-foreground/70">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, var(--primary), var(--accent))` }}></div>
                  <div className="relative h-full p-8 bg-card rounded-2xl border border-border hover:border-transparent transition-colors duration-300 hover-lift">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Teaching Philosophy */}
          <div className={`mt-16 p-8 md:p-12 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl border border-border transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Teaching Philosophy</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Education is not just about transferring knowledge—it's about inspiring curiosity, fostering critical thinking, and empowering students to become innovators and problem-solvers. Through a blend of rigorous academics, hands-on research, and industry collaboration, I strive to prepare students for the challenges of tomorrow's technology landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
