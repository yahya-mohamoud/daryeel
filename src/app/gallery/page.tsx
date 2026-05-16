"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui-custom/animations"
import { Lightbox } from "@/components/ui-custom/lightbox"
import { Search, Filter, Camera } from "lucide-react"

const galleryImages = [
  { title: "Solar Well Project", category: "Water", image: "https://images.unsplash.com/photo-1541810270634-fcebc2dd9691?q=80&w=2070&auto=format&fit=crop", color: "bg-blue-200" },
  { title: "Mobile Health Unit", category: "Healthcare", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", color: "bg-red-200" },
  { title: "Drought-Resistant Crops", category: "Agriculture", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2068&auto=format&fit=crop", color: "bg-amber-200" },
  { title: "Village Primary School", category: "Education", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop", color: "bg-green-200" },
  { title: "Community Water Meeting", category: "Water", image: "https://images.unsplash.com/photo-1524062731223-9127b816da4b?q=80&w=1974&auto=format&fit=crop", color: "bg-blue-300" },
  { title: "Food Distribution", category: "Emergency", image: "https://images.unsplash.com/photo-1489440543286-a69330151c0b?q=80&w=2070&auto=format&fit=crop", color: "bg-purple-200" },
  { title: "Teacher Training Workshop", category: "Education", image: "https://images.unsplash.com/photo-1577896851231-70ef146cc371?q=80&w=2070&auto=format&fit=crop", color: "bg-green-300" },
  { title: "Maternal Health Clinic", category: "Healthcare", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", color: "bg-red-300" },
  { title: "Livestock Vaccination", category: "Agriculture", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2072&auto=format&fit=crop", color: "bg-amber-300" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)
  const [activeCategory, setActiveCategory] = React.useState("All")

  const categories = ["All", "Water", "Agriculture", "Healthcare", "Education", "Emergency"]

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
            <FadeIn direction="up">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-secondary/30">
                 <Camera className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Impact in <span className="text-secondary italic">Action.</span></h1>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                A visual journey through the communities we serve and the projects that are changing lives every day.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
             {/* Filter Bar */}
             <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                   <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20' : 'bg-white text-primary border-primary/10 hover:border-secondary hover:text-secondary'}`}
                   >
                     {cat}
                   </button>
                ))}
             </div>

             <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredImages.map((image, index) => (
                 <StaggerItem key={index}>
                   <div
                    className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-muted cursor-pointer shadow-xl border border-primary/5 hover:border-secondary transition-colors duration-500"
                    onClick={() => setSelectedImage(index)}
                   >
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 text-white translate-y-4 group-hover:translate-y-0">
                        <p className="text-xs font-black uppercase tracking-widest mb-2 text-secondary">{image.category}</p>
                        <h3 className="text-2xl font-black leading-tight">{image.title}</h3>
                        <div className="mt-6 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                           View Project <Filter className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                   </div>
                 </StaggerItem>
               ))}
             </StaggerContainer>
          </div>
        </section>

        <Lightbox
          images={filteredImages}
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
