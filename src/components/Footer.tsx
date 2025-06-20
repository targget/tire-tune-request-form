
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
                Ш
              </div>
              <h3 className="text-2xl font-bold">ШиноПро</h3>
            </div>
            <p className="text-gray-300">
              Профессиональный шиномонтаж в Москве. 
              Качество, скорость и надежность - наши главные принципы.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-orange-500">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>г. Москва, ул. Автомобильная, 15</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-orange-500">Режим работы</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <div>
                  <p>Пн-Пт: 8:00 - 20:00</p>
                  <p>Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ШиноПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
