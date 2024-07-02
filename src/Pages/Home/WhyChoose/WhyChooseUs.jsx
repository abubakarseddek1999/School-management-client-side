
const WhyChooseUs = () => {
  const features = [
    {
      title: 'VARITY COURSES',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas magnam quae voluptatum voluptates asperiores iusto error quo sed nobis.',
      icon: '📘', // You can replace these with actual icon components if needed
    },
    {
      title: 'ATTRACTIVE PRICES',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas magnam quae voluptatum voluptates asperiores iusto error quo sed nobis.',
      icon: '💲',
    },
    {
      title: 'EVENTS',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas magnam quae voluptatum voluptates asperiores iusto error quo sed nobis.',
      icon: '🎉',
    },
    {
      title: 'TALENTED TEACHERS',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas magnam quae voluptatum voluptates asperiores iusto error quo sed nobis.',
      icon: '👩‍🏫',
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
