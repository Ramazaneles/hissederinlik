import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const BlogSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
          Borsa Analiz Blog
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card border-muted/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">
                <Link to="/blog/bist-100-teknik-analiz" className="hover:text-primary transition-colors">
                  BIST 100 Teknik Analiz: 2024 Yılı Beklentileri
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-muted">
                <CalendarDays className="w-4 h-4" />
                15 Mart 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">
                2024 yılında BIST 100 endeksinin teknik analiz perspektifinden değerlendirmesi, 
                destek ve direnç noktaları, trend analizi ve yatırımcılar için önemli göstergeler 
                bu yazımızda ele alınmıştır.
              </p>
              <Link 
                to="/blog/bist-100-teknik-analiz" 
                className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                Devamını Oku →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;