export default function FormSection({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <p className="mt-2 text-gray-400">{description}</p>
      </div>

      {children}
    </section>
  );
}
