export function BlogSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 text-center mb-12">
        Unleash The Treasure Trove:
        <br />
        Blog Articles 📁
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="group">
          <div className="aspect-square rounded-full overflow-hidden mb-6 relative">
            <img
              src="/placeholder.svg"
              alt="Future of Skincare"
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Future of Skincare</h3>
          <p className="text-gray-600 mb-4">
            Predict future trends in skincare technology, particularly focusing
            on advancements in scanning and analysis tools like the one
            offered...
          </p>
          <button className="px-6 py-2 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
            Read More
          </button>
        </div>

        <div className="group">
          <div className="aspect-square rounded-full overflow-hidden mb-6 relative">
            <img
              src="/placeholder.svg"
              alt="Behind The Label"
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Behind The Label</h3>
          <p className="text-gray-600 mb-4">
            Explore how the ingredient scanner can help consumers understand
            complicated product labels and uncover the truth behind the
            ingredients...
          </p>
          <button className="px-6 py-2 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
            Read More
          </button>
        </div>

        <div className="group">
          <div className="aspect-square rounded-full overflow-hidden mb-6 relative">
            <img
              src="/placeholder.svg"
              alt="Myth vs Reality"
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Myth vs Reality</h3>
          <p className="text-gray-600 mb-4">
            Use the scanner to debunk popular skincare myths by providing
            scientific facts about ingredients commonly found in beauty
            products...
          </p>
          <button className="px-6 py-2 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
