import { Stack } from "expo-router";
import { OrdersProvider } from "@/context/orderContext";

// Root layout. Every screen file inside src/app/ is a route.
// Week 3 replaces this with Stack + Tabs layouts.
export default function RootLayout() {
  return (
    <OrdersProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="orders/[id]"
          options={{
            title: "Order Details",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </OrdersProvider>
  );
}
