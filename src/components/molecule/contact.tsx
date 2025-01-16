import { FiDownload } from "react-icons/fi";
import Button from "../atoms/buttons/button";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 mx-auto">
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
          <Button
            variant="primary-button"
            text="Send Message"
            styles="w-full shadow-inner-glow justify-center"
          />
          <Button variant="secondary-link" text={"View CV"} icon={FiDownload} href="/jake_owen_cv.pdf" styles="w-full shadow-inner-glow justify-center" />
        </form>
      </div>
    </section>
  );
}
