type FeatureProps = {
  feature: {
    label: string;
    title: string;
    description: string;
  };
};

export default function FeatureCard({
  feature,
}: FeatureProps) {
  return (
    <div
      className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >

      <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 mb-4">
        {feature.label}
      </p>

      <h3 className="text-2xl font-semibold mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>

    </div>
  );
}