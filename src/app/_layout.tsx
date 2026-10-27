import { SearchProvider } from "@/context/searchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

// Root layout. Every screen file inside src/app/ is a route.
// Week 3 replaces this with Stack + Tabs layouts.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
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
      </SearchProvider>
    </QueryClientProvider>
  );
}
