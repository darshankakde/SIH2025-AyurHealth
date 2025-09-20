import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Download, 
  Heart, 
  Leaf, 
  TrendingUp, 
  Bell,
  User,
  BookOpen,
  Activity
} from "lucide-react";
import Navigation from "@/components/Navigation";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const nutritionData = [
    { name: "Proteins", current: 45, target: 60, color: "bg-primary" },
    { name: "Carbs", current: 120, target: 150, color: "bg-secondary" },
    { name: "Fats", current: 35, target: 40, color: "bg-accent" },
    { name: "Fiber", current: 22, target: 30, color: "bg-primary/60" },
  ];

  const doshaBalance = [
    { dosha: "Vata", percentage: 30, color: "bg-primary" },
    { dosha: "Pitta", percentage: 45, color: "bg-secondary" },
    { dosha: "Kapha", percentage: 25, color: "bg-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, Priya
            </h1>
            <p className="text-muted-foreground">
              Your wellness journey continues today
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Goal</p>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-xs text-primary">+12% from yesterday</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Dosha Balance</p>
                  <p className="text-2xl font-bold text-foreground">Optimal</p>
                  <p className="text-xs text-secondary">Pitta dominant</p>
                </div>
                <div className="p-3 rounded-full bg-secondary/20">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Wellness Score</p>
                  <p className="text-2xl font-bold text-foreground">7.8</p>
                  <p className="text-xs text-accent">Good progress</p>
                </div>
                <div className="p-3 rounded-full bg-accent/20">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Streak</p>
                  <p className="text-2xl font-bold text-foreground">12 days</p>
                  <p className="text-xs text-primary">Keep it up!</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Diet Plan */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Your Current Diet Plan
                  </span>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">Morning (6:00 AM)</h4>
                      <p className="text-sm text-muted-foreground">Warm water with lemon, followed by light breakfast</p>
                    </div>
                    <Badge variant="secondary">Vata Balancing</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">Lunch (12:00 PM)</h4>
                      <p className="text-sm text-muted-foreground">Quinoa bowl with seasonal vegetables and ghee</p>
                    </div>
                    <Badge variant="secondary">Pitta Cooling</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">Dinner (7:00 PM)</h4>
                      <p className="text-sm text-muted-foreground">Light khichdi with turmeric and ginger</p>
                    </div>
                    <Badge variant="secondary">Kapha Light</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Progress */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Today's Nutrition Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {nutritionData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground">
                          {item.current}g / {item.target}g
                        </span>
                      </div>
                      <Progress 
                        value={(item.current / item.target) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Dosha Balance */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  Dosha Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doshaBalance.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.dosha}</span>
                        <span className="text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Meals */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Upcoming Meals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Evening Snack</p>
                      <p className="text-xs text-muted-foreground">4:00 PM</p>
                    </div>
                    <Badge variant="outline" className="text-xs">Herbal Tea</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Dinner</p>
                      <p className="text-xs text-muted-foreground">7:00 PM</p>
                    </div>
                    <Badge variant="outline" className="text-xs">Light Meal</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Log Meal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Progress
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;