import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, CreditCard, Landmark, Coins } from "lucide-react"

const donationOptions = [
  { amount: "$25", description: "Can provide school supplies for one child for a year.", icon: Heart },
  { amount: "$50", description: "Can provide clean water for a family of five for six months.", icon: Heart },
  { amount: "$100", description: "Can fund a mobile health clinic visit to a remote village.", icon: Heart },
  { amount: "Custom", description: "Any amount you choose will directly support our mission.", icon: Heart },
]

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary py-20 text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Cause</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Your generosity empowers communities and saves lives. Every contribution, no matter the size, makes a meaningful difference.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Choose Your Impact</h2>
                <p className="text-muted-foreground">Select an amount to see how your donation helps.</p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {donationOptions.map((option, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full border-2 hover:border-primary transition-colors cursor-pointer group">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <option.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-3xl font-bold">{option.amount}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base">
                        {option.description}
                      </CardDescription>
                      <Button className="w-full mt-6 bg-primary hover:bg-primary/90 font-bold">Select</Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="max-w-4xl mx-auto">
               <FadeIn direction="up">
                 <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border">
                    <h2 className="text-2xl font-bold mb-8 text-center">Payment Methods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       <div className="text-center space-y-4">
                          <div className="mx-auto w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-sm">
                            <CreditCard className="h-8 w-8 text-secondary" />
                          </div>
                          <h3 className="font-bold">Credit/Debit Card</h3>
                          <p className="text-sm text-muted-foreground">Secure online donation via major cards.</p>
                       </div>
                       <div className="text-center space-y-4">
                          <div className="mx-auto w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-sm">
                            <Landmark className="h-8 w-8 text-secondary" />
                          </div>
                          <h3 className="font-bold">Bank Transfer</h3>
                          <p className="text-sm text-muted-foreground">Direct deposit to our organizational accounts.</p>
                       </div>
                       <div className="text-center space-y-4">
                          <div className="mx-auto w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-sm">
                            <Coins className="h-8 w-8 text-secondary" />
                          </div>
                          <h3 className="font-bold">Mobile Money</h3>
                          <p className="text-sm text-muted-foreground">Popular mobile payment options in East Africa.</p>
                       </div>
                    </div>
                    <div className="mt-12 p-6 bg-background/50 rounded-xl border border-dashed border-primary/30 text-center">
                       <p className="text-sm text-muted-foreground">
                         Daryeel Charity and Rural Development is a registered non-profit organization. All donations are tax-deductible as permitted by law.
                       </p>
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
