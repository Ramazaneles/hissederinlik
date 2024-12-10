import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">İletişim</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-muted/20">
            <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                <Input placeholder="Adınız Soyadınız" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-posta</label>
                <Input type="email" placeholder="ornek@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mesajınız</label>
                <Textarea placeholder="Mesajınızı buraya yazın..." className="h-32" />
              </div>
              <Button type="submit" className="w-full">Gönder</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-muted/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-medium">E-posta</h3>
                    <p className="text-muted-foreground">iletisim@borsaanaliz.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-muted-foreground">+90 (212) 555 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Adres</h3>
                    <p className="text-muted-foreground">
                      Levent, 34330 Beşiktaş/İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;