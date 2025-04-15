
import { Database, GitMerge, Layers, LayoutDashboard, Lock, Server } from "lucide-react";

export function Components() {
  return (
    <section id="components" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-deep-blue opacity-50"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Platform Components
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DevPlatform0 integrates best-in-class technologies to create a seamless developer experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-purple/10 flex items-center justify-center mb-4">
              <LayoutDashboard className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backstage Portal</h3>
            <p className="text-muted-foreground">
              Developer-friendly Backstage portal providing a unified interface for all platform services
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-cyan/10 flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AKS Cluster</h3>
            <p className="text-muted-foreground">
              Azure Kubernetes Service provides the foundation for reliable, scalable infrastructure
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-pink/10 flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-accent-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Crossplane</h3>
            <p className="text-muted-foreground">
              Kubernetes-native infrastructure provisioning with declarative resource definitions
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-purple/10 flex items-center justify-center mb-4">
              <GitMerge className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ArgoCD</h3>
            <p className="text-muted-foreground">
              GitOps continuous delivery tool for Kubernetes, ensuring declarative infrastructure
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-cyan/10 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Terraform</h3>
            <p className="text-muted-foreground">
              Infrastructure-as-Code tool for initial platform provisioning and management
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-pink/10 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-accent-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Policy Engine</h3>
            <p className="text-muted-foreground">
              Built-in governance controls ensuring compliance with enterprise requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
