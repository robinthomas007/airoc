import { serviceItems } from './data';

export default function VariantServices() {
  return (
    <section id="services" className="bg-[#f7f8ff] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-center text-4xl font-medium tracking-tight text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Complete website solutions for your business
          </p>
          <div className="mt-4 text-indigo-600 font-bold bg-indigo-50 inline-block px-4 py-1 rounded-full text-sm">
            Starting from ₹4999
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="service-card bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex mb-6 h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-100">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
