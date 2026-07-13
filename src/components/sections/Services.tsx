import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  BarChart3,
  BookOpen,
  Users,
  Zap,
  Shield,
  Star,
  CheckCircle,
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Premium Market Analysis',
      description:
        'Daily market insights, technical analysis, and trading signals from expert analysts.',
      price: '$49',
      period: '/month',
      icon: TrendingUp,
      popular: true,
      link: '/subscribe/market-analysis', // ✅ Added link
      features: [
        'Daily market reports',
        'Technical analysis',
        'Trading signals',
        'Risk management tips',
        'Email support',
      ],
    },
    {
      title: 'Pro Trading Course',
      description:
        'Comprehensive trading education with live sessions and personalized mentoring.',
      price: '$199',
      period: 'one-time',
      icon: BookOpen,
      popular: false,
      link: '/courses/trading-course', // ✅ Added link
      features: [
        '20+ video lessons',
        'Live trading sessions',
        'Personal mentor',
        'Trading strategies',
        'Certificate of completion',
      ],
    },
    {
      title: 'Elite Portfolio Management',
      description:
        'Full portfolio management service with dedicated analyst and quarterly reviews.',
      price: '$299',
      period: '/month',
      icon: BarChart3,
      popular: false,
      link: '/services/portfolio-management', // ✅ Added link
      features: [
        'Dedicated analyst',
        'Custom portfolio',
        'Quarterly reviews',
        'Risk assessment',
        'Priority support',
      ],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Secure & Trusted',
      description: 'Bank-level security with encrypted data protection',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live market data and instant notifications',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified analysts with 10+ years experience',
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
            Premium Services
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
            Elevate Your Trading
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our professional services designed to accelerate your
            investment success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 ${
                  service.popular ? 'scale-105 border-2 border-primary/30' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-success text-secondary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="bg-gradient-hero p-3 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground">
                      {service.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ Button with link */}
                  <Button
                    asChild
                    variant={service.popular ? 'hero' : 'premium'}
                    className="w-full"
                  >
                    <a href={'https://www.angelone.in/trade/home'}>
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-card p-4 rounded-full w-fit mx-auto mb-4 border border-primary/10">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
