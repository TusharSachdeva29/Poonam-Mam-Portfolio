'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Download, Mail, ChevronDown, Sparkles, GraduationCap, BookOpen, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { icon: BookOpen, value: '35+', label: 'Publications' },
    { icon: GraduationCap, value: '37+', label: 'Students Guided' },
    { icon: Award, value: '10+', label: 'Research Areas' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Animated blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob opacity-60"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob delay-1000 opacity-60"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob delay-500 opacity-60"></div>
          <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-slow opacity-50"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-[0.03]"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[15%] animate-float delay-200">
          <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
        </div>
        <div className="absolute top-48 right-[20%] animate-float delay-500">
          <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-[25%] animate-float delay-700">
          <div className="w-4 h-4 bg-secondary/30 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-[10%] animate-float-slow">
          <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 left-[10%] animate-float delay-1000">
          <div className="w-3 h-3 bg-accent/40 rounded-full"></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-[8%] w-20 h-20 border border-primary/10 rounded-lg rotate-12 animate-rotate-slow opacity-30"></div>
        <div className="absolute bottom-1/4 right-[8%] w-16 h-16 border border-accent/10 rounded-full animate-pulse-glow opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left content */}
          <div className={`space-y-8 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Institute badge */}
            <div className={`inline-flex items-center gap-2 ${mounted ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  NSUT • Delhi
                </span>
              </div>
            </div>
            
            {/* Name with gradient */}
            <div className={`space-y-3 ${mounted ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                <span className="gradient-text-animated">Dr. Poonam</span>
                <br />
                <span className="text-foreground">Rani</span>
              </h1>
            </div>
            
            {/* Title */}
            <div className={`space-y-2 ${mounted ? 'animate-slide-in-left delay-300' : 'opacity-0'}`}>
              <p className="text-2xl sm:text-3xl font-medium text-primary/90">
                Associate Professor
              </p>
              <p className="text-lg text-muted-foreground font-light">
                Ph.D. (Computer Science & Engineering)
              </p>
            </div>
            
            {/* Description */}
            <p className={`text-lg text-foreground/70 leading-relaxed max-w-lg ${mounted ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
              Pioneering research in <span className="text-primary font-medium">Artificial Intelligence</span>, 
              <span className="text-accent font-medium"> Blockchain</span>, 
              <span className="text-secondary font-medium"> IoT</span>, and 
              <span className="text-primary font-medium"> Social Network Analysis</span>.
              Dedicated to shaping the future of technology through innovation and mentorship.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${mounted ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-primary-foreground gap-2 px-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4 group-hover:animate-bounce-subtle" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group gap-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 px-8"
              >
                <Mail className="w-4 h-4 group-hover:animate-wiggle" />
                Get in Touch
              </Button>
            </div>

            {/* Quick stats */}
            <div className={`grid grid-cols-3 gap-4 pt-8 ${mounted ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={index} 
                    className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-center"
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right side - Profile visual */}
          <div className={`relative flex items-center justify-center ${mounted ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
            {/* Decorative rings */}
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-primary/10 animate-rotate-slow"></div>
            <div className="absolute w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-full border border-accent/10 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
            <div className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full border border-secondary/10 animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
            
            {/* Glowing background */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-full blur-3xl animate-pulse-glow"></div>
            
            {/* Main profile card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-gradient"></div>
              <div className="relative w-72 h-80 md:w-80 md:h-96 bg-gradient-to-br from-card via-card to-muted rounded-3xl border border-primary/20 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                {/* Profile image placeholder */}
                <div className="relative">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-morph">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-7xl md:text-8xl">👩‍🎓</span>
                      </div>
                    </div>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card animate-pulse"></div>
                </div>
                
                {/* Name tag */}
                <div className="mt-6 text-center px-4">
                  <h3 className="text-xl font-display font-bold text-foreground">Dr. Poonam Rani</h3>
                  <p className="text-sm text-muted-foreground mt-1">Associate Professor</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">CSE</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">NSUT</span>
                  </div>
                </div>

                {/* Floating badges around card */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg animate-bounce-subtle">
                  Ph.D.
                </div>
                <div className="absolute -bottom-2 -left-2 px-3 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-lg animate-bounce-subtle delay-500">
                  AI Expert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${mounted ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
        <Link href="#about" className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Explore More</span>
          <div className="p-2 rounded-full border border-border group-hover:border-primary transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  )
}
