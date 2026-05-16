import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">About Daryeel Charity</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A non-profit organization dedicated to fostering sustainable development and providing humanitarian assistance to rural communities in East Africa.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn direction="left">
                <div className="bg-primary/5 p-8 rounded-2xl h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower rural communities through access to quality education, healthcare, clean water, and sustainable livelihood opportunities, ensuring no one is left behind in the journey towards development.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="bg-secondary/5 p-8 rounded-2xl h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A resilient and self-reliant rural society where every individual has the opportunity to thrive in a healthy, educated, and prosperous environment.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground text-left">
                  <p>
                    Daryeel Charity and Rural Development was founded with a deep-rooted commitment to address the challenges faced by rural populations in Somalia and the wider East African region. &quot;Daryeel&quot; in Somali means &quot;Care&quot; or &quot;Provision,&quot; reflecting our core philosophy of caring for those in need.
                  </p>
                  <p>
                    Since our inception, we have worked tirelessly to bridge the gap between urban and rural development. We realized that while many organizations focus on major cities, the rural heartlands—where the majority of the population resides—often lack basic infrastructure and services.
                  </p>
                  <p>
                    Today, we are a leading local NGO, working directly with community leaders and local authorities to implement projects that are culturally appropriate, sustainable, and high-impact.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do.</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Integrity", desc: "We maintain the highest ethical standards in all our operations and relationships." },
                { title: "Inclusivity", desc: "We serve all community members regardless of their background, gender, or status." },
                { title: "Accountability", desc: "We are transparent and accountable to our donors and the communities we serve." },
                { title: "Sustainability", desc: "We design projects that have long-term positive effects beyond our immediate intervention." },
              ].map((value) => (
                <StaggerItem key={value.title}>
                  <Card className="border-none shadow-sm h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-lg">{value.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
