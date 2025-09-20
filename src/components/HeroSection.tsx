import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Stethoscope, Building2, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Bridging Ayurveda &
            <span className="text-primary"> Modern Nutrition</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Empower your practice and patients with AI-powered personalized diet plans that honor ancient wisdom while leveraging modern nutritional science.
          </p>

          {/* Role-Based CTAs */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20 animate-slide-up">
              <Link to="/patient-dashboard" className="block">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">For Patients</h3>
                  <p className="text-muted-foreground text-sm">
                    Get personalized Ayurvedic diet plans and track your wellness journey
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Start Your Journey <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Link to="/doctor-dashboard" className="block">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">For Doctors</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage patients and create AI-assisted personalized treatment plans
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Access Dashboard <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/admin-dashboard" className="block">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">For Hospitals/Clinics</h3>
                  <p className="text-muted-foreground text-sm">
                    Enterprise-grade practice management with complete oversight
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            </Card>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg" asChild>
              <Link to="/signup">
                Get Started Free
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
              <Link to="/demo">
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;