export default function News() {
  const articles = [
    {
      id: 1,
      title: "Pertamina launches sustainable energy pilot program",
      excerpt:
        "Pertamina announced a pilot program to accelerate adoption of renewable energy across regional operations.",
      date: "2025-10-01",
      tag: "Sustainability",
      img: "/images/1.jpg",
    },
    {
      id: 2,
      title: "Annual report 2025: navigating change",
      excerpt:
        "The 2025 annual report highlights Pertamina's commitment to resilience and long-term value creation.",
      date: "2025-09-15",
      tag: "Reports",
      img: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Community program expands education access",
      excerpt:
        "A community outreach program expanded scholarships and training for local students.",
      date: "2025-08-20",
      tag: "Community",
      img: "/images/3.jpg",
    },
    {
      id: 4,
      title: "New refinery processes reduce emissions",
      excerpt:
        "Upgrades at refinery sites lead to measurable emission reductions this quarter.",
      date: "2025-07-05",
      tag: "Operations",
      img: "/images/4.svg",
    },
  ];

  const featured = articles[0];

  return (
    <main className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page title */}
        <header className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            News & Updates
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Latest announcements, reports, and stories from Pertamina and our
            partners.
          </p>
        </header>
        {/* HERO / FEATURED */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 items-start">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <div className="text-sm uppercase tracking-wider text-indigo-300">
                  Featured
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold mt-2">
                  {featured.title}
                </h1>
                <p className="mt-3 text-sm md:text-base text-white/90">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs text-white/80">{featured.date}</span>
                  <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                    {featured.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Latest News</h3>
              <ul className="space-y-3">
                {articles.slice(1, 4).map((a) => (
                  <li key={a.id} className="flex items-start gap-3">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                    <div>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-900 hover:text-indigo-600"
                      >
                        {a.title}
                      </a>
                      <div className="text-xs text-gray-500">{a.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* ARTICLE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.id}
              className="rounded-2xl overflow-hidden border hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6 bg-white">
                <div className="text-xs text-gray-500">
                  {a.date} · <span className="text-indigo-600">{a.tag}</span>
                </div>
                <h4 className="mt-2 text-lg font-semibold text-gray-900">
                  {a.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#"
                    className="text-indigo-600 font-medium inline-flex items-center gap-2"
                  >
                    Read more{" "}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                  <div className="text-xs text-gray-400">Pertamina</div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700">
            Load more
          </button>
        </div>
      </div>
    </main>
  );
}
