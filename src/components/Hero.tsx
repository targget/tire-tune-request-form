
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Профессиональный
          <span className="text-orange-500"> шиномонтаж</span>
          <br />в Москве
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Качественные услуги по замене и ремонту шин. Современное оборудование, 
          опытные мастера и гарантия на все виды работ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToForm}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all transform hover:scale-105"
          >
            Записаться на шиномонтаж
          </Button>
          <Button 
            variant="outline" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all"
          >
            Узнать цены
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
