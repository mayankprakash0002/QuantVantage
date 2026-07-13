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
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Target,
} from 'lucide-react'
import analysisHero from '@/assets/analysis-hero.jpg'

const Blog = () => {
  const posts = [
    {
      title: '5 Key Indicators Every Trader Should Monitor',
      excerpt:
        'Learn about the essential technical indicators that can significantly improve your trading decisions and risk management.',
      category: 'Technical Analysis',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: analysisHero,
      featured: true,
    },
    {
      title: 'Market signals : Opportunity or Risk?',
      excerpt:
        'Understanding how to navigate volatile markets and turn uncertainty into profitable trading opportunities. ',
      category: 'Market Strategy',
      author: 'Mike Rodriguez',
      date: 'August 25, 2025',
      readTime: '7 min read',
      image: null,
      featured: true,
    },
    {
      title: 'Building a Diversified Portfolio in 2024',
      excerpt:
        'Strategies for creating a balanced investment portfolio that withstands market fluctuations and generates consistent returns.',
      category: 'Portfolio Management',
      author: 'Emma Thompson',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: null,
      featured: false,
    },
  ]

  const categories = [
    { name: 'Technical Analysis', icon: BarChart3, count: 12 },
    { name: 'Market Strategy', icon: Target, count: 8 },
    { name: 'Portfolio Management', icon: TrendingUp, count: 15 },
  ]

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-card border border-primary/20 text-primary">
            Market Insights
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
            Latest Market Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with expert insights, market trends, and professional
            trading strategies
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="flex items-center bg-gradient-card border border-primary/10 rounded-full px-4 py-2 hover:shadow-elegant transition-all duration-300 cursor-pointer"
              >
                <IconComponent className="h-4 w-4 text-primary mr-2" />
                <span className="text-foreground font-medium">
                  {category.name}
                </span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </div>
            )
          })}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="bg-gradient-card border-0 shadow-elegant overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-hero text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {posts[0].category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {posts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{posts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{posts[0].date}</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <Button variant="hero" className="w-fit">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog
