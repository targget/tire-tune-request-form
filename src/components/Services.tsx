
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Замена колес",
      description: "Снятие и установка колес любой сложности",
      price: "от 800 ₽"
    },
    {
      title: "Балансировка",
      description: "Компьютерная балансировка на современном оборудовании",
      price: "от 500 ₽"
    },
    {
      title: "Ремонт шин",
      description: "Устранение проколов и порезов с гарантией качества",
      price: "от 300 ₽"
    },
    {
      title: "Хранение шин",
      description: "Сезонное хранение в специально оборудованном помещении",
      price: "от 1500 ₽/сезон"
    },
    {
      title: "Шиномонтаж на месте",
      description: "Выездной шиномонтаж в пределах МКАД",
      price: "от 2000 ₽"
    },
    {
      title: "Мойка колес",
      description: "Профессиональная мойка дисков и шин",
      price: "от 200 ₽"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Наши услуги
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-orange-500">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
