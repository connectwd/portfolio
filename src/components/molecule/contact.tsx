export default function ContactForm() {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Lets Connect</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
  