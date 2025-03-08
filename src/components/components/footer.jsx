import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="font-marbley">glow</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">What's Project Glow</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact us</h3>
            <p className="text-gray-600">hello@projectglowskin.com</p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">For Business</h3>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Fascinated how to glow with your skin?
            </h3>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-full"
              />
              <button className="px-6 py-2 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
                Subscribe
              </button>
            </div>
            <button className="w-full px-6 py-2 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
              Try Project Glow Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#privacy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-600 hover:text-gray-900">
              Terms & conditions
            </a>
            <a href="#support" className="text-gray-600 hover:text-gray-900">
              Support
            </a>
          </div>
          <div className="text-gray-600">
            © 2025 Project Glow. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#instagram" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </a>
            <a href="#facebook" className="text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
            </a>
            <a href="#twitter" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
            <a href="#linkedin" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
