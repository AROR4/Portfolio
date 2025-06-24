const HeroSection = () => {
  const cards = [
    { title: 'Resume', description: 'More about me' },
    { title: 'Projects', description: 'Showcase' },
    { title: 'Services', description: 'Offerings' },
    { title: 'Socials', description: 'Stay connected' },
  ];

  return (
    <section className="w-[90%] max-w-6xl mx-auto mt-16 text-white">
      <h1 className="text-3xl font-bold mb-8">A GRAPHIC DESIGNER<br />OMKARA PATIL</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
