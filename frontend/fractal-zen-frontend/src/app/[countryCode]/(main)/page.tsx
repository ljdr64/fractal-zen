import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const categories = await listCategories()
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      {categories?.length > 0 && (
        <section className="content-container txt-xsmall-plus text-ui-fg-subtle flex flex-col items-start justify-between w-full h-full text-small-regular py-12">
          <h2 className="flex items-center justify-between text-2xl txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base mb-6">
            Categorias
          </h2>
          <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/${countryCode}/categories/${cat.handle}`}
                className="w-full max-w-[12rem] rounded shadow hover:shadow-lg transition overflow-hidden bg-white flex flex-col"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/images/categories/${cat.handle}.webp)`,
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">
                    {cat.name}
                  </h3>
                  {cat.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {cat.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
    </>
  )
}
