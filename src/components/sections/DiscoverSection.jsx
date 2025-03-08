export function DiscoverSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="h-24 w-24 bg-lime-200 rounded-full absolute -z-10"></div>
          <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center relative left-4 top-4">
            <img
              src="/placeholder.svg?height=60&width=60"
              alt="Profile"
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </div>
      <h2 className="text-5xl md:text-6xl font-marbley text-purple-400 mb-4 transition-opacity duration-700 fade-in-section">
        Discover Your
        <br />
        Youthful Glow
        <br />
        with Personalised Skincare
      </h2>
      <div className="mt-4 text-purple-300">
        <p className="font-schibsted">Powered by AI.</p>
        <p className="font-schibsted">Backed by Science.</p>
      </div>
    </section>
  );
}
