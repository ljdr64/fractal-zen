import { Suspense } from "react"

import { FaShoppingCart, FaUser } from "react-icons/fa"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="hidden sm:flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-2xl txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Fractal Zen
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <FaUser className="w-6 h-6" />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-0.5 items-center text-lg cursor-pointer select-none">
                      <FaShoppingCart className="w-6 h-6" />
                      <div className="absolute top-4 right-4 flex justify-center items-center rounded-full bg-black w-4 h-4 font-size-bold text-xs text-white">
                        0
                      </div>
                    </div>
                  </div>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
