"use client"
import { KDSBar } from "@/components/kdsbar"; 
import { DotBackground } from "@/components/dotbg";
import MLoader from "@/components/ui/multisteploader";
import OrderTicket from "@/components/kitchen/order-ticket"; // Ensure path is correct
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Kitchen() {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    return <div><MLoader/></div>;
  }

  const isPartOfOrganization = user.organizationMemberships && user.organizationMemberships.length > 0;

  // Redirect if not part of an organization
  if (!isPartOfOrganization) {
    router.push('/onboarding');
    return <div><MLoader/></div>;
  }
  const orderCreatedAt=new Date();
  return (
    <div className="relative">
      <DotBackground />
      <div className="relative z-10">
        <KDSBar />
        <div className="grid grid-cols-3 gap-4 p-4">  {/* Adjust grid styling as needed */}
          <OrderTicket
            orderType="delivery"
            orderNumber={3102}
            deliveryCompany="Uber Eats"
            orderItems={[
              { id: '1', quantity: 2, name: 'Pepperoni Pizza', specialInstructions: 'Extra cheese, no onions' },
              { id: '2', quantity: 1, name: 'Garlic Bread', specialInstructions: 'Add garlic' }
            ]}
            orderCreatedAt={orderCreatedAt}
          />
          <OrderTicket
            orderType="pickup"
            orderNumber={3103}
            customerName="John Doe"
            orderItems={[
              { id: '3', quantity: 1, name: 'Spaghetti Carbonara', specialInstructions: 'Extra bacon' },
              { id: '4', quantity: 1, name: 'Tiramisu', specialInstructions: 'No nuts' }
            ]}
            orderCreatedAt={orderCreatedAt}
          />
          <OrderTicket
            orderType="dine-in"
            orderNumber={3104}
            tableNumber="5"
            waitstaffName="Alice"
            orderItems={[
              { id: '5', quantity: 1, name: 'Chicken Alfredo', specialInstructions: 'No mushrooms' },
              { id: '6', quantity: 1, name: 'Cheesecake', specialInstructions: 'Add strawberries' },
              { id: '26', quantity: 3, name: 'Biryani', specialInstructions: 'Extra spicy' },
              { id: '27', quantity: 2, name: 'Pasta', specialInstructions: 'No cheese'}
            ]}
            orderCreatedAt={orderCreatedAt}
          />
        </div>
      </div>
    </div>
  );
}