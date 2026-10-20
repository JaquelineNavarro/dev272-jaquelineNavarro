import { createContext, useContext, useState } from "react";
import { Order, orders } from "@/data/orders";

type OrdersContextType = {
  allOrders: Order[];
  markAsReady: (id: string) => void;
  markAsCancel: (id: string) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [allOrders, setAllOrders] = useState<Order[]>(orders);

  function markAsReady(id: string) {
    setAllOrders((currentOrders) =>
      currentOrders.map((order) => {
        if (order.id === id) {
          return { ...order, status: "Ready" };
        }
        return order;
      }),
    );
  }

  function markAsCancel(id: string) {
    setAllOrders((currentOrders) =>
      currentOrders.map((order) => {
        if (order.id === id) {
          return { ...order, status: "Cancelled" };
        }
        return order;
      }),
    );
  }
  return (
    <OrdersContext.Provider value={{ allOrders, markAsReady, markAsCancel }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error("useOrders must be used inside OrdersProvider");
  }
  return context;
}
