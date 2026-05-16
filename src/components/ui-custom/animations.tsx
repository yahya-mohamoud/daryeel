"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  fullWidth?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction,
  fullWidth = false,
}: FadeInProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  }

  const initialValues = direction ? directions[direction] : { y: 0, x: 0 }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialValues }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialValues }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={cn(fullWidth ? "w-full" : "", className)}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      if (end === 0) return

      const totalMiliseconds = duration * 1000

      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / 16)) // approx 60fps
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}
