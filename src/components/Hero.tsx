
import { Server, Terminal, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-grid bg-[length:40px_40px]"></div>
      
      <div className="container relative z-10 px-4 md:px-6 space-y-12 text-center">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Developer-First <span className="gradient-text">Infrastructure</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            An internal developer platform built on GitHub, deployed with Terraform on AKS
          </p>
        </div>
        
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl flex flex-col items-center gap-3">
            <Github className="h-8 w-8 text-accent-purple" />
            <h3 className="text-lg font-semibold">GitHub Integration</h3>
            <p className="text-sm text-muted-foreground">Seamless GitOps workflows with built-in CI/CD</p>
          </div>
          <div className="glass-card p-6 rounded-xl flex flex-col items-center gap-3">
            <Terminal className="h-8 w-8 text-accent-cyan" />
            <h3 className="text-lg font-semibold">Terraform + Crossplane</h3>
            <p className="text-sm text-muted-foreground">Infrastructure-as-Code at enterprise scale</p>
          </div>
          <div className="glass-card p-6 rounded-xl flex flex-col items-center gap-3">
            <Server className="h-8 w-8 text-accent-pink" />
            <h3 className="text-lg font-semibold">AKS Deployment</h3>
            <p className="text-sm text-muted-foreground">Production-ready Kubernetes for reliability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
