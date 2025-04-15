
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Components } from "@/components/Components";
import { BlockVisualizer } from "@/components/BlockVisualizer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Components />
      <BlockVisualizer />
      <Footer />
    </div>
  );
};

export default Index;
