
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Components } from "@/components/Components";
import { Architecture } from "@/components/Architecture";
import { Benefits } from "@/components/Benefits";
import { Journey } from "@/components/Journey";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Components />
      <Architecture />
      <Benefits />
      <Journey />
      <Footer />
    </div>
  );
};

export default Index;
