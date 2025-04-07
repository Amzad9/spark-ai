
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import anime from "animejs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate("/");
    }, 1500);
  }

  // Animation effects
  useState(() => {
    anime({
      targets: '.form-animate-item',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
      duration: 800
    });
    
    // Background animation
    anime({
      targets: '.login-bg-circle',
      scale: [0.8, 1],
      opacity: [0, 0.2],
      easing: 'easeOutExpo',
      duration: 1500
    });
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="login-bg-circle fixed w-[800px] h-[800px] bg-primary/10 dark:bg-primary/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
      
      <div className="absolute top-6 left-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="form-animate-item"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white/50 dark:bg-aidark-800/50 backdrop-blur-md rounded-xl p-8 shadow-lg border border-border">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold form-animate-item">Welcome Back</h2>
            <p className="text-muted-foreground form-animate-item">Login to your NeuraNest account</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="form-animate-item">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="form-animate-item">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between form-animate-item">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm cursor-pointer">Remember me</FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <Button variant="link" size="sm" className="text-sm">
                    Forgot password?
                  </Button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full form-animate-item" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Form>
          
          <div className="text-center text-sm form-animate-item">
            <span className="text-muted-foreground">Don't have an account?</span>{" "}
            <Button variant="link" onClick={() => navigate("/get-started")}>
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
