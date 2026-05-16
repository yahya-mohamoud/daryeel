"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui-custom/animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Thank you for your message. Our team will get back to you within 24 hours.")
    reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Premium Header */}
        <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
            <FadeIn direction="up">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-secondary/30">
                 <MessageSquare className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Let&apos;s <span className="text-secondary italic">Connect.</span></h1>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                Whether you want to partner, volunteer, or simply learn more about our work, we&apos;d love to hear from you.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Contact Information */}
              <FadeIn direction="left" className="space-y-16">
                <div>
                  <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 flex items-center">
                    <span className="w-8 h-px bg-primary mr-3" />
                    Reach Out
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                    Our Doors are <span className="text-secondary italic">Open.</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Daryeel operates across multiple hubs to ensure we are always close to the communities we serve. Our headquarters are managed by local experts who can answer detailed inquiries.
                  </p>
                </div>

                <div className="space-y-12">
                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 border border-secondary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">Regional Offices</h4>
                      <p className="text-muted-foreground leading-relaxed">Mogadishu, Somalia (Headquarters)</p>
                      <p className="text-muted-foreground leading-relaxed">Nairobi, Kenya (Regional Hub)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 border border-secondary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">Email Correspondence</h4>
                      <p className="text-muted-foreground leading-relaxed">partnerships@daryeelcharity.org</p>
                      <p className="text-muted-foreground leading-relaxed">info@daryeelcharity.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 border border-secondary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">Direct Lines</h4>
                      <p className="text-muted-foreground leading-relaxed">+252 XX XXX XXXX (Somalia)</p>
                      <p className="text-muted-foreground leading-relaxed">+254 XX XXX XXXX (Kenya)</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn direction="right">
                <div className="bg-white border border-primary/5 rounded-[3rem] p-10 md:p-16 shadow-2xl relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[5rem] -z-10" />

                  <h3 className="text-3xl font-black text-primary mb-10">Send a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-primary/60">Your Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          className={`h-14 rounded-xl border-primary/10 bg-primary/5 focus:ring-secondary/50 ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-primary/60">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register("email")}
                          className={`h-14 rounded-xl border-primary/10 bg-primary/5 focus:ring-secondary/50 ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-sm font-black uppercase tracking-widest text-primary/60">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Partnership Inquiry"
                        {...register("subject")}
                        className={`h-14 rounded-xl border-primary/10 bg-primary/5 focus:ring-secondary/50 ${errors.subject ? "border-red-500" : ""}`}
                      />
                      {errors.subject && <p className="text-xs text-red-500 font-bold">{errors.subject.message}</p>}
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-primary/60">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we work together?"
                        rows={6}
                        {...register("message")}
                        className={`rounded-xl border-primary/10 bg-primary/5 focus:ring-secondary/50 ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && <p className="text-xs text-red-500 font-bold">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-8 text-xl font-black rounded-2xl shadow-xl shadow-primary/20" disabled={isSubmitting}>
                      {isSubmitting ? "Transmitting..." : (
                        <>
                          Send Transmission <Send className="ml-3 h-6 w-6" />
                        </>
                      )}
                    </Button>
                  </form>
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
