
import { Github, Mail, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">DevPlatform0</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              An internal developer platform integrating GitHub, Terraform, AKS, Crossplane and Backstage
              for seamless infrastructure provisioning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-purple">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-cyan">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-pink">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-accent-purple">Features</a>
              </li>
              <li>
                <a href="#architecture" className="text-muted-foreground hover:text-accent-purple">Architecture</a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-accent-purple">Benefits</a>
              </li>
              <li>
                <a href="#journey" className="text-muted-foreground hover:text-accent-purple">Journey</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none"
              />
              <Button className="rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevPlatform0. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent-purple">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent-purple">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
