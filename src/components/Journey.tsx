
import { CheckCircle2 } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue to-background opacity-50"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Implementation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to production-ready internal platform
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                    <h3 className="text-xl font-semibold mb-2">Initial Concept</h3>
                    <p className="text-muted-foreground">Q1 2024</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-accent-purple flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 block md:hidden">
                    <h3 className="text-xl font-semibold mb-2">Initial Concept</h3>
                    <p className="text-muted-foreground">Q1 2024</p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm">Identified need for streamlined infrastructure provisioning and developer self-service</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 hidden md:block">
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm">Identified need for streamlined infrastructure provisioning and developer self-service</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right block md:hidden">
                    <h3 className="text-xl font-semibold mb-2">Technology Selection</h3>
                    <p className="text-muted-foreground">Q2 2024</p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm">Evaluated and selected GitHub, Terraform, AKS, Crossplane and Backstage as core components</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-accent-cyan flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 hidden md:block">
                    <h3 className="text-xl font-semibold mb-2">Technology Selection</h3>
                    <p className="text-muted-foreground">Q2 2024</p>
                  </div>
                  
                  <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm">Evaluated and selected GitHub, Terraform, AKS, Crossplane and Backstage as core components</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                    <h3 className="text-xl font-semibold mb-2">MVP Implementation</h3>
                    <p className="text-muted-foreground">Q3 2024</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 block md:hidden">
                    <h3 className="text-xl font-semibold mb-2">MVP Implementation</h3>
                    <p className="text-muted-foreground">Q3 2024</p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm">Built core platform focused on Azure resources and released to early adopters</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 hidden md:block">
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm">Built core platform focused on Azure resources and released to early adopters</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right block md:hidden">
                    <h3 className="text-xl font-semibold mb-2">Enterprise Rollout</h3>
                    <p className="text-muted-foreground">Current</p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm">Enterprise-wide deployment with advanced governance features and expanded resource types</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-accent-purple flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 hidden md:block">
                    <h3 className="text-xl font-semibold mb-2">Enterprise Rollout</h3>
                    <p className="text-muted-foreground">Current</p>
                  </div>
                  
                  <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm">Enterprise-wide deployment with advanced governance features and expanded resource types</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                    <h3 className="text-xl font-semibold mb-2">Multi-Cloud Expansion</h3>
                    <p className="text-muted-foreground">Planned</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white/20 border-2 border-dashed border-accent-cyan flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-accent-cyan"></div>
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 block md:hidden">
                    <h3 className="text-xl font-semibold mb-2">Multi-Cloud Expansion</h3>
                    <p className="text-muted-foreground">Planned</p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm">Extend platform capabilities to AWS and GCP, enabling true multi-cloud operations</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 pl-12 md:pl-8 hidden md:block">
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm">Extend platform capabilities to AWS and GCP, enabling true multi-cloud operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
