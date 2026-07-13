import { properties } from "@/lib/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedListings() {
  return (
    <section id="listings" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Homes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A hand-picked selection of our newest and most-loved listings,
            updated every week.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
