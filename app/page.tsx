import { UniverseBackground } from "@/components/UniverseBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { ClickEffect } from "@/components/ClickEffect";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Technologies } from "@/components/sections/Technologies";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-[500vh] text-white selection:bg-orange-500/30 cursor-none">
      <Header />
      <CustomCursor />
      <ClickEffect />
      <UniverseBackground />
      
      <div className="relative z-10">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <WhyChooseUs />
        <div id="portfolio"><Portfolio /></div>
        <Technologies />
        <div id="contact"><Contact /></div>
      </div>

      <footer className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#010409]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold tracking-tighter mb-6">
              AVIRA<span className="text-orange-500">TECH</span>
            </div>
            <p className="text-blue-100/50 max-w-sm leading-relaxed">
              We are a premium digital studio building the next generation of web experiences. 
              From complex backend systems to immersive frontend interfaces, we deliver excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-blue-100/50">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-blue-100/50">
              <li><a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/30 text-xs">
            © {new Date().getFullYear()} Avira Tech. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-blue-200/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
