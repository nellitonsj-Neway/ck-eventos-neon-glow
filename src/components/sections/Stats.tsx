import Counter from '@/components/ui/counter';

const stats = [
  {
    icon: '🎉',
    value: 500,
    suffix: '+',
    label: 'Eventos Realizados',
  },
  {
    icon: '⭐',
    value: 4.9,
    suffix: '/5',
    label: 'Avaliação Média',
  },
  {
    icon: '👥',
    value: 10000,
    suffix: '+',
    label: 'Pessoas Felizes',
  },
  {
    icon: '🏆',
    value: 10,
    suffix: ' Anos',
    label: 'de Experiência',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-gradient-primary"
                />
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
