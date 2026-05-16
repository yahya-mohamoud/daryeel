import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, Counter } from "@/components/ui-custom/animations"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const impactStories = [
  {
    name: "Amina Mohamed",
    location: "Lower Shabelle",
    story: "Before Daryeel built the well in our village, I had to walk 5 kilometers every morning to fetch water. Now, my children are healthy, and I have time to attend the adult literacy classes organized by the charity.",
    program: "WASH & Education",
  },
  {
    name: "Guled Hassan",
    location: "Gedo Region",
    story: "The agricultural training and solar-powered irrigation system have transformed my farm. I can now grow vegetables even during the dry season, providing for my family and selling the surplus at the local market.",
    program: "Agriculture & Livelihoods",
  },
  {
    name: "Dr. Sahra Ali",
    location: "Mobile Clinic Physician",
    story: "Working with Daryeel allows me to reach patients who haven't seen a doctor in years. We've significantly reduced child mortality in the villages we visit through regular immunizations and health education.",
    program: "Healthcare",
  },
]

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up" className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Measuring success through the lives transformed and the communities strengthened.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real people, real change. These stories represent thousands of individuals impacted by our programs.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStories.map((story, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                  <Card className="h-full border-none shadow-md bg-muted/20 relative overflow-hidden">
                    <CardContent className="pt-12 pb-8 px-8">
                      <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
                      <p className="italic text-muted-foreground mb-8 relative z-10 leading-relaxed">
                        &quot;{story.story}&quot;
                      </p>
                      <div>
                        <p className="font-bold text-secondary">{story.name}</p>
                        <p className="text-sm text-muted-foreground">{story.location}</p>
                        <div className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {story.program}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary"><Counter value={85} />%</div>
                <h3 className="font-bold text-lg">Clean Water Access</h3>
                <p className="text-sm text-muted-foreground">Increase in water access in our target districts.</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary"><Counter value={12000} />+</div>
                <h3 className="font-bold text-lg">Students Enrolled</h3>
                <p className="text-sm text-muted-foreground">Children and adults attending our schools and classes.</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary"><Counter value={40} />%</div>
                <h3 className="font-bold text-lg">Yield Increase</h3>
                <p className="text-sm text-muted-foreground">Average crop yield increase for supported farmers.</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary"><Counter value={300} />+</div>
                <h3 className="font-bold text-lg">Jobs Created</h3>
                <p className="text-sm text-muted-foreground">Local employment through our projects and initiatives.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
