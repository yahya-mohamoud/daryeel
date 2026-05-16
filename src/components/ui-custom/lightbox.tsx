"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxProps {
  images: { title: string; category: string; image: string }[]
  currentIndex: number | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  if (currentIndex === null) return null

  const image = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/10"
          onClick={onClose}
        >
          <X className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 hidden md:flex"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
        >
          <ChevronLeft className="h-10 w-10" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 hidden md:flex"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
        >
          <ChevronRight className="h-10 w-10" />
        </Button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-5xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-black/50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80">{image.category}</p>
            <h3 className="text-2xl font-bold">{image.title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
