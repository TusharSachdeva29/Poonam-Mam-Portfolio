'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { FileText, ExternalLink, BookOpen, Users, Calendar, Award, ChevronDown, Sparkles } from 'lucide-react'

export default function PublicationsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('journals')
  const [showAll, setShowAll] = useState(false)

  const publications = {
    journals: [
      {
        title: 'Sociocentric SNA on Fuzzy Graph Social Network Model',
        authors: 'Rani P., Tayal D., Bhatia M.P.S.',
        venue: 'SOFT Computing, Springer',
        year: 2022,
        doi: 'http://doi.org/10.1007/s00500-022-06961-9',
        impact: 'SCIE, IF-3.732',
        tags: ['Social Networks', 'Fuzzy Logic']
      },
      {
        title: 'Blockchain-based rumor detection approach for COVID-19',
        authors: 'Rani P., Jain V., Shokeen J., Balyan A.',
        venue: 'Journal of Ambient Intelligence Humanized Computing, Springer',
        year: 2022,
        doi: 'https://doi.org/10.1007/s12652-022-03900-2',
        impact: 'SCIE, IF-3.662',
        tags: ['Blockchain', 'COVID-19', 'AI']
      },
      {
        title: 'Blockchain-based IoT enabled health monitoring system',
        authors: 'Rani P., Preeti K., Jain V., Shokeen J., Sweety',
        venue: 'The Journal of Supercomputing, Springer',
        year: 2022,
        doi: 'https://doi.org/10.1007/s11227-022-04584-3',
        impact: 'SCIE, IF-2.557',
        tags: ['Blockchain', 'IoT', 'Healthcare']
      },
      {
        title: 'A survey of tools for social network analysis',
        authors: 'Rani P., Shokeen J.',
        venue: 'Int J Web Eng Technol (Inderscience)',
        year: 2021,
        doi: 'https://dx.doi.org/10.1504/IJWET.2021.119879',
        impact: 'Scopus',
        tags: ['SNA', 'Survey', 'Tools']
      },
      {
        title: 'Conical SNA using Fuzzy K-Medoids based on user experience',
        authors: 'Rani P., Bhatia M.P.S., Tayal D.K.',
        venue: 'Int. J. Electr. Eng. Educ.',
        year: 2021,
        doi: '10.1177/0020720920988490',
        impact: 'Scopus',
        tags: ['SNA', 'Fuzzy Logic', 'K-Medoids']
      },
      {
        title: 'Enhanced Crow Search Inspired Feature Selection for Intrusion Detection Based Wireless Network',
        authors: 'Khanna A., Rani P., Garg P., Singh P.K., Khamparia A.',
        venue: 'Wirel. Pers. Commun.',
        year: 2021,
        doi: 'https://doi.org/10.1007/s11277-021-08766-9',
        impact: 'SCIE, IF-2.017',
        tags: ['Intrusion Detection', 'Feature Selection', 'Wireless']
      },
      {
        title: 'Blockchain-Based Security Enhancement and Spectrum Sensing in Cognitive Radio Network',
        authors: 'Khanna A., Rani P., Tariq H.S., Gupta D., Kansal V., Rodrigues J.J.P.C.',
        venue: 'Wirel. Pers. Commun.',
        year: 2021,
        doi: 'https://doi.org/10.1007/s11277-021-08729-0',
        impact: 'SCIE, IF-2.017',
        tags: ['Blockchain', 'Cognitive Radio', 'Security']
      },
      {
        title: 'Optimal deep learning approaches and healthcare big data analytics toward 5G',
        authors: 'Pustokhin D., Pustokin I., Rani P. et al.',
        venue: 'Comput. Electr. Eng.',
        year: 2021,
        doi: 'https://doi.org/10.1016/j.compeleceng.2021.107376',
        impact: 'SCIE, IF-4.152',
        tags: ['Deep Learning', 'Healthcare', '5G']
      },
      {
        title: 'An Adaptive Neuro Fuzzy Modelling and Prediction System for Diagnosis of COVID-19',
        authors: 'Khamparia A., Jain R., Rani P., Gupta D., Khanna A.',
        venue: 'Appl. Comput. Math.',
        year: 2021,
        doi: '',
        impact: 'SCIE, IF-3.898',
        tags: ['Neuro-Fuzzy', 'COVID-19', 'Diagnosis']
      },
      {
        title: 'Health Things DL Framework for Detection and Classification of Skin Cancer using Transfer Learning',
        authors: 'Khamparia A., Singh P.K., Rani P., Samanta D., Khanna A., Bhushan B.',
        venue: 'Trans. Emerg. Telecommun. Technol.',
        year: 2021,
        doi: '10.1002/ett.3963',
        impact: 'SCIE, IF-3.310',
        tags: ['Deep Learning', 'Healthcare', 'Transfer Learning']
      },
      {
        title: 'Heterogeneous load balancing clustering protocol for Wireless Sensor Networks',
        authors: 'Kaur S., Naaz R., Khamparia A., Rani P., Gupta D.',
        venue: 'Cogn. Syst. Res.',
        year: 2021,
        doi: 'https://doi.org/10.1016/j.cogsys.2021.07.00',
        impact: 'SCIE, IF-4.541',
        tags: ['WSN', 'Load Balancing', 'Clustering']
      },
      {
        title: 'Optimal deep learning based image compression technique for data transmission on IIoT',
        authors: 'Sujitha B., Parvathy V.S., Lydia E.L., Rani P., Polkowski Z., Shankar K.',
        venue: 'Trans. Emerg. Telecommun. Technol.',
        year: 2021,
        doi: 'https://doi.org/10.1002/ett.3976',
        impact: 'SCIE, IF-3.310',
        tags: ['Deep Learning', 'IIoT', 'Compression']
      },
      {
        title: 'A New Dimensionality Reduction technique for K-Means Clustering performance Improvement',
        authors: 'Rani P., Madan N.',
        venue: 'Mukt Shabd Journal',
        year: 2020,
        doi: '09.0014.MSJ.2020.V9I5.0086781.10357',
        impact: 'UGC Care',
        tags: ['K-Means', 'Dimensionality Reduction', 'Clustering']
      },
      {
        title: 'An astute SNA with OWA Operator to Compare the Social Networks',
        authors: 'Rani P., Bhatia M.P.S., Tayal D.K.',
        venue: 'I.J. Information Technol. Comput. Sci.',
        year: 2018,
        doi: '10.5815/ijitcs.2018.03.08',
        impact: 'Indexed',
        tags: ['SNA', 'OWA Operator', 'Comparison']
      },
      {
        title: 'Different Aspects, Challenges, and Impact of Social Networks with Mathematical Analysis of Teaching Learning',
        authors: 'Rani P., Tayal D.K., Bhatia M.P.S.',
        venue: 'JARDCS',
        year: 2018,
        doi: '',
        impact: 'Scopus',
        tags: ['Social Networks', 'Education', 'Analysis']
      },
      {
        title: 'Predicting Facebook Group Relationship',
        authors: 'Rani P., Bhatia M.P.S., Tayal D.K.',
        venue: 'Int. J. Innov. Technol. Explor. Eng. (IJITEE)',
        year: 2019,
        doi: '10.35940/ijitee.K1804.0981119',
        impact: 'Scopus',
        tags: ['Facebook', 'Prediction', 'Social Networks']
      },
      {
        title: 'Recommendations Using Modified K-Means Clustering and Voting Theory',
        authors: 'Rani P., Shokeen J., Mullick D.',
        venue: 'Int. J. Comput. Sci. Mob. Comput.',
        year: 2017,
        doi: '',
        impact: 'Indexed',
        tags: ['Recommendations', 'K-Means', 'Voting']
      },
      {
        title: 'Social Recommender System Using Skyline Query and Reciprocal Scoring Technique',
        authors: 'Rani P., Gupta A.K.',
        venue: 'IOSR J. Eng.',
        year: 2017,
        doi: '',
        impact: 'Indexed',
        tags: ['Recommender System', 'Skyline Query', 'Social']
      }
    ],
    conferences: [
      {
        title: 'Stock Price Prediction Using Reinforcement Learning',
        authors: 'Rani P., Shokeen J., Singh A., Singh A., Kumar S., Raghuvanshi N.',
        venue: 'International Conference on Innovative Computing and Communications, Springer',
        year: 2022,
        doi: 'https://doi.org/10.1007/978-981-16-2597-8_6',
        impact: 'Springer AISC',
        tags: ['Reinforcement Learning', 'Stock Prediction', 'AI']
      },
      {
        title: 'Credit Card Fraud Detection Using Blockchain and Simulated Annealing k-Means Algorithm',
        authors: 'Rani P., Shokeen J., Agarwal A., Bhatghare A., Majithia A., Malhotra J.',
        venue: 'International Conference on Innovative Computing and Communications, Springer',
        year: 2022,
        doi: 'https://doi.org/10.1007/978-981-16-3071-2_5',
        impact: 'Springer AISC',
        tags: ['Blockchain', 'Fraud Detection', 'K-Means']
      },
      {
        title: 'Improving Accuracy of Deep Learning-Based Compression by Introducing Perceptual Loss in Industrial IoT',
        authors: 'Rani P., Jain V., Saif M., Mugloo S.H., Hirna M., Jain S.',
        venue: 'International Conference on Innovative Computing and Communications, Springer',
        year: 2022,
        doi: 'https://doi.org/10.1007/978-981-16-3071-2_6',
        impact: 'Springer AISC',
        tags: ['Deep Learning', 'IIoT', 'Compression']
      },
      {
        title: 'A Secured Supply Chain Network for Route Optimization and Product Traceability using Blockchain in IoT',
        authors: 'Rani P., Jain V., Joshi M., Khandelwal M.',
        venue: 'International Conference on Data Analytics and Management',
        year: 2020,
        doi: '',
        impact: 'Conference',
        tags: ['Supply Chain', 'Blockchain', 'IoT']
      },
      {
        title: 'A Probabilistic Routing-based Secure Approach for Opportunistic IoT Network using Blockchain',
        authors: 'Rani P., Balyan A., Jain V., Sangwan D., Pal P., Shokeen J.',
        venue: '17th India Council International Conference (INDICON), IEEE',
        year: 2020,
        doi: '',
        impact: 'IEEE Xplore',
        tags: ['IoT', 'Blockchain', 'Routing']
      },
      {
        title: 'A Secure Epidemic Routing using Blockchain in Opportunistic Internet of Things',
        authors: 'Rani P., Singh P.P., Balyan A., Shokeen J., Jain V.',
        venue: 'International Conference on Data Analytics and Management',
        year: 2020,
        doi: '',
        impact: 'Conference',
        tags: ['Blockchain', 'IoT', 'Epidemic Routing']
      },
      {
        title: 'A trust-based approach to extract social relationships for recommendation',
        authors: 'Shokeen J., Rana C., Rani P.',
        venue: 'International Conference on Data Analytics and Management',
        year: 2020,
        doi: '',
        impact: 'Conference',
        tags: ['Trust', 'Social Networks', 'Recommendation']
      },
      {
        title: 'SNA using User Experience',
        authors: 'Rani P., Tayal D.K., Bhatia M.P.S.',
        venue: 'IEEE International Conference on Machine Learning, Big Data, Cloud and Parallel Computing (COMITCon)',
        year: 2019,
        doi: '',
        impact: 'IEEE',
        tags: ['SNA', 'User Experience', 'Machine Learning']
      },
      {
        title: 'Designing a Project Leader Recommender System using Twitter Feed Analysis',
        authors: 'Rani P., Shokeen J.',
        venue: 'IEEE COMITCon 2019',
        year: 2019,
        doi: '10.1109/COMITCon.2019.8862261',
        impact: 'IEEE',
        tags: ['Recommender System', 'Twitter', 'NLP']
      },
      {
        title: 'A Comparative study of Qualitative and Quantitative SNA',
        authors: 'Rani P., Bhatia M.P.S., Tayal D.K.',
        venue: '6th International Conference on Computing for Sustainable Global Development, IEEE',
        year: 2019,
        doi: '',
        impact: 'IEEE',
        tags: ['SNA', 'Comparative Study', 'Analysis']
      },
      {
        title: 'Closeness Centrality using Communication aspect',
        authors: 'Rani P.',
        venue: '6th International Conference on Computing for Sustainable Global Development, IEEE',
        year: 2019,
        doi: '',
        impact: 'IEEE',
        tags: ['Centrality', 'Communication', 'SNA']
      },
      {
        title: 'A soft-computing based approach to Group relationship analysis using weighted arithmetic and geometric mean',
        authors: 'Rani P., Bhatia M.P.S., Tayal D.K.',
        venue: 'ICICC-2018, Springer',
        year: 2018,
        doi: '10.1007/978-981-13-2354-6_19',
        impact: 'Springer',
        tags: ['Soft Computing', 'Group Analysis', 'Social Networks']
      },
      {
        title: 'Qualitative SNA Methodology',
        authors: 'Rani P., Bhatia M.P.S., Tayal D.K.',
        venue: '5th International Conference on Computing for Sustainable Global Development, IEEE',
        year: 2018,
        doi: '',
        impact: 'IEEE',
        tags: ['SNA', 'Methodology', 'Qualitative']
      },
      {
        title: 'Issues and Challenges in Link Prediction for Social Networks',
        authors: 'Rani P., Shokeen J.',
        venue: '11th INDIACom Conference',
        year: 2017,
        doi: '',
        impact: 'Conference',
        tags: ['Link Prediction', 'Social Networks', 'Challenges']
      },
      {
        title: 'A Survey on Label Propagation based Techniques for Community Detection in Social Networks',
        authors: 'Rani P., Shokeen J.',
        venue: '5th International Conference on Computing for Sustainable Global Development',
        year: 2018,
        doi: '',
        impact: 'Conference',
        tags: ['Community Detection', 'Label Propagation', 'Survey']
      }
    ],
    nationalJournals: [],
    nationalConferences: []
  }

  const tabs = [
    { id: 'journals', label: 'International Journals', count: publications.journals.length, icon: BookOpen },
    { id: 'conferences', label: 'International Conferences', count: publications.conferences.length, icon: Users },
    { id: 'nationalJournals', label: 'National Journals', count: publications.nationalJournals.length, icon: FileText },
    { id: 'nationalConferences', label: 'National Conferences', count: publications.nationalConferences.length, icon: Award },
  ]

  const currentPublications = publications[activeTab as keyof typeof publications]
  const displayedPublications = showAll ? currentPublications : currentPublications.slice(0, 6)

  return (
    <section id="publications" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Research Output</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              <span className="gradient-text">Publications</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Peer-reviewed research contributions in prestigious international journals and conferences
            </p>
          </div>

          {/* Stats bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <p className="text-3xl font-bold gradient-text">{publications.journals.length + publications.conferences.length}</p>
              <p className="text-sm text-muted-foreground">Total Publications</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <p className="text-3xl font-bold text-primary">{publications.journals.length}</p>
              <p className="text-sm text-muted-foreground">Journal Papers</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <p className="text-3xl font-bold text-accent">{publications.conferences.length}</p>
              <p className="text-sm text-muted-foreground">Conference Papers</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <p className="text-3xl font-bold text-secondary">12+</p>
              <p className="text-sm text-muted-foreground">SCIE Indexed</p>
            </div>
          </div>

          {/* Tabs */}
          <div className={`mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap gap-2 p-2 bg-muted/50 rounded-2xl border border-border">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setShowAll(false); }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-card text-primary shadow-lg border border-primary/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[1]}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      activeTab === tab.id ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            {currentPublications.length === 0 ? (
              <div className={`text-center py-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">Publications in this category will be added soon.</p>
              </div>
            ) : (
              <>
                {displayedPublications.map((pub, index) => (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden p-6 hover-lift border-border/50 hover:border-primary/30 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    {/* Hover accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                    
                    <div className="flex gap-5">
                      {/* Number indicator */}
                      <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                          {pub.title}
                        </h3>
                        
                        {/* Authors */}
                        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{pub.authors}</span>
                        </p>
                        
                        {/* Venue and Year */}
                        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                          <span className="flex items-center gap-1.5 text-foreground/70">
                            <BookOpen className="w-4 h-4 text-primary" />
                            {pub.venue}
                          </span>
                          <span className="flex items-center gap-1.5 text-foreground/70">
                            <Calendar className="w-4 h-4 text-accent" />
                            {pub.year}
                          </span>
                          {pub.impact && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {pub.impact}
                            </Badge>
                          )}
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* DOI Link */}
                      {pub.doi && (
                        <div className="flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80 hover:bg-primary/10"
                            asChild
                          >
                            <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
                
                {/* Show more button */}
                {currentPublications.length > 6 && (
                  <div className="text-center pt-8">
                    <Button
                      variant="outline"
                      onClick={() => setShowAll(!showAll)}
                      className="gap-2 px-8 border-primary/30 hover:border-primary hover:bg-primary/5"
                    >
                      {showAll ? 'Show Less' : `Show All ${currentPublications.length} Publications`}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
