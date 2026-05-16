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
import { Mail, Phone, MapPin, Send } from "lucide-react"

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
    alert("Thank you for your message. We will get back to you soon!")
    reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Contact Us</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions or want to get involved? We&apos;d love to hear from you. Reach out to our team today.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <FadeIn direction="left">
                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-muted-foreground mb-8">
                      Our team is here to help and answer any questions you might have. We look forward to hearing from you.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Our Offices</h3>
                        <p className="text-muted-foreground">Mogadishu, Somalia</p>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                        <p className="text-muted-foreground">info@daryeelcharity.org</p>
                        <p className="text-muted-foreground">support@daryeelcharity.org</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                        <p className="text-muted-foreground">+252 XX XXX XXXX (Somalia)</p>
                        <p className="text-muted-foreground">+254 XX XXX XXXX (Kenya)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn direction="right">
                <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          {...register("name")}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        {...register("subject")}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more..."
                        rows={6}
                        {...register("message")}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-bold" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
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
