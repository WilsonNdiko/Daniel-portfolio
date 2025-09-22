export default function HomePage() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-4">Hi, I’m Daniel 👋</h2>
      <p className="text-lg mb-6">
        A Software Engineer passionate about building scalable web applications.
      </p>
      
      <a
        href="/projects"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
