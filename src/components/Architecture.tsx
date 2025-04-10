import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export function Architecture() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("architecture");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const componentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <section id="architecture" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue to-background opacity-50"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Platform Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How GitHub, Terraform, AKS, Crossplane and Backstage work together
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Architecture diagram */}
          <div className="glass-card p-8 rounded-xl relative min-h-[500px]">
            {/* Diagram container */}
            <div className="relative h-full">
              {/* GitHub */}
              <motion.div
                className="absolute top-0 left-0 md:left-1/4 glass-card p-4 rounded-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={0}
                variants={componentVariants}
              >
                <h4 className="font-semibold text-accent-purple">GitHub</h4>
                <p className="text-sm text-muted-foreground">Code Repository & CI/CD</p>
              </motion.div>
              
              {/* Arrow from GitHub to Terraform */}
              <motion.div
                className="absolute top-[60px] left-[100px] md:left-[30%] w-[100px] md:w-[150px] h-[2px] bg-accent-purple transform rotate-45 origin-left"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              
              {/* Terraform */}
              <motion.div
                className="absolute top-[120px] left-[180px] md:left-[45%] glass-card p-4 rounded-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={1}
                variants={componentVariants}
              >
                <h4 className="font-semibold text-accent-cyan">Terraform</h4>
                <p className="text-sm text-muted-foreground">Infrastructure as Code</p>
              </motion.div>
              
              {/* Arrow from Terraform to AKS */}
              <motion.div
                className="absolute top-[180px] left-[240px] md:left-[55%] w-[100px] md:w-[100px] h-[2px] bg-accent-cyan transform rotate-45 origin-left"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
              
              {/* AKS */}
              <motion.div
                className="absolute top-[240px] left-[320px] md:left-[65%] glass-card p-4 rounded-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={2}
                variants={componentVariants}
              >
                <h4 className="font-semibold text-accent-pink">AKS</h4>
                <p className="text-sm text-muted-foreground">Kubernetes Cluster</p>
              </motion.div>
              
              {/* Crossplane */}
              <motion.div
                className="absolute top-[340px] left-[100px] md:left-[25%] glass-card p-4 rounded-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={3}
                variants={componentVariants}
              >
                <h4 className="font-semibold text-accent-purple">Crossplane</h4>
                <p className="text-sm text-muted-foreground">Multi-cloud Resources</p>
              </motion.div>
              
              {/* Backstage */}
              <motion.div
                className="absolute top-[340px] left-[280px] md:left-[55%] glass-card p-4 rounded-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={4}
                variants={componentVariants}
              >
                <h4 className="font-semibold text-accent-cyan">Backstage</h4>
                <p className="text-sm text-muted-foreground">Developer Portal</p>
              </motion.div>
              
              {/* Connecting lines */}
              <motion.div
                className="absolute top-[300px] left-[330px] md:left-[65%] w-[2px] h-[40px] bg-accent-pink"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isVisible ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              />
              
              <motion.div
                className="absolute top-[370px] left-[200px] md:left-[40%] w-[80px] h-[2px] bg-gradient-to-r from-accent-purple to-accent-cyan"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 gradient-text">Infrastructure-as-Code Workflow</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Terraform modules define base infrastructure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>Crossplane extends with custom resources</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-purple mr-2 mt-0.5 flex-shrink-0" />
                <span>GitOps ensures state consistency</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 gradient-text">GitOps Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                <span>Pull requests for infrastructure changes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                <span>Automated validation and testing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                <span>Continuous deployment with rollback capability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
