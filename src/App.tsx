import React, { useState } from 'react';
import { Phone, MessageSquare, DollarSign, ClipboardList, CheckCircle2, Wrench, Menu, X, ArrowRight, Hammer, HardHat, Car, Mail, Globe } from 'lucide-react';
import mechanicImage from './assets/images/regenerated_image_1780110939496.png';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden pt-20">
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      
      <main>
        <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />
        <ServicesSection />
      </main>

      <Footer />

      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}
    </div>
  );
}

function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex-shrink-0 flex items-center gap-3 md:gap-4 group">
            <img 
              src="/logo.png" 
              alt="Breaux & Sons Logo" 
              className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x100/0A66C2/FFF?text=B%26S";
              }} 
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl tracking-[0.05em] leading-none text-gray-100 group-hover:text-white transition-colors">BREAUX & SONS</span>
              <span className="font-sans text-[10px] md:text-xs text-blue-400 font-bold uppercase tracking-widest mt-1">Mechanic Services & Skilled Trades</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center space-x-6 shrink-0">
            <NavLinks />
            <div className="flex items-center gap-2 border border-blue-900/50 bg-blue-950/30 px-4 py-2 rounded">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="font-oswald text-lg font-bold text-gray-200">337-777-1179</span>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-gray-800 p-4">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setMobileMenuOpen(false)} />
            <button className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-bold py-3 rounded transition-colors" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
               <Phone className="w-5 h-5" /> 337-777-1179 / Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile, onClick }: { mobile?: boolean, onClick?: () => void }) {
  const links = ['HOME', 'SERVICES', 'PROJECTS', 'ABOUT', 'FIGHTNET', 'PAYMENTS', 'CONTACT'];
  return (
    <>
      {links.map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          onClick={onClick}
          className={`font-oswald font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide
            ${mobile ? 'text-lg py-2 block border-b border-gray-800' : 'text-sm'}
          `}
        >
          {item}
        </a>
      ))}
    </>
  );
}

function HeroSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section id="home" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 lg:min-h-[80vh] flex flex-col lg:flex-row items-center">
      {/* Background graphic effect (subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {/* We would use a background image here, simulating with geometric shapes for now */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-blue-500 rounded-full blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="w-full lg:w-1/2 z-10 lg:pr-12">
        <h4 className="font-sans text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">
          Trusted. Resourceful. Experienced.
        </h4>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-2 leading-[0.9]">
          BREAUX & SONS
        </h1>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-blue-500 leading-none mb-6">
          MECHANIC SERVICES<br className="hidden md:block"/>
          <span className="text-blue-400">& SKILLED TRADES</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl mb-8 leading-relaxed">
          From heavy-duty mechanic work to commercial carpentry and complex builds — we bring real-world experience, trusted resources, and a commitment to get the job done right.
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <p className="font-oswald text-lg md:text-xl tracking-wide text-gray-200 uppercase">Trusted resources always within reach to make any job successful.</p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <p className="font-oswald text-lg md:text-xl tracking-wide text-gray-200 uppercase">Willing to work within budget.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="tel:3377771179" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded font-oswald text-lg tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
            <Phone className="w-5 h-5" /> CALL 337-777-1179
          </a>
          <button onClick={onOpenContact} className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-gray-800 text-white px-6 py-4 rounded font-oswald text-lg tracking-wide transition-all">
            <MessageSquare className="w-5 h-5 text-gray-400" /> TEXT FOR FAST QUOTE
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-gray-800 text-white px-6 py-4 rounded font-oswald text-lg tracking-wide transition-all">
            <DollarSign className="w-5 h-5 text-gray-400" /> PAY ONLINE
          </button>
          <button onClick={onOpenContact} className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-gray-800 text-white px-6 py-4 rounded font-oswald text-lg tracking-wide transition-all">
            <ClipboardList className="w-5 h-5 text-gray-400" /> REQUEST SERVICE
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative">
        <div className="grid grid-cols-2 gap-3 pb-8">
          {/* Collage simulation */}
          <div className="aspect-[4/3] bg-gray-800 rounded relative overflow-hidden border border-gray-700 col-span-2 group">
             <img src={mechanicImage} alt="Mechanic truck" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>
          <div className="aspect-square bg-gray-800 rounded relative overflow-hidden border border-gray-700 group">
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=600&h=600&fit=crop" alt="Construction scaffolding" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>
          <div className="aspect-square bg-gray-800 rounded relative overflow-hidden border border-gray-700 group">
             <img src="https://images.unsplash.com/photo-1621905252507-b35492d0402e?q=80&w=600&h=600&fit=crop" alt="Carpentry tools" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>
        </div>
        {/* Decorative corner borders */}
        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-500/50"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-500/50"></div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const cards = [
    {
      title: "MECHANIC SERVICES",
      icon: <Car className="w-10 h-10 text-blue-500 mb-4" />,
      items: [
        "Diagnostics & Troubleshooting",
        "Engine Repair & Maintenance",
        "Brake Systems",
        "Suspension & Steering",
        "Electrical Repair",
        "Heavy-Duty & Fleet Service",
        "General Repairs"
      ],
      img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&h=400&fit=crop"
    },
    {
      title: "CARPENTRY & CONSTRUCTION",
      icon: <Hammer className="w-10 h-10 text-blue-500 mb-4" />,
      items: [
        "Commercial Ceilings",
        "Steel Framing",
        "Finish Carpentry",
        "Interior Build-Outs",
        "Remodels",
        "Tenant Improvements",
        "Industrial & Commercial Projects"
      ],
      img: "https://images.unsplash.com/photo-1541888086925-920a061d4b68?q=80&w=600&h=400&fit=crop"
    },
    {
      title: "SKILLED TRADES",
      icon: <Wrench className="w-10 h-10 text-blue-500 mb-4" />,
      items: [
        "General Contracting Support",
        "Repairs & Maintenance",
        "Project Management",
        "Labor Solutions",
        "Consulting & Problem Solving",
        "Multi-Skill Trade Support",
        "Budget-Focused Solutions"
      ],
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&h=400&fit=crop"
    },
    {
      title: "WEB DEVELOPMENT",
      icon: <Globe className="w-10 h-10 text-blue-500 mb-4" />,
      items: [
        "Business Websites",
        "Web Applications",
        "E-commerce Integrations",
        "SEO & Performance",
        "UI/UX Design",
        "Hosting & Maintenance",
        "Technical Consulting"
      ],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="services" className="w-full bg-[#0a0a0a] border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="font-sans text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-2">What We Do</h4>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide text-gray-100">MULTI-TRADE SOLUTIONS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#111] border border-gray-800 rounded p-6 flex flex-col hover:border-gray-600 transition-colors">
               <div className="flex items-center gap-4 border-b border-gray-800 pb-4 mb-4">
                 {card.icon}
                 <h3 className="font-oswald text-2xl tracking-wide text-white leading-none">{card.title}</h3>
               </div>
               
               <ul className="flex-grow space-y-2 mb-6">
                 {card.items.map((item, j) => (
                   <li key={j} className="flex items-start gap-2 text-gray-400 text-sm font-sans">
                     <span className="text-blue-500 text-lg leading-none mt-[-2px]">&bull;</span>
                     {item}
                   </li>
                 ))}
               </ul>

               <div className="mt-auto">
                 <div className="h-32 w-full overflow-hidden rounded border border-gray-800 mb-4 opacity-70 sepia-[0.3]">
                   <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                 </div>
                 <button className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a1a1a] border border-gray-800 hover:bg-gray-800 hover:border-gray-600 text-white font-oswald tracking-widest text-sm rounded transition-colors group">
                    LEARN MORE <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-500" />
            <h2 className="font-oswald text-2xl tracking-wide text-white">SEND INQUIRY</h2>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {status === 'success' ? (
           <div className="p-8 flex flex-col items-center justify-center text-center min-h-[350px]">
             <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-blue-500" />
             </div>
             <h3 className="font-display text-3xl text-white mb-2">INQUIRY SENT</h3>
             <p className="text-gray-400 font-sans">We've received your message and will get back to you shortly.</p>
           </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-sans text-gray-400 uppercase tracking-widest font-bold">First Name</label>
                <input required type="text" className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-sans text-gray-400 uppercase tracking-widest font-bold">Last Name</label>
                <input required type="text" className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-sans text-gray-400 uppercase tracking-widest font-bold">Email Address</label>
                <input required type="email" className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-sans text-gray-400 uppercase tracking-widest font-bold">Phone Number</label>
                <input type="tel" className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans text-gray-400 uppercase tracking-widest font-bold">Service Category</label>
              <select className="w-full bg-[#111] border border-gray-700 rounded p-3 text-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans appearance-none">
                <option>Mechanic Services</option>
                <option>Carpentry & Construction</option>
                <option>Skilled Trades & Labor</option>
                <option>Web Development</option>
                <option>Other / General Inquiry</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans text-gray-400 uppercase tracking-widest font-bold">Message</label>
              <textarea required rows={4} className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-oswald text-xl tracking-widest py-4 rounded shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all flex justify-center items-center gap-2"
              >
                {status === 'submitting' ? (
                  <span className="animate-pulse">SENDING...</span>
                ) : (
                  <>SUBMIT INQUIRY <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <div className="flex items-center justify-center gap-2 mb-6 text-gray-400">
            <span className="font-display tracking-[0.2em] text-xl">BREAUX & SONS</span>
         </div>
         <p className="text-gray-600 font-sans text-sm">&copy; {new Date().getFullYear()} Breaux & Sons. All rights reserved.</p>
      </div>
    </footer>
  );
}

