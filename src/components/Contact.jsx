export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-800 text-white rounded-xl">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get a Free Quote</h2>
        <p className="mb-8 text-green-100">
          Tell us about your project and we'll get back to you with a tailored quote.
        </p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded text-gray-900"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded text-gray-900"
          />
          <textarea
            placeholder="Project details..."
            className="p-3 rounded text-gray-900"
            rows="4"
          />

          <button
            className="bg-white text-green-800 font-semibold py-3 rounded hover:bg-green-100 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
