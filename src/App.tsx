import React from 'react';
import { Phone, MessageCircle, Monitor, LayoutTemplate, Search, Wrench, Briefcase, CheckCircle2, Mail, ExternalLink, Compass } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const topPos = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-amber-500/30 relative">
      {/* Floating Scroll Object */}
      <motion.div 
        className="fixed right-6 md:right-12 z-40 pointer-events-none hidden sm:flex items-center justify-center"
        style={{ 
          top: topPos,
          rotate 
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-amber-400/20 rounded-full blur-xl" />
          <Compass className="w-8 h-8 text-amber-400/80 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
        </div>
      </motion.div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-semibold text-zinc-50 tracking-wide">
            Webvexa<span className="text-amber-400">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#process" className="hover:text-amber-400 transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#0a0a0a] bg-amber-400 hover:bg-amber-300 rounded-full transition-colors">
            Contact Us
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-[#0a0a0a] to-[#0a0a0a] -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-6">Where shops become digital</h2>
              <h1 className="font-serif text-5xl md:text-7xl font-medium text-zinc-50 leading-tight mb-8">
                We build your digital presence —  <span className="italic text-zinc-400">beautifully</span> and affordably.
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Webvexa helps local businesses, shops, and entrepreneurs establish a stunning online home without the complexity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:8149875149" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#0a0a0a] bg-amber-400 hover:bg-amber-300 rounded-full transition-all hover:scale-105">
                  <Phone className="w-5 h-5" />
                  Book a Call
                </a>
                <a href="https://wa.me/918149875149" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-zinc-50 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all hover:scale-105 border border-zinc-700">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50 mb-4">Our Services</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Everything you need to get your business online and thriving.</p>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Monitor, title: "Multi-page Websites", desc: "Comprehensive websites for businesses that need to share more information." },
                { icon: LayoutTemplate, title: "Landing Pages", desc: "High-converting single pages perfect for campaigns or simple presences." },
                { icon: Search, title: "SEO Optimization", desc: "Get found on Google by the customers who are looking for you." },
                { icon: Wrench, title: "Website Maintenance", desc: "We keep your site secure, updated, and running smoothly." },
                { icon: Briefcase, title: "Business Personalized", desc: "Custom features tailored exactly to how your specific shop operates." },
              ].map((service, i) => (
                <motion.div key={i} variants={fadeIn} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-50 mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50 mb-4">How It Works</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">A simple, risk-free process to get your business online.</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2 hidden sm:block" />
              
              <div className="space-y-12">
                {[
                  { step: "01", title: "We build your website first", desc: "You see the design and functionality before paying anything. No risk involved." },
                  { step: "02", title: "Request changes", desc: "We refine and tweak the design until you absolutely love your new digital home." },
                  { step: "03", title: "Choose your plan & go live", desc: "Pick the pricing that works for you, and we launch your website to the world." }
                ].map((item, i) => (
                  <motion.div key={i} {...fadeIn} className={`relative flex flex-col sm:flex-row gap-8 md:gap-16 items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden sm:flex absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-amber-400 items-center justify-center -translate-x-1/2 z-10 font-serif text-amber-400 font-medium">
                      {item.step}
                    </div>
                    <div
                      className={`sm:w-1/2 pl-0 sm:pl-20 md:pl-0 ${
                        i % 2 === 0 ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'
                      }`}
                    >
                      <div className="sm:hidden text-amber-400 font-serif font-medium mb-2">Step {item.step}</div>
                      <h3 className="text-2xl font-medium text-zinc-50 mb-3">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50 mb-4">Simple Pricing</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">A straightforward two-step pricing model for your business.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Build Fee */}
              <motion.div variants={fadeIn} className="relative p-8 rounded-3xl border bg-zinc-900/50 border-zinc-800 flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-full border border-zinc-700 whitespace-nowrap">
                  Step 1: Website Build
                </div>
                <h3 className="text-xl font-medium text-zinc-50 mb-2">One-Time Creation</h3>
                <div className="mb-4">
                  <span className="text-4xl font-serif text-zinc-50">8,000rs</span>
                  <span className="text-zinc-500"> one-time</span>
                </div>
                <p className="text-sm text-zinc-400 mb-8 pb-8 border-b border-zinc-800">Compulsory one-time fee for designing and building your digital home.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Custom Website Design</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">SEO Optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Mobile Responsive</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Full Ownership</span>
                  </li>
                </ul>
              </motion.div>

              {/* Maintenance Fee */}
              <motion.div variants={fadeIn} className="relative p-8 rounded-3xl border bg-zinc-900 border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.1)] flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                  Step 2: Maintenance
                </div>
                <h3 className="text-xl font-medium text-zinc-50 mb-2">Ongoing Updates</h3>
                <div className="mb-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <div>
                    <span className="text-4xl font-serif text-zinc-50">6,000rs</span>
                    <span className="text-zinc-500">/year</span>
                  </div>
                  <span className="text-zinc-500 mb-1">or</span>
                  <div>
                    <span className="text-2xl font-serif text-zinc-50">500rs</span>
                    <span className="text-zinc-500">/month</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 mb-8 pb-8 border-b border-zinc-800">Compulsory ongoing plan to keep your code updated, secure, and running smoothly.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Regular Code Updates</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Security Patches</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Content & Image Changes</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm">Technical Support</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div {...fadeIn} className="mt-12 text-center">
              <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500/10 text-amber-200 text-sm font-medium border border-amber-500/20">
                <CheckCircle2 className="w-4 h-4" />
                Domain ownership stays with you — always.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50 mb-4">Recent Work</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Explore some of the digital homes we've built.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Cafe Brand", url: "https://red-velvat-cafe.vercel.app/", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800&h=600" },
                { title: "Fitness Studio", url: "https://fitness-web-ochre.vercel.app/", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=600" },
                { title: "Restaurant", url: "https://midnight-rose-cafe.vercel.app/", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=600" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-zinc-50 mb-1">{item.title}</h3>
                      <p className="text-sm text-zinc-400">Web Design & Development</p>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-400 text-[#0a0a0a] flex items-center justify-center hover:bg-amber-300 transition-colors shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50">About the Founder</h2>
              <div className="space-y-4 text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                <p>
                  "Hi, I'm <span className="text-zinc-50 font-medium">Rutuja Sonwane</span> ” an engineering graduate passionate about building modern web experiences."
                </p>
                <p>
                  Webvexa was born from a simple idea: <span className="text-amber-200 italic">every shop deserves a digital home.</span> We bridge the gap between traditional local businesses and the modern digital landscape, making it accessible, beautiful, and affordable.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-zinc-50 mb-6">Ready to go digital?</h2>
              <p className="text-xl text-zinc-400 mb-12">Get in touch with us today. No forms, no waiting — ” just direct communication.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <a href="tel:8149875149" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-colors w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-0.5">Call Us</div>
                    <div className="text-zinc-50 font-medium">8149875149</div>
                  </div>
                </a>
                
                <a href="https://wa.me/918149875149" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-colors w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-0.5">WhatsApp</div>
                    <div className="text-zinc-50 font-medium">8149875149</div>
                  </div>
                </a>

                <a href="mailto:hellowebvexa@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-colors w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-0.5">Email</div>
                    <div className="text-zinc-50 font-medium">hellowebvexa@gmail.com</div>
                  </div>
                </a>
              </div>

              <a href="tel:8149875149" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-medium text-[#0a0a0a] bg-amber-400 hover:bg-amber-300 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                <Phone className="w-6 h-6" />
                Book a Call Now
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800/50 text-center">
        <p className="text-zinc-500 text-sm">
          © 2025 Webvexa. Where shops become digital.
        </p>
      </footer>
    </div>
  );
}

