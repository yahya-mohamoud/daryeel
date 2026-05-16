"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Lightbox } from "@/components/ui-custom/lightbox"

const galleryImages = [
  { title: "Well Construction", category: "Water", color: "bg-blue-200" },
  { title: "Primary School", category: "Education", color: "bg-green-200" },
  { title: "Harvest Day", category: "Agriculture", color: "bg-amber-200" },
  { title: "Mobile Clinic", category: "Healthcare", color: "bg-red-200" },
  { title: "Relief Distribution", category: "Emergency", color: "bg-purple-200" },
  { title: "Community Meeting", category: "Empowerment", color: "bg-teal-200" },
  { title: "Water Pipe Installation", category: "Water", color: "bg-blue-300" },
  { title: "Teacher Training", category: "Education", color: "bg-green-300" },
  { title: "Livestock Vaccination", category: "Agriculture", color: "bg-amber-300" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up" className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Our Gallery</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Visual glimpses of our work in the field and the communities we serve.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
             <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {galleryImages.map((image, index) => (
                 <StaggerItem key={index}>
                   <div
                    className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                   >
                      <div className={`w-full h-full ${image.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                         <span className="text-muted-foreground font-medium opacity-50">Click to view</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary-foreground">{image.category}</p>
                        <h3 className="text-lg font-bold">{image.title}</h3>
                      </div>
                   </div>
                 </StaggerItem>
               ))}
             </StaggerContainer>
          </div>
        </section>

        <Lightbox
          images={galleryImages}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </main>
      <Footer />
    </div>
  )
}
