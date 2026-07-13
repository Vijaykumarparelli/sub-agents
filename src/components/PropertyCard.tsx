import Image from "next/image";
import type { Property } from "@/lib/properties";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={`${property.title} at ${property.address}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
          {property.tag}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xl font-bold text-slate-900">
          {priceFormatter.format(property.price)}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-800">
          {property.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{property.address}</p>

        <dl className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <div className="flex items-baseline gap-1">
            <dt className="sr-only">Bedrooms</dt>
            <dd>
              <span className="font-semibold text-slate-900">
                {property.beds}
              </span>{" "}
              beds
            </dd>
          </div>
          <div className="flex items-baseline gap-1">
            <dt className="sr-only">Bathrooms</dt>
            <dd>
              <span className="font-semibold text-slate-900">
                {property.baths}
              </span>{" "}
              baths
            </dd>
          </div>
          <div className="flex items-baseline gap-1">
            <dt className="sr-only">Square feet</dt>
            <dd>
              <span className="font-semibold text-slate-900">
                {property.sqft.toLocaleString("en-US")}
              </span>{" "}
              sqft
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
