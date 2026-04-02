import React, { useState, useEffect } from "react";
import { Container } from "../ui/Layout";
import { siteConfig } from "../../config/site";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { Logo } from "../ui/Logo";
import { Menu, X, Instagram, Facebook } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-bg shadow-lg border-b border-white/5 py-3" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-[10px] font-semibold transition-all tracking-[0.25em] uppercase whitespace-nowrap ${
                    location.pathname === item.path ? "text-primary" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-[#bfa032] text-black px-8 py-3 rounded-sm text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-primary/20 whitespace-nowrap"
              >
                Agendar Agora
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[65px] bg-bg/95 backdrop-blur-xl z-[90] lg:hidden flex flex-col items-center justify-center p-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center space-y-6 w-full mb-10 flex-grow pt-10">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.path}
                    className={`block py-3 transition-colors ${
                      location.pathname === item.path ? "text-primary" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="text-lg sm:text-xl font-bold tracking-[0.25em] uppercase">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-xs flex flex-col items-center space-y-8 pt-8 border-t border-white/10"
            >
              <div className="w-full space-y-4 text-center">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-black">Reserve seu horário</p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-[#bfa032] text-black w-full py-4 rounded-sm text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-lg text-center block"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="flex items-center justify-center gap-6">
                <a href={siteConfig.socials.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors p-3 bg-white/5 rounded-full">
                  <Instagram size={20} />
                </a>
                <a href={siteConfig.socials.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors p-3 bg-white/5 rounded-full">
                  <Facebook size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
