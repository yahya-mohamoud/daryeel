import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, HeartPulse, Wheat, Zap, ShieldCheck, GraduationCap } from "lucide-react"

const detailedPrograms = [
  {
    title: "Water, Sanitation & Hygiene (WASH)",
    description: "Our WASH program focuses on providing sustainable access to safe drinking water and improving sanitation facilities. We drill boreholes, construct shallow wells, and implement solar-powered water systems in remote villages. Additionally, we conduct hygiene promotion campaigns to prevent waterborne diseases.",
    icon: Droplets,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Quality Education",
    description: "We believe education is the key to breaking the cycle of poverty. Daryeel supports primary and secondary education by constructing classrooms, providing learning materials, and training local teachers. We also offer adult literacy programs and vocational training for youth.",
    icon: GraduationCap,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    title: "Healthcare Services",
    description: "In areas where medical facilities are non-existent, we deploy mobile health clinics to provide essential care. Our focus includes maternal and child health, immunization programs, and nutritional support for malnourished children. We also support local health posts with essential medicines.",
    icon: HeartPulse,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    title: "Agriculture & Livelihoods",
    description: "We empower rural farmers through modern agricultural training, provision of high-quality seeds, and tools. Our livestock support programs help pastoralists manage their herds more effectively, especially during droughts. We promote climate-smart agriculture to ensure long-term food security.",
    icon: Wheat,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    title: "Emergency Relief",
    description: "When disaster strikes—be it drought, floods, or conflict—Daryeel is on the front lines. We provide immediate assistance including food aid, non-food items (NFI), and emergency shelter to displaced families and those most affected by crises.",
    icon: Zap,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    title: "Community Empowerment",
    description: "We work with local communities to strengthen their capacity for self-governance and development. This includes forming community development committees, supporting women's groups, and facilitating local conflict resolution mechanisms.",
    icon: ShieldCheck,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Our Programs</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive solutions tailored to the unique needs of rural communities in Somalia and East Africa.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedPrograms.map((program) => (
                <StaggerItem key={program.title}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${program.color}`}>
                        <program.icon className="w-7 h-7" />
                      </div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up" className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our approach is rooted in community participation. We don&apos;t just bring solutions; we work with communities to identify their problems and co-create sustainable answers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">01</div>
                  <h3 className="font-bold">Assessment</h3>
                  <p className="text-sm text-muted-foreground">Detailed needs assessment with local stakeholders.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">02</div>
                  <h3 className="font-bold">Execution</h3>
                  <p className="text-sm text-muted-foreground">Professional implementation with community involvement.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">03</div>
                  <h3 className="font-bold">Monitoring</h3>
                  <p className="text-sm text-muted-foreground">Long-term tracking to ensure sustainability and impact.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
