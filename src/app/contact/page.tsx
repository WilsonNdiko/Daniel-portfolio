 
export default function ContactPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
      <p className="mb-6">
        Let’s connect! You can reach me at{" "}
        <a
          href="mailto:daniel@example.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          daniel@example.com
        </a>
        .
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded-md"
          rows={4}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
