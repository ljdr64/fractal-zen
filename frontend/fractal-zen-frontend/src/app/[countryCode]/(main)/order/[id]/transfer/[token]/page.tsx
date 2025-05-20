import { Heading, Text } from "@medusajs/ui"
import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        <Heading level="h1" className="text-xl text-zinc-900">
          Solicitud de transferencia del pedido {id}
        </Heading>
        <Text className="text-zinc-600">
          Ha recibido una solicitud para transferir la propiedad de su pedido (
          {id}). Si acepta esta solicitud, puede aprobarla haciendo clic en el
          botón de abajo.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <Text className="text-zinc-600">
          Si acepta, el nuevo propietario asumirá todas las responsabilidades y
          permisos asociados a este pedido.
        </Text>
        <Text className="text-zinc-600">
          Si no acepta esta solicitud o desea conservar la propiedad, no es
          necesario realizar ninguna otra acción.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <TransferActions id={id} token={token} />
      </div>
    </div>
  )
}
