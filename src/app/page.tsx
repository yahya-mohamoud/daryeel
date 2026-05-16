import Link from "next/link"
import { ArrowRight, Droplets, HeartPulse, Wheat, Users, GraduationCap, ShieldCheck, Star, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/ui-custom/animations"
import { cn } from "@/lib/utils"

const programsTeaser = [
  {
    title: "Clean Water Access",
    description: "Installing solar-powered deep boreholes and purification systems to end the water crisis in remote villages.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1541810270634-fcebc2dd9691?q=80&w=2070&auto=format&fit=crop",
    color: "text-blue-500",
  },
  {
    title: "Sustainable Agriculture",
    description: "Empowering pastoralists with climate-smart farming techniques and drought-resistant seeds for food security.",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop",
    color: "text-amber-500",
  },
  {
    title: "Healthcare Equity",
    description: "Deploying mobile clinics and maternal health units to the most unreachable corners of East Africa.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    color: "text-red-500",
  },
]

const stats = [
  { label: "Lives Impacted", value: 125000, suffix: "+" },
  { label: "Water Projects", value: 342, suffix: "" },
  { label: "Schools Built", value: 58, suffix: "" },
  { label: "Medical Aid", value: 85000, suffix: "" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Breathtaking Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1489440543286-a69330151c0b?q=80&w=2070&auto=format&fit=crop"
              alt="Community in Somalia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest">Est. 2008 • Impact First</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
                  Restoring Dignity to <span className="text-secondary">Rural Somalia.</span>
                </h1>
                <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl font-medium">
                  We bridge the gap between emergency relief and sustainable development, empowering remote communities to lead their own transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold h-16 px-10 shadow-xl shadow-black/20">
                    <Link href="/donate">Support Our Mission</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 hover:bg-white/10 text-white text-lg font-bold h-16 px-10 backdrop-blur-sm">
                    <Link href="/impact">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch the Impact
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Premium Stats Strip */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center lg:text-left flex flex-col justify-center">
                  <div className="text-3xl md:text-5xl font-black text-primary mb-1">
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-primary/70 text-sm font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why We Exist - Emotional Narrative */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <FadeIn direction="left" className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1524062731223-9127b816da4b?q=80&w=1974&auto=format&fit=crop"
                    alt="Village elder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs border border-white/20">
                   <p className="text-primary font-bold italic mb-4 leading-relaxed">
                     &quot;Before Daryeel arrived, our village was forgotten. Now, our children have water and a future.&quot;
                   </p>
                   <p className="text-primary/60 text-sm font-bold uppercase tracking-widest">— Abdi, Village Elder</p>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 flex items-center">
                  <span className="w-8 h-px bg-primary mr-3" />
                  Our Calling
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                  Because Every Community Deserves a Path to <span className="text-secondary italic">Prosperity.</span>
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    In the remote heartlands of East Africa, millions of lives are governed by the availability of a single resource: water. Distance, drought, and under-investment have kept rural communities in a cycle of survival for generations.
                  </p>
                  <p>
                    <strong>Daryeel is changing that.</strong> We don&apos;t just provide aid; we build infrastructure. We don&apos;t just solve today&apos;s problems; we train the leaders of tomorrow. Our approach is rooted in the belief that Somali communities already possess the resilience they need—they just need the right tools.
                  </p>
                </div>
                <div className="mt-12">
                   <Button asChild variant="link" className="text-primary font-black p-0 h-auto text-lg group">
                      <Link href="/about" className="flex items-center">
                        Our full story <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                   </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-24 bg-primary text-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <FadeIn direction="up" className="max-w-2xl">
                <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-0">Building the <span className="text-secondary italic">Foundations</span> of Life.</h3>
              </FadeIn>
              <FadeIn direction="up">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-secondary hover:text-primary font-black px-8">
                   <Link href="/programs">View All Programs</Link>
                </Button>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programsTeaser.map((program) => (
                <StaggerItem key={program.title}>
                  <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden relative">
                       <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                          <program.icon className={cn("h-6 w-6", program.color)} />
                       </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h4 className="text-2xl font-bold mb-4">{program.title}</h4>
                      <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                        {program.description}
                      </p>
                      <Link href="/programs" className="inline-flex items-center text-secondary font-bold text-sm uppercase tracking-widest hover:underline group-hover:gap-4 transition-all">
                        Learn Detail <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Global Impact Teaser */}
        <section className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

           <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-20">
                <FadeIn direction="up">
                  <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 italic">Transparency & Trust</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                    Where Your <span className="text-secondary underline decoration-primary/10">Generosity</span> Goes.
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We maintain one of the highest impact-to-cost ratios in the NGO sector. Every dollar is accounted for, and every project is monitored in real-time.
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { icon: ShieldCheck, title: "Verified Efficiency", desc: "94 cents of every dollar reaches the field directly." },
                   { icon: Users, title: "Local Leadership", desc: "All projects are managed by Somali experts and community leaders." },
                   { icon: GraduationCap, title: "Long-term Focus", desc: "We don&apos;t just build; we train communities to maintain projects for decades." }
                 ].map((item, i) => (
                   <FadeIn key={i} delay={i * 0.1} direction="up" className="bg-white p-10 rounded-3xl shadow-xl border border-primary/5 text-center group hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <item.icon className="h-8 w-8 text-primary group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                   </FadeIn>
                 ))}
              </div>
           </div>
        </section>

        {/* Powerful CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Smiling children" className="w-full h-full object-cover" />
           </div>
           <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
              <FadeIn direction="up">
                 <h2 className="text-secondary text-5xl md:text-7xl font-black mb-8 leading-tight">
                   Start a Journey <br className="hidden md:block" /> of <span className="text-white italic">Transformation.</span>
                 </h2>
                 <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                   Your contribution can be the difference between a child walking 5 hours for water or walking 5 minutes to school.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-black text-xl h-20 px-12 shadow-2xl">
                       <Link href="/donate">Donate Now</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white font-black text-xl h-20 px-12">
                       <Link href="/contact">Join as a Volunteer</Link>
                    </Button>
                 </div>
              </FadeIn>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
