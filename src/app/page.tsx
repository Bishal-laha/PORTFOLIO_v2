
import { MainSection, About, Contact, Footer, Project, Skill } from "@/components/Index";
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="min-h-screen dark:bg-black/[0.96] bg-blue-200 antialiased dark:bg-grid-white/[0.02]">
        <MainSection />
        <About />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </main>
    </ChakraProvider>
  );
}
