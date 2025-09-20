import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  Stethoscope, 
  Database, 
  Settings, 
  BarChart3,
  Shield,
  CreditCard,
  Search,
  Plus
} from "lucide-react";
import Navigation from "@/components/Navigation";

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hospitalStats = [
    { name: "Active Hospitals", count: 45, change: "+3 this month", color: "bg-primary" },
    { name: "Total Doctors", count: 234, change: "+12 this month", color: "bg-secondary" },
    { name: "Active Patients", count: 1847, change: "+89 this week", color: "bg-accent" },
    { name: "Revenue", count: "₹12.4L", change: "+15% growth", color: "bg-primary/60" }
  ];

  const recentHospitals = [
    {
      id: 1,
      name: "Apollo Ayurveda Center",
      location: "Mumbai",
      doctors: 12,
      patients: 245,
      status: "Active",
      plan: "Enterprise"
    },
    {
      id: 2,
      name: "Kottakkal Arya Vaidya Sala",
      location: "Kerala",
      doctors: 18,
      patients: 387,
      status: "Active",
      plan: "Premium"
    },
    {
      id: 3,
      name: "Patanjali Wellness Center",
      location: "Delhi",
      doctors: 8,
      patients: 156,
      status: "Trial",
      plan: "Basic"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              System Administration
            </h1>
            <p className="text-muted-foreground">
              AyurHealth Platform Management
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Add Hospital
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {hospitalStats.map((stat, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.name}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.count}</p>
                    <p className="text-xs text-primary">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}/10`}>
                    {stat.name.includes("Hospital") && <Building2 className="h-6 w-6 text-primary" />}
                    {stat.name.includes("Doctor") && <Stethoscope className="h-6 w-6 text-primary" />}
                    {stat.name.includes("Patient") && <Users className="h-6 w-6 text-primary" />}
                    {stat.name.includes("Revenue") && <CreditCard className="h-6 w-6 text-primary" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="hospitals" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="hospitals" className="space-y-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Building2 className="h-5 w-5 mr-2 text-primary" />
                        Hospital Management
                      </CardTitle>
                      <div className="relative">
                        <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Search hospitals..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentHospitals.map((hospital) => (
                        <div key={hospital.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-full bg-primary/10">
                              <Building2 className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{hospital.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {hospital.location} • {hospital.doctors} doctors • {hospital.patients} patients
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant="secondary">{hospital.plan}</Badge>
                            <Badge 
                              variant={hospital.status === "Active" ? "default" : "outline"}
                            >
                              {hospital.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              Manage
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      User Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>User management interface</p>
                      <p className="text-sm">Manage doctors, patients, and admin users</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="database" className="space-y-6">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2 text-primary" />
                      Food Database Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Ayurvedic Classifications</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Manage dosha properties, taste classifications, and therapeutic effects
                          </p>
                          <Button variant="outline" size="sm">
                            Edit Classifications
                          </Button>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Nutritional Data</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Update macro/micronutrient information and serving sizes
                          </p>
                          <Button variant="outline" size="sm">
                            Update Nutrition
                          </Button>
                        </Card>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium mb-2">Database Statistics</h4>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Food Items</p>
                            <p className="font-medium">2,847</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Recipes</p>
                            <p className="font-medium">1,234</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Classifications</p>
                            <p className="font-medium">156</p>
                          </div>
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
                      Platform Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Advanced analytics dashboard</p>
                      <p className="text-sm">Usage metrics, performance insights, and growth trends</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Health */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Status</span>
                    <Badge variant="default" className="bg-green-500">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <Badge variant="default" className="bg-green-500">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Response</span>
                    <Badge variant="secondary">45ms</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Uptime</span>
                    <Badge variant="secondary">99.9%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    New hospital <span className="font-medium text-foreground">Kairali Ayurveda</span> registered
                  </p>
                  <p className="text-muted-foreground">
                    Database updated with <span className="font-medium text-foreground">45 new food items</span>
                  </p>
                  <p className="text-muted-foreground">
                    System backup completed successfully
                  </p>
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
                  <Plus className="h-4 w-4 mr-2" />
                  Add Hospital
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Manage Database
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  System Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Audit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;