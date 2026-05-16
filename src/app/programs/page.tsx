import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Droplets, GraduationCap, HeartPulse, Wheat, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programs = [
  {
    id: "water",
    title: "Clean Water & Sanitation (WASH)",
    subtitle: "Ending the daily struggle for survival.",
    description: "In rural Somalia, women and children often walk miles to fetch contaminated water. Our WASH program installs solar-powered deep boreholes, provides household filtration kits, and builds modern latrines in schools and clinics.",
    points: ["Solar-powered deep wells", "Community water committees", "School sanitation blocks", "Hygiene education campaigns"],
    image: "https://images.unsplash.com/photo-1541810270634-fcebc2dd9691?q=80&w=2070&auto=format&fit=crop",
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "agriculture",
    title: "Sustainable Agriculture & Food Security",
    subtitle: "Moving from survival to self-sufficiency.",
    description: "Recurrent droughts threaten the livelihoods of pastoralists. We provide drought-resistant seeds, drip irrigation technology, and training in climate-smart farming to ensure that families can feed themselves year-round.",
    points: ["Greenhouse installations", "Drought-resistant seed bank", "Veterinary support for livestock", "Market access for farmers"],
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop",
    icon: Wheat,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "healthcare",
    title: "Maternal & Primary Healthcare",
    subtitle: "Quality care for the most remote communities.",
    description: "Distance should not be a death sentence. Our mobile clinics bring essential medical services, immunizations, and maternal healthcare to nomadic and rural populations who live hours from the nearest hospital.",
    points: ["Mobile health units", "Midwife training programs", "Malnutrition screening", "Emergency medical transport"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    icon: HeartPulse,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "education",
    title: "Education & Youth Empowerment",
    subtitle: "Equipping the next generation of leaders.",
    description: "Education is the greatest tool for lasting change. We build primary schools, provide learning materials, and offer vocational training for youth to ensure they have the skills to build a prosperous future.",
    points: ["Primary school construction", "Teacher salary support", "Literacy classes for women", "Digital skills for youth"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    icon: GraduationCap,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-white py-24 md:py-32 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
             <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
            <FadeIn direction="up">
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Our <span className="text-secondary">Core</span> Programs</h1>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                We take a holistic approach to rural development, addressing the critical needs of communities through sustainable, community-led interventions.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Dynamic Programs List */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-32">
              {programs.map((program, index) => (
                <div key={program.id} id={program.id} className="scroll-mt-32">
                   <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                         <div className="relative">
                            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                               <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                            </div>
                            <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${program.bgColor} rounded-3xl flex items-center justify-center shadow-xl border border-white/20 hidden md:flex`}>
                               <program.icon className={`h-12 w-12 ${program.color}`} />
                            </div>
                         </div>
                      </FadeIn>

                      <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                         <h2 className={`font-bold uppercase tracking-widest text-sm mb-4 ${program.color}`}>{program.subtitle}</h2>
                         <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">{program.title}</h3>
                         <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            {program.description}
                         </p>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {program.points.map((point) => (
                               <div key={point} className="flex items-center space-x-3 text-primary font-bold">
                                  <CheckCircle2 className={`h-5 w-5 ${program.color} shrink-0`} />
                                  <span>{point}</span>
                               </div>
                            ))}
                         </div>

                         <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black px-8">
                            <Link href="/donate">Support This Program</Link>
                         </Button>
                      </FadeIn>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 bg-secondary/10">
           <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-20">
                 <FadeIn direction="up">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Our Methodology</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-primary mb-8">How We Ensure <span className="text-secondary italic">Lasting</span> Change.</h3>
                    <p className="text-xl text-muted-foreground">
                       We don&apos;t just drop off aid and leave. Our methodology is built on five pillars of sustainable development.
                    </p>
                 </FadeIn>
              </div>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { title: "Community Led", desc: "Communities identify their own needs and manage the resulting projects." },
                   { title: "Somali Expertise", desc: "Our field staff are local experts who understand the cultural and political landscape." },
                   { title: "Data Driven", desc: "We use rigorous assessments and real-time monitoring to maximize impact." },
                   { title: "Solar Focused", desc: "We leverage renewable energy to ensure infrastructure has zero fuel costs." }
                 ].map((item, i) => (
                   <StaggerItem key={i} className="bg-white p-10 rounded-3xl shadow-xl border border-primary/5">
                      <div className="text-3xl font-black text-secondary mb-4">0{i+1}</div>
                      <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                   </StaggerItem>
                 ))}
              </StaggerContainer>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-primary">
           <div className="container mx-auto px-4 lg:px-8 text-center text-white">
              <FadeIn direction="up">
                 <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Be a Part of the <span className="text-secondary italic">Solution.</span></h2>
                 <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Select a program to support or make a general donation to help us reach the villages that need us most.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-black text-xl h-20 px-12">
                       <Link href="/donate">Donate Today</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white font-black text-xl h-20 px-12">
                       <Link href="/contact">Inquire About Partnerships</Link>
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
