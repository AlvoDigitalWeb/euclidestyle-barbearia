import { motion } from "framer-motion";
import { Shield, AlertTriangle, Users, BookOpen, Database, Share2, Globe, ExternalLink, Scale, MessageSquare, Instagram, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";
import { Container, Section } from "../components/ui/Layout";
import { Heading } from "../components/ui/Heading";
import { Text, Card } from "../components/ui/DataDisplay";

export const PrivacyPolicy = () => {
  return (
    <div className="bg-bg min-h-screen">
      <main className="pt-32 pb-20">
        <Section>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 mb-16 text-center"
            >
              <Text className="text-primary font-bold tracking-[0.3em] uppercase text-xs">MODELO PARA BARBEARIA</Text>
              <Heading variant="h1" className="text-5xl md:text-6xl font-black tracking-tight">POLÍTICA DE <span className="text-gold-gradient">PRIVACIDADE</span></Heading>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Importance Warning */}
              <Card className="bg-primary/5 border-primary/20 p-6 flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div className="space-y-2">
                  <Text className="font-bold text-primary">Aviso Importante</Text>
                  <Text variant="p" className="text-gray-400 text-sm italic">
                    Este é um modelo de política de privacidade para barbearias. Deve ser adaptado à realidade do seu negócio antes da publicação. Recomenda-se validação jurídica para garantir conformidade legal total.
                  </Text>
                </div>
              </Card>

              {/* 1. Responsável */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">1. IDENTIFICAÇÃO DO RESPONSÁVEL</Heading>
                </div>
                <Card className="bg-surface/50 border-white/5 p-8 grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Text className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Empresa/Barbearia</Text>
                      <Text className="text-white font-bold">{siteConfig.name}</Text>
                    </div>
                    <div className="space-y-1">
                      <Text className="text-[10px] text-gray-500 uppercase font-black tracking-widest">NIF/NIPC</Text>
                      <Text className="text-white font-bold">[Inserir NIF]</Text>
                    </div>
                    <div className="space-y-1">
                      <Text className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Morada</Text>
                      <Text className="text-white font-bold leading-relaxed">{siteConfig.address.alhosVedros.street}, {siteConfig.address.alhosVedros.postal}</Text>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Text className="text-[10px] text-gray-500 uppercase font-black tracking-widest">E-mail</Text>
                      <Text className="text-white font-bold">[Inserir E-mail de contacto]</Text>
                    </div>
                    <div className="space-y-1">
                      <Text className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Telefone</Text>
                      <Text className="text-white font-bold">{siteConfig.socials.phone}</Text>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 2. Introdução */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">2. INTRODUÇÃO</Heading>
                </div>
                <Text variant="p" className="text-gray-400 leading-relaxed">
                  Esta política descreve como recolhemos e tratamos os seus dados pessoais. Este documento funciona como um modelo adaptável para barbearias, garantindo transparência sobre o uso de informações de clientes e visitantes.
                </Text>
              </div>

              {/* 3. Dados Recolhidos */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">3. DADOS RECOLHIDOS</Heading>
                </div>
                <div className="space-y-4">
                   <Text variant="p" className="text-gray-400">Recolhemos dados adaptados à realidade do setor de barbearia:</Text>
                   <ul className="space-y-4 ml-2">
                     <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <Text variant="p" className="text-gray-400 text-sm">
                          <span className="text-white font-bold">Dados de Contacto:</span> Nome, telefone e e-mail — utilizados principalmente para gestão de marcações e comunicações diretas.
                        </Text>
                     </li>
                     <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <Text variant="p" className="text-gray-400 text-sm">
                          <span className="text-white font-bold">Dados de Agendamento:</span> Serviço escolhido, data, hora e preferências de atendimento.
                        </Text>
                     </li>
                     <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <Text variant="p" className="text-gray-400 text-sm">
                          <span className="text-white font-bold">Dados de Navegação:</span> Informações recolhidas via cookies (se aplicável), como endereço IP e comportamento no site.
                        </Text>
                     </li>
                   </ul>
                </div>
              </div>

              {/* 4. Finalidade */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">4. FINALIDADE DO TRATAMENTO</Heading>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-surface/30 p-5 space-y-2 border-white/5">
                    <Text className="text-primary font-bold text-xs tracking-widest uppercase">EXECUÇÃO DE CONTRATO</Text>
                    <Text className="text-xs text-gray-500 leading-relaxed">Gestão de marcações, faturação e prestação de serviço de barbearia solicitado.</Text>
                  </Card>
                  <Card className="bg-surface/30 p-5 space-y-2 border-white/5">
                    <Text className="text-primary font-bold text-xs tracking-widest uppercase">CONSENTIMENTO</Text>
                    <Text className="text-xs text-gray-500 leading-relaxed">Utilização de cookies não essenciais, envio de comunicações de marketing ou novidades.</Text>
                  </Card>
                  <Card className="bg-surface/30 p-5 space-y-2 border-white/5">
                    <Text className="text-primary font-bold text-xs tracking-widest uppercase">INTERESSE LEGÍTIMO</Text>
                    <Text className="text-xs text-gray-500 leading-relaxed">Manutenção da segurança do site e melhoria técnica da plataforma.</Text>
                  </Card>
                </div>
              </div>

              {/* 5. Retenção */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">5. RETENÇÃO DE DADOS</Heading>
                </div>
                <Text variant="p" className="text-gray-400 leading-relaxed">
                  Os dados pessoais serão conservados apenas pelo período necessário à gestão de marcações e relação com o cliente, podendo variar conforme o tipo de serviço prestado e obrigações fiscais/legais aplicáveis.
                </Text>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* 6. Partilha */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-primary" />
                    <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">6. PARTILHA DE DADOS</Heading>
                  </div>
                  <Text variant="p" className="text-gray-400 text-sm leading-relaxed">
                    Os dados poderão ser partilhados com ferramentas de gestão de marcações, plataformas de comunicações ou serviços de análise, estritamente para as finalidades descritas.
                  </Text>
                </div>
                {/* 7. Transferências */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">7. TRANSFERÊNCIAS</Heading>
                  </div>
                  <Text variant="p" className="text-gray-400 text-sm leading-relaxed">
                    Caso utilizemos ferramentas externas (ex: alojamento ou email), os dados poderão ser transferidos para fora do EEE, garantindo sempre níveis de proteção adequados.
                  </Text>
                </div>
              </div>

              {/* 8. Plataformas Externas */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">8. PLATAFORMAS EXTERNAS</Heading>
                </div>
                <Card className="bg-surface/50 border-white/5 p-8 space-y-6">
                  <Text variant="p" className="text-gray-400">Este site integra funcionalidades de terceiros comuns ao setor:</Text>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-surface p-4 rounded-sm border border-white/5 flex flex-col items-center gap-2 group hover:border-primary/30 transition-all">
                      <MessageSquare className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                      <Text className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">WhatsApp</Text>
                    </div>
                    <div className="bg-surface p-4 rounded-sm border border-white/5 flex flex-col items-center gap-2 group hover:border-primary/30 transition-all">
                      <Instagram className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                      <Text className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">Instagram</Text>
                    </div>
                    <div className="bg-surface p-4 rounded-sm border border-white/5 flex flex-col items-center gap-2 group hover:border-primary/30 transition-all">
                      <MapPin className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                      <Text className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">Google Maps</Text>
                    </div>
                  </div>
                  <Text className="text-[10px] text-gray-600 italic leading-relaxed text-center">
                    Caso utilize estas plataformas, o tratamento de dados será de responsabilidade dessas entidades, de acordo com as suas próprias políticas de privacidade.
                  </Text>
                </Card>
              </div>

              {/* 9. Direitos */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">9. DIREITOS E RECLAMAÇÕES</Heading>
                </div>
                <Text variant="p" className="text-gray-400">O titular dos dados tem direito a:</Text>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Acesso', 'Retificação', 'Apagamento', 'Limitação', 'Oposição', 'Portabilidade'].map(d => (
                    <div key={d} className="bg-surface/30 p-3 rounded-sm border border-white/5 text-center">
                      <Text className="text-xs font-bold text-gray-500">{d}</Text>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/5 space-y-2">
                  <Text className="text-white font-bold">Comissão Nacional de Proteção de Dados (CNPD)</Text>
                  <Text className="text-xs text-gray-500 leading-relaxed">
                    Tem o direito de apresentar reclamação junto da CNPD caso considere que os seus direitos não estão a ser respeitados.
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
