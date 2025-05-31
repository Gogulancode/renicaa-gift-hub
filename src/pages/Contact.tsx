import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-accent rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-renicaa-green mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            We'd love to hear from you! Whether you have a question about products, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-renicaa-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7A8.38 8.38 0 013 13.5c0-4.7 3.8-8.5 8.5-8.5S20 8.8 20 13.5z"/><circle cx="12" cy="13.5" r="2.5"/></svg>
              <span>123, Renicaa Street, Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-renicaa-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12v1a4 4 0 01-8 0v-1"/><path d="M12 19v2"/><path d="M7 19h10"/><path d="M12 3v2"/><path d="M5 7l1.5 1.5"/><path d="M19 7l-1.5 1.5"/></svg>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-renicaa-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12v1a4 4 0 01-8 0v-1"/><path d="M12 19v2"/><path d="M7 19h10"/><path d="M12 3v2"/><path d="M5 7l1.5 1.5"/><path d="M19 7l-1.5 1.5"/></svg>
              <span>hello@renicaa.com</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 bg-background rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
          <h3 className="text-xl font-semibold text-foreground mb-2">Send us a message</h3>
          <div>
            <label className="block text-muted-foreground mb-1 font-medium">Name</label>
            <input type="text" required className="w-full border border-border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-renicaa-green" />
          </div>
          <div>
            <label className="block text-muted-foreground mb-1 font-medium">Email</label>
            <input type="email" required className="w-full border border-border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-renicaa-green" />
          </div>
          <div>
            <label className="block text-muted-foreground mb-1 font-medium">Message</label>
            <textarea rows={4} required className="w-full border border-border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-renicaa-green" />
          </div>
          <button type="submit" className="w-full bg-renicaa-green text-white py-2 rounded font-semibold hover:bg-renicaa-green-dark transition">
            Send Message
          </button>
        </form>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;