import { getOrderHistory } from "@/services/order";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import formatRelativeTime from "@/utils/format-relative-time";

export default async function OrderHistory() {
  const history = await getOrderHistory();

  return (
    <div className="mx-auto h-full max-w-7xl rounded-xl bg-white p-8 shadow-xl lg:my-12 lg:h-full">
      <h1 className="mb-6 text-center text-3xl font-semibold md:text-left">
        Order History
      </h1>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="max-h-[450px] min-h-[80px] overflow-auto rounded-md p-3 lg:max-h-[530px]">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-b-2 border-gray-200 hover:bg-white">
                <TableHead className="px-4 py-3 text-left text-lg font-semibold text-gray-700">
                  Order Id
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-lg font-semibold text-gray-700">
                  Placement Time
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-lg font-semibold text-gray-700">
                  Price
                </TableHead>
                <TableHead className="px-4 py-3 text-center text-lg font-semibold text-gray-700">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history ? (
                history?.orders.map((order) => (
                  <TableRow
                    key={order.order_id}
                    className="cursor-pointer transition-all duration-300 hover:bg-gray-100"
                  >
                    <TableCell className="px-4 py-3 text-sm font-medium">
                      {order.order_id}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm font-medium">
                      {formatRelativeTime(order.created_at)}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm font-medium">
                      {order.total_price.amount} {order.total_price.currency}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center text-sm font-medium">
                      <span
                        className={`rounded-lg px-3 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="py-24 text-center text-xl text-gray-400 hover:bg-white"
                  >
                    You have no order history
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-200 text-green-800";
    case "pending":
      return "bg-yellow-200 text-yellow-800";
    case "canceled":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
}
