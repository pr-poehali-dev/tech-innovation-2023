import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Choice & Scarcity",
    description: "Every day we face limited resources — time and money. Choosing one thing means giving up another. This trade-off is called opportunity cost.",
    icon: "brain",
    badge: "Slide 2",
  },
  {
    title: "Family Budget",
    description: "We act as mini-managers: planning income and expenses, allocating funds for essential payments and savings. This builds financial literacy.",
    icon: "lock",
    badge: "Slide 3",
  },
  {
    title: "Market & Prices",
    description: "When we go to the store, we enter market relations. A product's price reflects the balance between demand and supply.",
    icon: "globe",
    badge: "Slide 4",
  },
  {
    title: "Labor & Human Capital",
    description: "Education and skills are investments in ourselves. In-demand specialists earn more because their knowledge is a valuable resource.",
    icon: "zap",
    badge: "Slide 5",
  },
  {
    title: "Consumption & Taxes",
    description: "Every purchase includes indirect taxes like VAT that fund roads, parks, police, and medical services — coming back to us all.",
    icon: "link",
    badge: "Slide 6",
  },
  {
    title: "Global Connections",
    description: "Coffee from Brazil, smartphones from China, software from the US — global trade makes goods more accessible and diverse for everyone.",
    icon: "target",
    badge: "Slide 8",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Key Economic Concepts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore the fundamental principles that govern how we produce, distribute, and consume goods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}