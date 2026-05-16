import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Target, Eye, ShieldCheck, Heart, Users, History, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Premium Header */}
        <section className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1541810270634-fcebc2dd9691?q=80&w=2070&auto=format&fit=crop" alt="Rural project" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <FadeIn direction="up" className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Rooted in <span className="text-secondary italic">Community.</span> <br />
                Driven by <span className="text-secondary italic">Dignity.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
                Daryeel Charity and Rural Development is a Somali-led non-profit organization established to provide sustainable solutions for the most vulnerable rural populations in East Africa.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Why We Exist - Deep Narrative */}
        <section className="py-24 md:py-32 bg-background" id="mission">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <FadeIn direction="left">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 flex items-center">
                  <span className="w-8 h-px bg-primary mr-3" />
                  Our Genesis
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                  Because Distance Should Never Equal <span className="text-secondary italic">Neglect.</span>
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Daryeel was born in 2008 out of a stark observation: while international aid often reaches the major cities of Somalia, the remote rural regions—where the majority of the population resides—were being left to fend for themselves against drought, disease, and lack of infrastructure.
                  </p>
                  <p>
                    &quot;Daryeel&quot; in Somali means &quot;Care&quot; or &quot;Provision.&quot; We believe that true care isn&apos;t just about handing out food; it&apos;s about providing the tools for self-sufficiency. We saw elders walking half a day for water, children studying under trees without books, and mothers without access to basic maternal care.
                  </p>
                  <p>
                    <strong>Our mission is simple:</strong> To bridge the gap between urban and rural development, ensuring that no Somali, regardless of their location, is denied the basic foundations of a dignified life.
                  </p>
                </div>
              </FadeIn>
              <div className="space-y-8">
                <FadeIn direction="right" className="bg-secondary/10 p-10 rounded-3xl border border-secondary/20">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-4">Our Mission</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To empower rural communities through access to clean water, quality education, and life-saving healthcare, while fostering economic resilience through climate-smart agriculture.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.1} className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-4">Our Vision</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A resilient and self-reliant rural society where every individual has the opportunity to thrive in a healthy, educated, and prosperous environment.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Premium Icons */}
        <section className="py-24 md:py-32 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Foundation</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary">The Values That Guide Us</h3>
            </FadeIn>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Integrity", icon: ShieldCheck, desc: "We maintain absolute transparency with our donors and total honesty with the communities we serve." },
                { title: "Compassion", icon: Heart, desc: "Our work is driven by empathy and a deep-seated commitment to alleviate human suffering." },
                { title: "Inclusion", icon: Users, desc: "We serve all people regardless of clan, gender, or status, with a focus on the most vulnerable." },
                { title: "Sustainability", icon: Globe, desc: "We don't build temporary fixes. We build systems that communities can own and maintain forever." },
              ].map((val) => (
                <StaggerItem key={val.title} className="bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/5 hover:border-secondary transition-colors group">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <val.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-4">{val.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* History Timeline Teaser */}
        <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
           <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
              <FadeIn direction="left" className="lg:w-1/2">
                 <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Our Journey</h2>
                 <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Over a <span className="text-secondary">Decade</span> of Dedicated Service.</h3>
                 <p className="text-xl text-white/70 leading-relaxed mb-10">
                    From our first well in 2008 to serving over 100 villages today, our path has been one of constant learning and deepening impact. We&apos;ve weathered droughts, political shifts, and economic crises—never once leaving the side of the communities who count on us.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                       <div className="text-4xl font-black text-secondary mb-2">15+</div>
                       <div className="text-sm font-bold uppercase tracking-widest text-white/50">Years of Impact</div>
                    </div>
                    <div>
                       <div className="text-4xl font-black text-secondary mb-2">100%</div>
                       <div className="text-sm font-bold uppercase tracking-widest text-white/50">Somali Managed</div>
                    </div>
                 </div>
              </FadeIn>
              <FadeIn direction="right" className="lg:w-1/2 relative">
                 <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop" alt="Agriculture" className="w-full h-full object-cover" />
                 </div>
                 {/* Visual decoration */}
                 <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
              </FadeIn>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
             <FadeIn direction="up">
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">Join the Movement for Rural <span className="text-secondary italic">Empowerment.</span></h3>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                   We are always looking for partners, volunteers, and supporters who believe in the potential of rural Somalia. Together, we can build a future of dignity and prosperity.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black text-lg h-16 px-10">
                      <Link href="/contact">Partner With Us</Link>
                   </Button>
                   <Button asChild variant="outline" size="lg" className="border-primary/20 text-primary font-black text-lg h-16 px-10">
                      <Link href="/donate">Support Our Team</Link>
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
