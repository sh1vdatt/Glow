export function SkincareMythsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 text-center mb-12">
        Busting Skincare Myths Like a Pro 🫧
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-purple-50 rounded-2xl p-6">
          <div className="text-center mb-4">
            <div className="text-sm text-purple-400 mb-2">— Myth —</div>
            <h3 className="text-xl font-semibold mb-2">
              Oily Skin Doesn't Need Moisturizer
            </h3>
            <div className="font-medium mb-2">Did you know?</div>
          </div>
          <p className="text-gray-600 text-center">
            Skipping moisturizer can actually make oily skin worse! When your
            skin is dehydrated, it produces even more oil to compensate. Choose
            a light, oil-free moisturizer to maintain balance.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6">
          <div className="text-center mb-4">
            <div className="text-sm text-purple-400 mb-2">— Myth —</div>
            <h3 className="text-xl font-semibold mb-2">
              Expensive Products Work Better
            </h3>
            <div className="font-medium mb-2">Did you know?</div>
          </div>
          <p className="text-gray-600 text-center">
            Price doesn't always reflect effectiveness. Many affordable products
            contain the same active ingredients found in high-end skincare. It's
            all about finding the right ingredients for your skin type and
            concerns.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6">
          <div className="text-center mb-4">
            <div className="text-sm text-purple-400 mb-2">— Myth —</div>
            <h3 className="text-xl font-semibold mb-2">
              You Don't Need Sunscreen on Cloudy Days
            </h3>
            <div className="font-medium mb-2">Did you know?</div>
          </div>
          <p className="text-gray-600 text-center">
            Even on cloudy days, 80% of UV rays penetrate the clouds and can
            damage your skin. Wearing sunscreen daily, rain or shine, helps
            prevent premature aging and reduces the risk of skin cancer.
          </p>
        </div>
      </div>
    </section>
  );
}
