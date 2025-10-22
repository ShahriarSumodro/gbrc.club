import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const MembershipFeePage = () => {
  const MEMBERSHIP_FEE = 500;
  const BKASH_NUMBER = "01712345678";
  const NAGAD_NUMBER = "01712345678";
  
  const CURRENT_MONTH_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzTe8TOoUHd-GNG3YXx7Pz6C4WYHj_yAR7WyoO-LQSKvUr19vU578QPZ5w4Kw52yeAAvw/exec";
  const OTHER_MONTHS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPhRUqVEXjlolETPCpuCdGuLiokNnFqIYWOqSxcSYpBP6EYKOvhyLTNB_CwQP_U-V4/exec";

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    batch: "",
    memberType: "",
    month: "",
    year: "",
    paymentMethod: "",
    transactionId: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const departments = [
    "Computer Science & Engineering",
    "Electrical & Electronic Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Industrial & Production Engineering",
    "Architecture",
    "Other"
  ];

  const memberTypes = [
    "President",
    "Vice-President",
    "General Secretary",
    "Asst. General Secretary",
    "Treasurer",
    "Office Secretary",
    "Organizing Secretary",
    "Media Secretary",
    "Executive Member",
    "General Member"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 1 + i);

  const getCurrentMonth = () => {
    return months[new Date().getMonth()];
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const isCurrentMonthYear = () => {
    return formData.month === getCurrentMonth() && 
           parseInt(formData.year) === getCurrentYear();
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedMethod(method);
    setFormData({ ...formData, paymentMethod: method });
    setShowPaymentInfo(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.department || !formData.batch || !formData.memberType || 
        !formData.month || !formData.year || !formData.paymentMethod || !formData.transactionId) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptUrl = isCurrentMonthYear() ? CURRENT_MONTH_SCRIPT_URL : OTHER_MONTHS_SCRIPT_URL;
      const paymentType = isCurrentMonthYear() ? "current month" : "archive";

      console.log(`Submitting to ${paymentType} sheet:`, formData);

      // Create URL with query parameters instead of FormData
      const params = new URLSearchParams({
        name: formData.name,
        department: formData.department,
        batch: formData.batch,
        memberType: formData.memberType,
        month: formData.month,
        year: formData.year,
        paymentMethod: formData.paymentMethod,
        transactionId: formData.transactionId,
        amount: MEMBERSHIP_FEE.toString()
      });

      // Use GET request with parameters
      const response = await fetch(`${scriptUrl}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
      });

      // With no-cors, we can't read the response, but if fetch doesn't throw, it likely succeeded
      console.log('Request sent successfully');
      
      alert(`Payment information submitted for ${formData.month} ${formData.year}! 
Your payment has been recorded in the ${paymentType} sheet. We'll verify and confirm shortly.`);
      
      setFormData({
        name: "",
        department: "",
        batch: "",
        memberType: "",
        month: "",
        year: "",
        paymentMethod: "",
        transactionId: ""
      });
      setShowPaymentInfo(false);
      setSelectedMethod("");

    } catch (error) {
      console.error('Error submitting payment:', error);
      alert("There was an issue submitting your payment. However, your data may have been recorded. Please check with the team or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              Membership Fee Payment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pay your monthly membership fee to maintain active status and enjoy all team benefits
            </p>
            
            <div className="mt-6 inline-block bg-primary/10 border border-primary/30 rounded-lg px-6 py-3">
              <p className="text-sm font-semibold text-primary">
                Current Month: {getCurrentMonth()} {getCurrentYear()}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Benefits Card */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-primary mb-4">
                    ৳{MEMBERSHIP_FEE}
                  </div>
                  <CardTitle className="text-2xl">Monthly Membership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">Access to all workshops and training sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">Use of team equipment and workspace facilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">Participation in national and international competitions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">Mentorship from senior members and alumni</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">Networking opportunities with industry professionals</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Department *</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      disabled={isSubmitting}
                    >
                      <option value="">Select department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  {/* Batch */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Batch Number *</label>
                    <Input
                      type="text"
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      placeholder="e.g., 2023"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Member Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Member Type *</label>
                    <select
                      value={formData.memberType}
                      onChange={(e) => setFormData({ ...formData, memberType: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      disabled={isSubmitting}
                    >
                      <option value="">Select member type</option>
                      {memberTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Payment Period */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Payment Period *</label>
                    <p className="text-sm text-muted-foreground mb-2">Select the month and year you're paying for</p>
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        value={formData.month}
                        onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        disabled={isSubmitting}
                      >
                        <option value="">Month</option>
                        {months.map((month) => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        disabled={isSubmitting}
                      >
                        <option value="">Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    {formData.month && formData.year && (
                      <div className={`mt-3 p-3 rounded-lg text-center border-2 ${
                        isCurrentMonthYear() 
                          ? 'bg-primary/10 border-primary/30' 
                          : 'bg-blue-500/10 border-blue-500/30'
                      }`}>
                        <span className={`font-semibold ${
                          isCurrentMonthYear() ? 'text-primary' : 'text-blue-500'
                        }`}>
                          Paying for: {formData.month} {formData.year}
                          {isCurrentMonthYear() && ' (Current Month)'}
                          {!isCurrentMonthYear() && ' (Archive)'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Payment Method *</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handlePaymentMethodSelect("bKash")}
                        className={`h-20 rounded-lg font-semibold text-lg transition-all border-2 ${
                          formData.paymentMethod === "bKash"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card hover:bg-accent border-border"
                        }`}
                        disabled={isSubmitting}
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-2xl mb-1">📱</span>
                          <span>bKash</span>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePaymentMethodSelect("Nagad")}
                        className={`h-20 rounded-lg font-semibold text-lg transition-all border-2 ${
                          formData.paymentMethod === "Nagad"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card hover:bg-accent border-border"
                        }`}
                        disabled={isSubmitting}
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-2xl mb-1">💳</span>
                          <span>Nagad</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Transaction ID */}
                  {formData.paymentMethod && (
                    <div className="animate-in fade-in">
                      <label className="block text-sm font-medium mb-2">Transaction ID *</label>
                      <Input
                        type="text"
                        value={formData.transactionId}
                        onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                        placeholder="Enter transaction ID"
                        disabled={isSubmitting}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Enter the transaction ID from your {formData.paymentMethod} payment
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.month || !formData.year}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Payment Information"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="mt-12 max-w-6xl mx-auto border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-primary">ℹ️</span>
                Payment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">For bKash:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                    <li>Open your bKash app</li>
                    <li>Select "Send Money"</li>
                    <li>Enter number: <span className="font-mono font-semibold text-primary">{BKASH_NUMBER}</span></li>
                    <li>Enter amount: <span className="font-semibold text-primary">৳{MEMBERSHIP_FEE}</span></li>
                    <li>Add reference: Your name</li>
                    <li>Complete the payment</li>
                    <li>Copy the Transaction ID</li>
                    <li>Fill the form above with your details</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">For Nagad:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                    <li>Open your Nagad app</li>
                    <li>Select "Send Money"</li>
                    <li>Enter number: <span className="font-mono font-semibold text-primary">{NAGAD_NUMBER}</span></li>
                    <li>Enter amount: <span className="font-semibold text-primary">৳{MEMBERSHIP_FEE}</span></li>
                    <li>Add reference: Your name</li>
                    <li>Complete the payment</li>
                    <li>Copy the Transaction ID</li>
                    <li>Fill the form above with your details</li>
                  </ol>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong className="text-primary">Important:</strong> After submitting, your payment will be verified within 24 hours. 
                  Your payment will be recorded in a sheet named "{formData.month && formData.year ? `${formData.month}-${formData.year}` : 'Month-Year'}". 
                  The sheet will be created automatically if it doesn't exist yet.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Payment Info Modal */}
      {showPaymentInfo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full border-primary bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Payment Information - {selectedMethod}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">Follow these steps to complete your payment</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Send money to:</p>
                  <p className="text-2xl font-bold text-primary font-mono">
                    {selectedMethod === "bKash" ? BKASH_NUMBER : NAGAD_NUMBER}
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-2">Amount:</p>
                  <p className="text-2xl font-bold text-primary">৳{MEMBERSHIP_FEE}</p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    After completing the payment through {selectedMethod}, enter your transaction ID in the form.
                  </p>
                </div>
                
                <Button
                  onClick={() => setShowPaymentInfo(false)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  Got it, I'll make the payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MembershipFeePage;