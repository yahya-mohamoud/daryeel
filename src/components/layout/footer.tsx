import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  about: [
    { name: "Our Mission", href: "/about#mission" },
    { name: "The Team", href: "/about#team" },
    { name: "Financial Transparency", href: "/impact#transparency" },
    { name: "Success Stories", href: "/impact" },
  ],
  programs: [
    { name: "Clean Water Access", href: "/programs#water" },
    { name: "Education for All", href: "/programs#education" },
    { name: "Emergency Healthcare", href: "/programs#healthcare" },
    { name: "Food Security", href: "/programs#agriculture" },
  ],
  support: [
    { name: "Monthly Giving", href: "/donate" },
    { name: "Corporate Partnerships", href: "/contact" },
    { name: "Volunteer Abroad", href: "/contact" },
    { name: "Gift in Your Will", href: "/donate" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#050a08] text-[#f4f1ee] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold">D</div>
              <span className="text-2xl font-black tracking-tighter text-secondary uppercase">Daryeel</span>
            </Link>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md">
              A premium humanitarian organization dedicated to transforming lives in rural Somalia and East Africa through dignity, sustainability, and community-led innovation.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-secondary font-bold uppercase tracking-widest text-xs mb-8">Foundation</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-secondary transition-colors inline-flex items-center group">
                    {link.name}
                    <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-bold uppercase tracking-widest text-xs mb-8">Our Impact</h3>
            <ul className="space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-secondary transition-colors inline-flex items-center group">
                    {link.name}
                    <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-bold uppercase tracking-widest text-xs mb-8">Take Action</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-secondary transition-colors inline-flex items-center group">
                    {link.name}
                    <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-3xl p-8 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="h-10 w-10 text-secondary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Trusted & Verified</h4>
              <p className="text-white/50">94% of all donations go directly to community programs.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold px-10">
              <Link href="/donate">Monthly Support</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white font-bold px-10">
              Donate Once
            </Button>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-sm font-medium">
            © {new Date().getFullYear()} Daryeel Charity & Rural Development. All rights reserved. Registered Charity No. XXXXXX.
          </div>
          <div className="flex items-center space-x-8 text-white/30 text-sm font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
