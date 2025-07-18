import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-10 sm:gap-y-6 sm:flex-row items-start sm:justify-between py-32 sm:py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-2xl txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Fractal Zen Tienda
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2 text-ui-fg-subtle txt-small">
                <span className="text-xl txt-small-plus txt-ui-fg-base">
                  Categorias
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={"hover:text-ui-fg-base"}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {/* {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Colecciones
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
            <div className="flex flex-col gap-y-2 text-ui-fg-subtle txt-small">
              <span className="text-xl txt-small-plus txt-ui-fg-base">
                Fractal Zen
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a href="/sobre-nosotros" className="hover:text-ui-fg-base">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:text-ui-fg-base">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="/preguntas-frecuentes"
                    className="hover:text-ui-fg-base"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-envios"
                    className="hover:text-ui-fg-base"
                  >
                    Política de envíos
                  </a>
                </li>
                <li>
                  <a href="/catalogo" className="hover:text-ui-fg-base">
                    Ver catálogo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="text-sm txt-compact-small">
            © {new Date().getFullYear()} Fractal Zen. Todos los derechos
            reservados.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
