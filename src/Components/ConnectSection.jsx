import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const ConnectWithUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-50 mb-6">
            Connect with Us
          </h2>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-6 text-gray-600">
            <a href="https://www.facebook.com/nrcollage" target="_blank" rel="noreferrer">
              <Facebook className="w-8 h-8 hover:text-blue-600 transition" />
            </a>
            <a href="https://www.instagram.com/dpsg_meerutroad" target="_blank" rel="noreferrer">
              <Instagram className="w-8 h-8 hover:text-pink-500 transition" />
            </a>
            <a href="https://www.linkedin.com/school/delhi-public-school-ghaziabad/" target="_blank" rel="noreferrer">
              <Linkedin className="w-8 h-8 hover:text-blue-700 transition" />
            </a>
            <a href="https://www.youtube.com/channel/UCxxxxx" target="_blank" rel="noreferrer">
              <Youtube className="w-8 h-8 hover:text-red-600 transition" />
            </a>
          </div>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facebook Embed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border font-sans">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Facebook"
            ></iframe>
          </div>

          {/* LinkedIn Embed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border font-sans">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890" 
              height="500"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="LinkedIn Post"
            ></iframe>
          </div>

          {/* Instagram Embed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border font-sans">
            <iframe
              src="https://www.instagram.com/p/C1XXXXX/embed" 
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allow="encrypted-media"
              title="Instagram"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;