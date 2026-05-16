import Link from "next/link"
import { ArrowRight, Droplets, BookOpen, HeartPulse, Wheat, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/ui-custom/animations"
import { cn } from "@/lib/utils"

const programs = [
  {
    title: "Water & Sanitation",
    description: "Providing clean water access and hygiene education to rural communities.",
    icon: Droplets,
    color: "text-blue-500",
  },
  {
    title: "Education",
    description: "Building schools and supporting teachers to ensure every child has a chance to learn.",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    title: "Healthcare",
    description: "Mobile clinics and community health programs in remote areas.",
    icon: HeartPulse,
    color: "text-red-500",
  },
  {
    title: "Agriculture",
    description: "Training farmers in sustainable techniques to ensure food security.",
    icon: Wheat,
    color: "text-amber-500",
  },
]

const stats = [
  { label: "Lives Impacted", value: 50000, suffix: "+" },
  { label: "Water Wells", value: 120, suffix: "" },
  { label: "Schools Built", value: 45, suffix: "" },
  { label: "Volunteers", value: 500, suffix: "+" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-secondary/5">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-secondary">
                  Empowering Rural Communities for a Better Future
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Daryeel Charity and Rural Development is dedicated to bringing sustainable change to rural Somalia and East Africa through community-led initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg font-bold">
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-primary/5 rounded-l-full -z-10 hidden lg:block" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold mb-2">
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We take a holistic approach to rural development, addressing the most critical needs of the communities we serve.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program) => (
                <StaggerItem key={program.title}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-none bg-muted/30">
                    <CardHeader>
                      <div className={cn("w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 shadow-sm", program.color)}>
                        <program.icon className="w-6 h-6" />
                      </div>
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm md:text-base leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="text-center mt-12">
              <Button asChild variant="ghost" className="group">
                <Link href="/programs" className="flex items-center">
                  View all programs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission to Serve</h2>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  To improve the quality of life for rural populations by providing access to basic services, promoting sustainable livelihoods, and fostering community resilience.
                </p>
                <div className="space-y-4">
                   <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Immediate emergency relief response</span>
                   </div>
                   <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Community-led development projects</span>
                   </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" className="bg-background/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Together we can make a difference</h3>
                <p className="mb-6 opacity-80">
                  Your support directly funds our field operations and helps us reach those in the most remote areas who are often forgotten.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Link href="/donate">Become a Donor</Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
