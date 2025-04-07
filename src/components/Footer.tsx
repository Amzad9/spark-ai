
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-aidark-900 pt-16 pb-8 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-aiblue-400 to-aiblue-600 rounded-lg mr-2"></div>
              <span className="font-heading text-xl font-bold">NeuraNest</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI that works for you, not against you. Automating repetitive tasks so you can focus on what matters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-aidark-700 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-aidark-700 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-aidark-700 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-aidark-700 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Use Cases</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NeuraNest. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-sm text-muted-foreground">Get updates on new features</div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email address" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
