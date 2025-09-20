import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  FileText, 
  BarChart3, 
  Shield, 
  Globe, 
  Zap,
  HeartHandshake,
  Database
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Advanced machine learning algorithms suggest optimal food combinations based on Ayurvedic principles and modern nutrition science.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: FileText,
    title: "Digital Diet Charts",
    description: "Generate, customize, and share professional PDF diet plans that patients can easily follow and track.",
    color: "bg-secondary/20 text-primary"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Comprehensive tracking of patient outcomes, nutritional balance, and Ayurvedic wellness parameters.",
    color: "bg-accent/20 text-primary"
  },
  {
    icon: HeartHandshake,
    title: "Dosha-Based Personalization",
    description: "Tailored recommendations based on individual constitution (Vata, Pitta, Kapha) and current health status.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Shield,
    title: "Medical-Grade Security",
    description: "HIPAA/GDPR compliant platform with end-to-end encryption and secure patient data management.",
    color: "bg-secondary/20 text-primary"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Interface available in multiple languages with proper Sanskrit terminology for authentic Ayurvedic practice.",
    color: "bg-accent/20 text-primary"
  },
  {
    icon: Database,
    title: "Comprehensive Food Database",
    description: "Extensive database mapping traditional Ayurvedic food classifications with modern nutritional data.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Zap,
    title: "Instant Plan Generation",
    description: "Create personalized diet plans in minutes, not hours, with automated meal suggestions and timing.",
    color: "bg-secondary/20 text-primary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Ayurvedic Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate traditional wisdom with cutting-edge technology to deliver personalized healthcare at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-lg transition-all duration-300 group animate-slide-up border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;