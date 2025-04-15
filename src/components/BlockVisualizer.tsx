
import { Server, GitBranch, Layers, LayoutDashboard } from "lucide-react";

export function BlockVisualizer() {
  return (
    <section id="platform-blocks" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-deep-blue/30 opacity-50"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Platform Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual representation of the DevPlatform0 stack
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          {/* Top level components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="feature-item group transform hover:-translate-y-2 transition-all">
              <div className="rounded-full w-12 h-12 bg-accent-purple/10 flex items-center justify-center mb-4">
                <LayoutDashboard className="h-6 w-6 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backstage</h3>
              <p className="text-muted-foreground">
                Developer portal providing unified access to all platform services
              </p>
            </div>
            
            <div className="feature-item group transform hover:-translate-y-2 transition-all">
              <div className="rounded-full w-12 h-12 bg-accent-pink/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-accent-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Crossplane</h3>
              <p className="text-muted-foreground">
                Kubernetes-native infrastructure provisioning with declarative resource definitions
              </p>
            </div>
            
            <div className="feature-item group transform hover:-translate-y-2 transition-all">
              <div className="rounded-full w-12 h-12 bg-accent-cyan/10 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ArgoCD</h3>
              <p className="text-muted-foreground">
                GitOps continuous delivery tool for Kubernetes, ensuring declarative infrastructure
              </p>
            </div>
          </div>
          
          {/* Arrow connecting layers */}
          <div className="h-10 flex items-center justify-center my-4">
            <div className="h-full w-0.5 bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink"></div>
          </div>
          
          {/* Foundation */}
          <div className="w-full">
            <div className="glass-card p-8 rounded-xl border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all flex flex-col items-center gap-4 transform hover:-translate-y-1">
              <div className="rounded-full w-16 h-16 bg-accent-cyan/10 flex items-center justify-center mb-2">
                <Server className="h-8 w-8 text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold">Azure Kubernetes Service (AKS)</h3>
              <p className="text-center text-muted-foreground max-w-2xl">
                The foundation of DevPlatform0, providing a managed Kubernetes environment for running all platform components
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
