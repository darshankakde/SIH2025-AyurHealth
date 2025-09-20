import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Search, 
  Plus, 
  FileText, 
  Calendar, 
  BarChart3,
  User,
  Stethoscope,
  Brain,
  Download
} from "lucide-react";
import Navigation from "@/components/Navigation";

const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const recentPatients = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      dosha: "Pitta",
      lastVisit: "2024-01-10",
      status: "Active",
      condition: "Digestive Issues"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      age: 45,
      dosha: "Vata",
      lastVisit: "2024-01-08",
      status: "Follow-up",
      condition: "Joint Pain"
    },
    {
      id: 3,
      name: "Meera Patel",
      age: 35,
      dosha: "Kapha",
      lastVisit: "2024-01-07",
      status: "New",
      condition: "Weight Management"
    }
  ];

  const todaySchedule = [
    { time: "09:00", patient: "Amit Singh", type: "Consultation" },
    { time: "10:30", patient: "Sunita Devi", type: "Follow-up" },
    { time: "14:00", patient: "Rohit Gupta", type: "New Patient" },
    { time: "15:30", patient: "Kavita Joshi", type: "Diet Review" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Dr. Ayush Sharma
            </h1>
            <p className="text-muted-foreground">
              Ayurvedic Physician & Nutritionist
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              New Patient
            </Button>
            <Button variant="outline">
              <Brain className="h-4 w-4 mr-2" />
              AI Assistant
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Patients</p>
                  <p className="text-2xl font-bold text-foreground">247</p>
                  <p className="text-xs text-primary">+12 this month</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Appointments</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="text-xs text-secondary">2 pending</p>
                </div>
                <div className="p-3 rounded-full bg-secondary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Plans Created</p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                  <p className="text-xs text-accent">This week</p>
                </div>
                <div className="p-3 rounded-full bg-accent/20">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-foreground">94%</p>
                  <p className="text-xs text-primary">Patient satisfaction</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="patients" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="create-plan">Create Plan</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="patients" className="space-y-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-primary" />
                        Patient Management
                      </CardTitle>
                      <div className="relative">
                        <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Search patients..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPatients.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-full bg-primary/10">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{patient.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {patient.age} years • {patient.condition}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant="secondary">{patient.dosha}</Badge>
                            <Badge 
                              variant={patient.status === "Active" ? "default" : "outline"}
                            >
                              {patient.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="create-plan" className="space-y-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-primary" />
                      AI-Assisted Diet Plan Creator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Patient Selection</label>
                          <Input placeholder="Select or search patient..." />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Primary Dosha</label>
                          <Input placeholder="Auto-detected from profile" />
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                        <h4 className="font-medium mb-3 flex items-center">
                          <Brain className="h-4 w-4 mr-2 text-primary" />
                          AI Recommendations
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                            <span className="text-sm">Morning: Warm water with ginger and lemon</span>
                            <Button size="sm" variant="outline">Add</Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                            <span className="text-sm">Lunch: Quinoa bowl with seasonal vegetables</span>
                            <Button size="sm" variant="outline">Add</Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                            <span className="text-sm">Dinner: Light khichdi with turmeric</span>
                            <Button size="sm" variant="outline">Add</Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline">
                          Save Draft
                        </Button>
                        <div className="space-x-2">
                          <Button variant="outline">
                            Preview
                          </Button>
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Generate PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                      Practice Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Analytics dashboard coming soon...</p>
                      <p className="text-sm">Track patient outcomes, plan effectiveness, and more</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaySchedule.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{appointment.time}</p>
                        <p className="text-xs text-muted-foreground">{appointment.patient}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {appointment.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Patient
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Create Diet Plan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Patient Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Created diet plan for <span className="font-medium text-foreground">Priya Sharma</span>
                  </p>
                  <p className="text-muted-foreground">
                    Updated treatment for <span className="font-medium text-foreground">Rajesh Kumar</span>
                  </p>
                  <p className="text-muted-foreground">
                    Scheduled follow-up with <span className="font-medium text-foreground">Meera Patel</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;