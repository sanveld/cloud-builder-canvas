
import { CheckCircle, GitFork, GitPullRequest, Layout, Lock, Terminal, Users } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-deep-blue opacity-50"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Key Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DevPlatform0 brings together the best tools to create a seamless developer experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-purple/10 flex items-center justify-center mb-4">
              <Layout className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Self-Service Portal</h3>
            <p className="text-muted-foreground">
              Developer-friendly Backstage portal for infrastructure provisioning with a few clicks
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-cyan/10 flex items-center justify-center mb-4">
              <Terminal className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Standardized Templates</h3>
            <p className="text-muted-foreground">
              Crossplane configurations provide consistent, reusable infrastructure patterns
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-pink/10 flex items-center justify-center mb-4">
              <GitFork className="h-6 w-6 text-accent-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitOps Workflows</h3>
            <p className="text-muted-foreground">
              Automated deployment pipelines with change tracking and version control
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-purple/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
            <p className="text-muted-foreground">
              Intuitive interface designed for developers, not just infrastructure experts
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-cyan/10 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Governance Controls</h3>
            <p className="text-muted-foreground">
              Built-in compliance guardrails and policy enforcement for enterprise requirements
            </p>
          </div>
          
          <div className="feature-item">
            <div className="rounded-full w-12 h-12 bg-accent-pink/10 flex items-center justify-center mb-4">
              <GitPullRequest className="h-6 w-6 text-accent-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Cloud Ready</h3>
            <p className="text-muted-foreground">
              Extensible architecture designed to support multiple cloud providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
