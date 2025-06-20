
const Advantages = () => {
  const advantages = [
    {
      icon: "⚡",
      title: "Быстро",
      description: "Замена колес за 15-20 минут"
    },
    {
      icon: "🛠️",
      title: "Качественно",
      description: "Современное оборудование и опытные мастера"
    },
    {
      icon: "💰",
      title: "Выгодно",
      description: "Конкурентные цены и скидки постоянным клиентам"
    },
    {
      icon: "🛡️",
      title: "Гарантия",
      description: "Гарантия на все виды выполненных работ"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Почему выбирают нас
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">{advantage.title}</h4>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
