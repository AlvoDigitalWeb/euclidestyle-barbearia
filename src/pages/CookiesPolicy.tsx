import { motion } from "framer-motion";
import { Cookie, Shield, BarChart3, Target, CheckCircle2, AlertTriangle, Settings, HelpCircle, BookOpen, Database } from "lucide-react";
import { siteConfig } from "../config/site";
import { Container, Section } from "../components/ui/Layout";
import { Heading } from "../components/ui/Heading";
import { Text, Card } from "../components/ui/DataDisplay";
import { Button } from "../components/ui/Button";

// Custom event to open the modal from anywhere
export const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
};

const CookiesPolicy = () => {
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
              <Text className="text-primary font-bold tracking-[0.3em] uppercase text-xs">TRANSPARÊNCIA E CONTROLO</Text>
              <Heading variant="h1" className="text-5xl md:text-6xl font-black tracking-tight">POLÍTICA DE <span className="text-gold-gradient">COOKIES</span></Heading>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Importance Warning */}
              <Card className="bg-primary/5 border-primary/20 p-6 flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div className="space-y-2">
                  <Text className="font-bold text-primary">Aviso Importante</Text>
                  <Text variant="p" className="text-gray-400 text-sm italic">
                    Este é um modelo de política de cookies para barbearias. Deve ser adaptado à realidade do seu negócio antes da publicação. Recomenda-se validação jurídica para garantir conformidade legal total.
                  </Text>
                </div>
              </Card>

              {/* Responsável Bar */}
              <div className="bg-surface/30 p-4 border border-white/5 rounded-sm text-[10px] uppercase tracking-widest text-center flex justify-center gap-6">
                 <div className="flex gap-2">
                    <span className="text-gray-600 font-black">Responsável pelo Site:</span>
                    <span className="text-white font-bold">{siteConfig.name}</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-gray-600 font-black">E-mail:</span>
                    <span className="text-white font-bold">[Inserir E-mail de contacto]</span>
                 </div>
              </div>

              {/* 1. O que são */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">1. O QUE SÃO COOKIES?</Heading>
                </div>
                <Text variant="p" className="text-gray-400 leading-relaxed">
                  Cookies são pequenos ficheiros de texto que são armazenados no seu computador ou dispositivo móvel quando visita um website. Eles ajudam o site a reconhecer o seu dispositivo e a lembrar informações sobre a sua visita, tornando a sua navegação mais eficiente e personalizada.
                </Text>
              </div>

              {/* 2. Uso de Cookies */}
              <Card className="p-8 space-y-4 bg-primary/5 border-primary/20 border-l-4 border-l-primary">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <Heading variant="h3" className="text-lg uppercase tracking-wider font-bold text-primary">2. USO DE COOKIES</Heading>
                </div>
                <Text className="text-gray-300 italic font-medium leading-relaxed italic">
                  "Este site poderá utilizar cookies para melhorar a experiência do utilizador."
                </Text>
                <Text className="text-gray-500 text-sm leading-relaxed">
                  Não assumimos o uso direto de todos os tipos de cookies. A utilização de cookies não essenciais depende sempre do seu consentimento prévio, obtido através do nosso banner de cookies.
                </Text>
              </Card>

              {/* 3. Tipos de Cookies */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">3. TIPOS DE COOKIES QUE PODEMOS UTILIZAR</Heading>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-surface/30 p-8 space-y-4 border-white/5 flex flex-col items-center text-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                    <Heading variant="h4" className="text-sm font-black tracking-widest text-white">ESSENCIAIS</Heading>
                    <Text className="text-xs text-gray-500 leading-relaxed">Necessários para o funcionamento básico e segurança do website. Não podem ser desativados.</Text>
                  </Card>
                  <Card className="bg-surface/30 p-8 space-y-4 border-white/5 flex flex-col items-center text-center">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <Heading variant="h4" className="text-sm font-black tracking-widest text-white uppercase text-primary/80">Estatísticos</Heading>
                    <Text className="text-xs text-gray-500 leading-relaxed">Ajudam-nos a perceber como os visitantes interagem com o site (ex: Google Analytics). Opcionais.</Text>
                  </Card>
                  <Card className="bg-surface/30 p-8 space-y-4 border-white/5 flex flex-col items-center text-center">
                    <Target className="w-8 h-8 text-primary" />
                    <Heading variant="h4" className="text-sm font-black tracking-widest text-white">MARKETING</Heading>
                    <Text className="text-xs text-gray-500 leading-relaxed">Utilizados para apresentar publicidade relevante e medir campanhas. Opcionais.</Text>
                  </Card>
                </div>
              </div>

              {/* 4. Consentimento */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">4. CONSENTIMENTO E GESTÃO</Heading>
                </div>
                <div className="bg-surface/30 p-8 rounded-sm border border-white/5 space-y-6 text-center">
                  <Text className="text-primary font-bold italic">
                    "O uso de cookies não essenciais depende do consentimento prévio do utilizador, obtido através de um banner de cookies."
                  </Text>
                  <Text className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    Pode aceitar, rejeitar ou configurar as suas preferências a qualquer momento. Além disso, pode gerir cookies através das definições do seu navegador (Chrome, Firefox, Safari, Edge).
                  </Text>
                  <Button onClick={openCookieSettings} className="mx-auto flex gap-2">
                    <Settings className="w-4 h-4" />
                    PERSONALIZAR COOKIES
                  </Button>
                </div>
              </div>

              {/* 5. Tabela */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary" />
                  <Heading variant="h3" className="text-xl uppercase tracking-wider font-bold">5. TABELA DE COOKIES (EXEMPLO)</Heading>
                </div>
                <div className="overflow-hidden rounded-sm border border-white/5">
                   <table className="w-full text-[10px] text-left border-collapse bg-surface/20">
                      <thead>
                        <tr className="bg-surface/50 text-primary uppercase font-black tracking-widest border-b border-white/5">
                          <th className="p-4">Nome</th>
                          <th className="p-4">Finalidade</th>
                          <th className="p-4">Duração</th>
                          <th className="p-4">Tipo</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        <tr className="border-b border-white/5">
                          <td className="p-4 text-white font-bold">_ga</td>
                          <td className="p-4">Análise estatística (Google)</td>
                          <td className="p-4">2 anos</td>
                          <td className="p-4 uppercase text-[8px] font-black tracking-widest">Estatístico</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-white font-bold">consent-mode</td>
                          <td className="p-4">Preferências de cookies</td>
                          <td className="p-4">1 ano</td>
                          <td className="p-4 uppercase text-[8px] font-black tracking-widest">Essencial</td>
                        </tr>
                      </tbody>
                   </table>
                </div>
                <Text className="text-[10px] text-gray-600 italic">
                  * Esta tabela deve ser preenchida de acordo com as ferramentas efetivamente instaladas no site.
                </Text>
              </div>

              <Text className="text-[9px] text-gray-600 pt-10 border-t border-white/5 text-center">
                 Última atualização: Março/2024. Esta política pode ser atualizada periodicamente.
              </Text>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
};

export default CookiesPolicy;
