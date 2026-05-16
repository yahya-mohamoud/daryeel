import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, Counter } from "@/components/ui-custom/animations"
import { Quote, CheckCircle2, TrendingUp, Users, Droplets, HeartPulse } from "lucide-react"

const successStories = [
  {
    name: "Amina Mohamed",
    location: "Lower Shabelle",
    story: "Before the solar-powered well was built, Amina spent 6 hours every day fetching water from a contaminated river. Today, that time is spent running her small vegetable stand and ensuring her children attend school.",
    impact: "6 hours saved daily • Improved Health",
    image: "https://images.unsplash.com/photo-1541810270634-fcebc2dd9691?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Guled Hassan",
    location: "Gedo Region",
    story: "As a pastoralist, Guled lost half his herd during the 2017 drought. Through Daryeel's climate-smart agriculture program, he now uses drip irrigation to grow fodder, keeping his livestock healthy even when the rains fail.",
    impact: "300% Income Increase",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop",
  },
]

const metrics = [
  { label: "Clean Water Access", value: 85, suffix: "%", icon: Droplets, desc: "Increase in safe water availability in target districts." },
  { label: "Lives Impacted", value: 125000, suffix: "+", icon: Users, desc: "People who have benefited from our multi-sectoral aid." },
  { label: "Maternal Mortality", value: 40, suffix: "% Reduction", icon: HeartPulse, desc: "Drop in maternal deaths where our clinics operate." },
  { label: "Food Security", value: 65, suffix: "%", icon: TrendingUp, desc: "More households now meeting their daily nutritional needs." },
]

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Impact Header */}
        <section className="bg-secondary text-primary py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <FadeIn direction="up" className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Our <span className="italic">Measurable</span> Impact.
              </h1>
              <p className="text-xl font-medium leading-relaxed max-w-2xl text-primary/80">
                Transparency is at the heart of our mission. We track every project with rigorous data to ensure your support delivers maximum transformation.
              </p>
            </FadeIn>
          </div>
          {/* Decorative background mark */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-5">
             <img src="https://images.unsplash.com/photo-1541810270634-fcebc2dd9691?q=80&w=2070&auto=format&fit=crop" alt="Water project" className="w-[800px] h-[800px] rounded-full object-cover" />
          </div>
        </section>

        {/* Big Numbers Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up" className="bg-white p-10 rounded-[2rem] shadow-2xl shadow-primary/5 border border-primary/5 text-center">
                   <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <metric.icon className="h-8 w-8 text-primary" />
                   </div>
                   <div className="text-4xl font-black text-primary mb-2">
                      <Counter value={metric.value} />{metric.suffix}
                   </div>
                   <h4 className="text-lg font-bold text-primary mb-4">{metric.label}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{metric.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stories of Change - Deep Narrative */}
        <section className="py-24 md:py-32 bg-primary text-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
             <div className="text-center mb-20">
                <FadeIn direction="up">
                   <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 italic">The Human Face of Data</h2>
                   <h3 className="text-4xl md:text-6xl font-black">Stories of <span className="text-secondary italic">Resilience.</span></h3>
                </FadeIn>
             </div>

             <div className="space-y-16">
                {successStories.map((story, index) => (
                  <FadeIn key={index} direction={index % 2 === 0 ? "left" : "right"}>
                    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                       <div className="lg:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative group">
                          <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                          <div className="absolute bottom-6 left-6 right-6">
                             <div className="inline-block px-4 py-2 bg-secondary text-primary font-black rounded-xl shadow-xl">
                                {story.impact}
                             </div>
                          </div>
                       </div>
                       <div className="lg:w-1/2">
                          <Quote className="h-12 w-12 text-secondary/30 mb-6" />
                          <p className="text-2xl font-medium leading-relaxed italic mb-8 text-white/90">
                             &quot;{story.story}&quot;
                          </p>
                          <div>
                             <h4 className="text-2xl font-black text-secondary">{story.name}</h4>
                             <p className="text-white/50 font-bold uppercase tracking-widest text-sm">{story.location}</p>
                          </div>
                       </div>
                    </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </section>

        {/* Financial Transparency Strip */}
        <section className="py-24 bg-background" id="transparency">
           <div className="container mx-auto px-4 lg:px-8">
              <div className="bg-secondary/10 rounded-[3rem] p-12 lg:p-20 border border-secondary/20 flex flex-col lg:flex-row items-center gap-16">
                 <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="text-7xl font-black text-primary mb-2">94%</div>
                    <div className="text-xl font-bold text-primary uppercase tracking-tighter mb-4">Direct Program Funding</div>
                    <p className="text-muted-foreground leading-relaxed">
                       We are committed to extreme efficiency. For every dollar donated, 94 cents goes directly into field operations.
                    </p>
                 </div>
                 <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: "Quarterly Audits", desc: "Our finances are audited by international third-party firms." },
                      { title: "Project Tracking", desc: "Donors receive GPS coordinates and photo updates for infrastructure projects." },
                      { title: "Low Admin Cost", desc: "Executive salaries are kept modest to maximize community impact." },
                      { title: "Local Procurement", desc: "90% of materials are sourced from Somali businesses to boost the local economy." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                         <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                         <div>
                            <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
