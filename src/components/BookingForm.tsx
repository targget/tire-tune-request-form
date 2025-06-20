
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Заявка отправлена:", formData);
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking-form" className="py-16 px-6 bg-slate-100">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="bg-slate-800 text-white text-center">
            <CardTitle className="text-3xl">Записаться на шиномонтаж</CardTitle>
            <p className="text-gray-300 mt-2">
              Оставьте заявку и мы свяжемся с вами для уточнения деталей
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold text-slate-700">
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 py-3 text-lg"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg font-semibold text-slate-700">
                  Номер телефона *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 py-3 text-lg"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-lg font-semibold text-slate-700">
                  Нужная услуга
                </Label>
                <Input
                  id="service"
                  name="service"
                  type="text"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 py-3 text-lg"
                  placeholder="Например: замена колес, балансировка"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-lg font-semibold text-slate-700">
                  Дополнительная информация
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 text-lg"
                  rows={4}
                  placeholder="Укажите марку автомобиля, размер шин или другие детали"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-xl font-semibold transition-all transform hover:scale-105"
              >
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
