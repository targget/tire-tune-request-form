
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
            Ш
          </div>
          <h1 className="text-2xl font-bold">ШиноПро</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span className="text-lg font-semibold">+7 (999) 123-45-67</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>г. Москва, ул. Автомобильная, 15</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
