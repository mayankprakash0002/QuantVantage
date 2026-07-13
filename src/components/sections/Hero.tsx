import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, DollarSign, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-card border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-elegant">
            <TrendingUp className="h-4 w-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-foreground">Professional Stock Market Analysis</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slideUp">
            Master Your
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Investment</span>
            <br />
            Journey
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get expert stock market insights, professional analysis tools, and premium services 
            to elevate your trading strategy and maximize your returns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Start Free Analysis
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="premium" size="lg" className="min-w-[200px]">
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-float">
              <div className="bg-gradient-card p-4 rounded-lg border border-primary/10 shadow-elegant mb-2">
                <BarChart3 className="h-8 w-8 text-primary mx-auto" />
              </div>
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Successful Trades</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "1s" }}>
              <div className="bg-gradient-card p-4 rounded-lg border border-primary/10 shadow-elegant mb-2">
                <DollarSign className="h-8 w-8 text-secondary mx-auto" />
              </div>
              <div className="text-2xl font-bold text-foreground">$2M+</div>
              <div className="text-sm text-muted-foreground">Portfolio Managed</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "2s" }}>
              <div className="bg-gradient-card p-4 rounded-lg border border-primary/10 shadow-elegant mb-2">
                <TrendingUp className="h-8 w-8 text-secondary mx-auto" />
              </div>
              <div className="text-2xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;