import { fetchOrders } from "@/api/orders";
import { styles } from "@/styles/indexStyles";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import ReadyOrderCard from "../../components/readyOrderCard";

export default function OrdersReady() {
  const {
    data: orders,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  const readyOrders = (orders ?? []).filter(
    (order) => order.status === "Ready",
  );
  if (isPending) {
    return (
      <View style={styles.orderDetailsContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading ready orders...</Text>
      </View>
    );
  }
  if (isError) {
  return (
    <View style={styles.orderDetailsContainer}>
      <Text>Error loading ready orders: {error.message}</Text>
    </View>
  );
}
  return (
    <FlatList
      data={readyOrders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReadyOrderCard order={item} />}
      ListEmptyComponent={<Text>No ready orders yet.</Text>}
    />
  );
}
