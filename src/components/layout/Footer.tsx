import { MapPin, Instagram, Phone, Clock, Facebook, MessageCircle } from 'lucide-react';
import { siteConfig } from "../../config/site";
import { Container } from "../ui/Layout";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/DataDisplay";
import { Logo } from "../ui/Logo";
import { Link } from "react-router";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <footer className="bg-secondary border-t border-white/5 pt-10 md:pt-16">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Logo hideIcon={true} className="p-0 m-0" />
            <Text variant="p" className="text-gray-400 max-w-[220px] leading-relaxed !text-[14px] mt-5">
              {siteConfig.description}
            </Text>
            <div className="flex gap-4 pt-1">
              <a
                href={siteConfig.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <Heading variant="h4" className="text-white text-[20px] md:text-[24px] uppercase tracking-widest font-black opacity-100 leading-none mt-1">Navegação</Heading>
            <ul className="space-y-3 pt-5">
              {[
                { label: 'Início', path: '/' },
                { label: 'Serviços', path: '/servicos' },
                { label: 'Sobre Nós', path: '/sobre' },
                { label: 'Contato', path: '/contato' }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 w-fit block text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="space-y-6">
            <Heading variant="h4" className="text-white text-[20px] md:text-[24px] uppercase tracking-widest font-black opacity-100 leading-none mt-1">Contactos</Heading>
            <div className="space-y-5">
              {/* Address 1 */}
              <a
                href={siteConfig.address.alhosVedros.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group pt-5 hover:text-primary transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0 opacity-80" />
                <div className="space-y-0.5">
                  <Text variant="p" className="!text-[14px] uppercase font-black text-primary tracking-widest leading-none">ALHOS VEDROS</Text>
                  <Text variant="p" className="!text-[14px] text-gray-400 leading-snug font-medium group-hover:text-gray-200 transition-colors">
                    {siteConfig.address.alhosVedros.street}<br />
                    {siteConfig.address.alhosVedros.postal}
                  </Text>
                </div>
              </a>

              {/* Address 2 */}
              <a
                href={siteConfig.address.barreiro.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:text-primary transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0 opacity-80" />
                <div className="space-y-0.5">
                  <Text variant="p" className="!text-[14px] uppercase font-black text-primary tracking-widest leading-none">BARREIRO</Text>
                  <Text variant="p" className="!text-[14px] text-gray-400 leading-snug font-medium group-hover:text-gray-200 transition-colors">
                    {siteConfig.address.barreiro.street}<br />
                    {siteConfig.address.barreiro.postal}
                  </Text>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${siteConfig.socials.phone}`}
                className="flex items-center gap-4 group pt-2 border-t border-white/5 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-primary opacity-80" />
                <Text variant="p" className="text-gray-300 font-bold !text-[15px] group-hover:text-primary transition-colors">{siteConfig.socials.phone}</Text>
              </a>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div className="space-y-6">
            <Heading variant="h4" className="text-white text-[20px] md:text-[24px] uppercase tracking-widest font-black opacity-100 leading-none mt-1">Horário</Heading>
            <div className="space-y-4 pt-5">
              {siteConfig.hours.map((item, index) => (
                <div key={index} className="space-y-1 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <Text variant="p" className="text-gray-400 flex items-center gap-2 !text-[14px] font-medium">
                      <Clock className="w-4 h-4 text-primary/40" />
                      {item.day}
                    </Text>
                    <Text variant="p" className={item.time === 'Fechado' ? "text-primary/50 italic !text-[14px]" : "text-white font-bold !text-[14px]"}>
                      {item.time}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center text-center">
          <Text variant="muted" className="text-[12px]">
            © {currentYear} <span className="text-primary font-semibold">{siteConfig.name}</span>. Todos os direitos reservados.
          </Text>
          <div className="flex gap-4 uppercase tracking-[0.2em] text-[12px] font-bold text-gray-600">
            <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('show-cookie-banner'))}
              className="hover:text-primary transition-colors cursor-pointer uppercase tracking-[0.2em] font-bold"
            >
              Gerir Cookies
            </button>
          </div>
          <Text variant="muted" className="text-[12px]">
            Desenvolvido por <a href="https://alvodigitalweb.pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white font-bold transition-all">Alvo Digital Web</a>
          </Text>
        </div>
      </Container>
    </footer>
  );
};
