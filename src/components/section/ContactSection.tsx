

function ContactSection() {
  return (
    <section id='contact' className="min-h-screen py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">Contact Me</h2>
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300">
          
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-4 h-4 bg-cyan-400 rounded-full"></span>
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 bg-[#222222] border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </form>
          </div>

        </div>
    </section>
  );
}

export default ContactSection;
