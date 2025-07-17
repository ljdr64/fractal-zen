import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="max-w-5xl mx-auto bg-white flex flex-col">
        <div className="py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-start small:items-end justify-between border-t border-gray-200 px-20 py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4">¿Tienes preguntas?</h3>
            <span className="txt-medium">
              Puedes encontrar preguntas frecuentes y respuestas en nuestra
              página de atención al cliente.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Atención al cliente
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
