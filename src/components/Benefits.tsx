
import { Clock, Eye, Lock, Rocket, Zap } from "lucide-react";

export function Benefits() {
  return (
    <section id="benefits" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-deep-blue opacity-50"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Platform Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How DevPlatform0 transforms your development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-cyan"></div>
            <div className="absolute top-6 right-6 p-3 rounded-full bg-accent-purple/10">
              <Rocket className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 mt-6">Accelerated Experience</h3>
            <p className="text-muted-foreground">
              Developers can self-serve infrastructure needs without waiting for ops teams,
              reducing lead time from days to minutes.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-pink"></div>
            <div className="absolute top-6 right-6 p-3 rounded-full bg-accent-cyan/10">
              <Clock className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 mt-6">Reduced Provisioning Time</h3>
            <p className="text-muted-foreground">
              Standardized templates and automated workflows drastically cut down time-to-provision
              for complex cloud resources.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-pink to-accent-purple"></div>
            <div className="absolute top-6 right-6 p-3 rounded-full bg-accent-pink/10">
              <Zap className="h-6 w-6 text-accent-pink" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 mt-6">Consistent Patterns</h3>
            <p className="text-muted-foreground">
              Enforce best practices and consistent infrastructure patterns across all deployments,
              eliminating configuration drift.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-cyan"></div>
            <div className="absolute top-6 right-6 p-3 rounded-full bg-accent-purple/10">
              <Eye className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 mt-6">Enhanced Visibility</h3>
            <p className="text-muted-foreground">
              Complete transparency into infrastructure with clear audit trails and comprehensive
              monitoring built into the platform.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group col-span-1 md:col-span-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-pink"></div>
            <div className="absolute top-6 right-6 p-3 rounded-full bg-accent-cyan/10">
              <Lock className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 mt-6">Future-Proof Architecture</h3>
            <p className="text-muted-foreground">
              The platform's extensible design allows for easy integration with additional cloud providers
              and tools, ensuring your investment scales with your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
