import { motion } from "framer-motion";
import { Scissors, User, Award, CheckCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { Container, Section } from "../components/ui/Layout";
import { Heading } from "../components/ui/Heading";
import { Text, Card } from "../components/ui/DataDisplay";

const About = () => {
  return (
    <div className="py-20 min-h-screen">
      {/* Story Section */}
      <Section className="bg-bg overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Heading variant="h1" gradient>Sobre Nós</Heading>
                <Text variant="lead" className="mt-4">Elevando o padrão da barbearia desde o primeiro dia.</Text>
              </div>
              <div className="space-y-6">
                <Text variant="p" className="text-xl leading-relaxed text-gray-300">
                  {siteConfig.aboutFull.story}
                </Text>
                <Text variant="p" className="text-gray-400">
                  {siteConfig.aboutFull.mission}
                </Text>
                <div className="bg-surface/50 p-6 border-l-4 border-primary rounded-r-lg">
                  <Text variant="lead" className="italic font-normal">
                    "{siteConfig.aboutFull.experience}"
                  </Text>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <Card className="aspect-[4/5] relative overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={siteConfig.images.hero}
                  alt="Euclides"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values / Stats */}
      <Section className="bg-secondary">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: User, value: "10k+", label: "Avaliações" },
              { icon: Award, value: "10+", label: "Anos de Experiência" },
              { icon: Scissors, value: "50k+", label: "Cortes Realizados" },
              { icon: CheckCircle, value: "99%", label: "Satisfação" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex w-16 h-16 bg-primary/10 rounded-full items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <Heading variant="h2" className="text-white mb-2">{stat.value}</Heading>
                <Text variant="small">{stat.label}</Text>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

    </div>
  );
};

export default About;
