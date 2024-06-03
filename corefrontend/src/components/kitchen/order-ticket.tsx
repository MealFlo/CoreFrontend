import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconTruck, IconToolsKitchen2, IconPaperBag } from "@tabler/icons-react";

interface OrderItem {
  id: string;
  quantity: number;
  name: string;
  specialInstructions: string;
}

interface OrderTicketProps {
  orderType: 'pickup' | 'delivery' | 'dine-in';
  orderNumber: number;
  customerName?: string;
  deliveryCompany?: string;
  tableNumber?: string;
  waitstaffName?: string;
  orderItems: OrderItem[];
}

const OrderTicket: FC<OrderTicketProps> = ({
  orderType,
  orderNumber,
  customerName,
  deliveryCompany,
  tableNumber,
  waitstaffName,
  orderItems
}) => {
  const getOrderIcon = () => {
    switch (orderType) {
      case 'pickup': return <IconPaperBag className="w-6 h-6" />;
      case 'delivery': return <IconTruck className="w-6 h-6" />;
      case 'dine-in': return <IconToolsKitchen2 className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <Card className="w-full max-w-xl relative">
      {/* Gradient background only in the top quarter of the card with lower z-index */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-red-300 to-transparent z-0"></div>
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <CardTitle>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</CardTitle>
          <div className="flex items-center gap-2">
            {getOrderIcon()}
            <Badge variant="secondary">Pending</Badge>
          </div>
        </div>
        <CardDescription>
          Order #{orderNumber} &middot; {customerName || deliveryCompany || `Table ${tableNumber}: ${waitstaffName}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="grid gap-4">
          {orderItems.map(item => (
              <div key={item.id} className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="font-bold">{item.quantity}</div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div>{item.name}</div>
                    <Checkbox id={`checkbox-${item.id}`} className="ml-auto"/>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.specialInstructions}
                  </div>
                </div>
                <Separator className="col-span-full"/>
              </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="relative z-10 flex justify-between">
        <div/>
        <div className="flex items-center gap-2">
          <Button variant="outline">Reject</Button>
          <Button>Accept</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default OrderTicket;