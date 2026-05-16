import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Heart, Zap, Lock, Globe, CreditCard } from "lucide-react"
import Link from "next/link"

const donationTiers = [
  { amount: "$25", impact: "Can provide a school kit and uniform for one child in a rural village.", label: "Friend" },
  { amount: "$75", impact: "Can provide clean drinking water for three families for an entire year.", label: "Supporter" },
  { amount: "$250", impact: "Can fund a mobile medical team to visit a remote nomadic settlement.", label: "Impact Partner", popular: true },
  { amount: "$1,000", impact: "Can purchase and install a solar-powered water pump for a community well.", label: "Humanitarian Hero" },
]

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Persuasive Header */}
        <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
            <FadeIn direction="up">
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Invest in <span className="text-secondary italic">Human</span> Potential.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-12">
                Your contribution isn&apos;t just a donation—it&apos;s a catalyst for dignity, health, and a future where every rural community can thrive independently.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <div className="flex items-center space-x-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/10">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-bold uppercase tracking-wider">Secure SSL Encryption</span>
                 </div>
                 <div className="flex items-center space-x-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/10">
                    <Heart className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-bold uppercase tracking-wider">94% Impact Efficiency</span>
                 </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Donation Selection */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                 <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Choose Your Impact</h2>
                 <h3 className="text-4xl md:text-5xl font-black text-primary italic underline decoration-secondary decoration-8 underline-offset-8">Select a Giving Tier</h3>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {donationTiers.map((tier, i) => (
                <StaggerItem key={i}>
                  <div className={`h-full bg-white p-10 rounded-[2.5rem] shadow-2xl transition-all duration-300 border relative flex flex-col ${tier.popular ? 'border-secondary ring-4 ring-secondary/10 scale-105 z-10' : 'border-primary/5 hover:border-secondary/50'}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary font-black px-6 py-1 rounded-full text-sm uppercase tracking-widest">
                        Most Impactful
                      </div>
                    )}
                    <div className="text-sm font-black text-primary/40 uppercase tracking-widest mb-4">{tier.label}</div>
                    <div className="text-5xl font-black text-primary mb-8">{tier.amount}</div>
                    <p className="text-muted-foreground leading-relaxed mb-10 flex-grow">
                       {tier.impact}
                    </p>
                    <Button className={`w-full py-8 text-lg font-black rounded-2xl ${tier.popular ? 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20' : 'bg-secondary text-primary hover:bg-secondary/80'}`}>
                       Give Now
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Custom Amount */}
            <FadeIn direction="up" className="max-w-2xl mx-auto bg-primary/5 p-12 rounded-[3rem] border border-primary/10 text-center mb-24">
               <h4 className="text-2xl font-black text-primary mb-4 italic">Prefer a custom amount?</h4>
               <p className="text-muted-foreground mb-8">Every dollar counts toward building a resilient community.</p>
               <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-grow">
                     <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/50 font-black text-xl">$</span>
                     <input
                       type="number"
                       placeholder="Enter amount"
                       className="w-full h-16 pl-12 pr-6 rounded-2xl border border-primary/20 bg-white focus:outline-none focus:ring-4 focus:ring-secondary/30 text-xl font-bold text-primary"
                     />
                  </div>
                  <Button className="h-16 px-10 bg-primary text-white font-black rounded-2xl hover:bg-primary/90">Donate</Button>
               </div>
            </FadeIn>

            {/* Why Monthly Giving? */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-secondary/10 p-12 lg:p-24 rounded-[4rem] border border-secondary/20">
               <FadeIn direction="left">
                  <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">The Power of <br className="hidden md:block" /> <span className="text-secondary">Consistent</span> Giving.</h3>
                  <div className="space-y-8">
                     {[
                       { title: "Predictable Impact", desc: "Monthly donations allow us to plan long-term infrastructure projects with confidence." },
                       { title: "Sustained Support", desc: "You provide a safety net for communities during unexpected droughts or health crises." },
                       { title: "Minimal Admin", desc: "Automated giving reduces our processing costs, so more of your money reaches the field." }
                     ].map((item, i) => (
                       <div key={i} className="flex items-start space-x-5">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-secondary/30">
                             <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                             <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                             <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                  <Button size="lg" className="mt-12 bg-primary text-white font-black px-12 h-16 rounded-2xl shadow-xl shadow-primary/20">Become a Monthly Partner</Button>
               </FadeIn>
               <FadeIn direction="right" className="relative">
                  <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-secondary/20 max-w-xs">
                     <p className="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Testimonial</p>
                     <p className="text-primary/70 font-medium italic">&quot;Being a monthly donor makes me feel like I&apos;m truly part of the village&apos;s growth, not just a one-time observer.&quot;</p>
                     <p className="text-primary font-black mt-4">— Sarah J., Donor</p>
                  </div>
               </FadeIn>
            </div>
          </div>
        </section>

        {/* Global Trust Badges */}
        <section className="py-24 bg-primary text-white">
           <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                 <div className="space-y-4">
                    <Lock className="h-10 w-10 text-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Secure Transactions</h4>
                    <p className="text-white/50 text-sm">Every payment is processed through enterprise-grade 256-bit SSL encryption for your peace of mind.</p>
                 </div>
                 <div className="space-y-4">
                    <Globe className="h-10 w-10 text-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Tax Deductible</h4>
                    <p className="text-white/50 text-sm">Daryeel is a registered charity. You will receive an official tax receipt for every gift immediately via email.</p>
                 </div>
                 <div className="space-y-4">
                    <CreditCard className="h-10 w-10 text-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Global Options</h4>
                    <p className="text-white/50 text-sm">We accept major cards, PayPal, bank transfers, and local mobile money options in East Africa.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
