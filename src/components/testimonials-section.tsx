import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Adam Smith",
    role: "Founder of Modern Economics",
    avatar: "/professional-woman-scientist.png",
    content:
      "It is not from the benevolence of the butcher or the baker that we expect our dinner, but from their regard to their own interest.",
  },
  {
    name: "John Keynes",
    role: "Economist, Cambridge University",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "In the long run we are all dead. Economics must be useful to society today, not just in abstract theory.",
  },
  {
    name: "Milton Friedman",
    role: "Nobel Prize in Economics",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "There is no such thing as a free lunch. Every resource has a cost — even when someone else appears to be paying.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Great Economists</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wisdom from the thinkers who shaped our understanding of economics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}