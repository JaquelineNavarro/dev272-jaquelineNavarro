import { fetchOrder } from "@/api/orders";
import { styles } from "@/styles/indexStyles";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function OrderDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    data: order,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders", id],
    queryFn: () => fetchOrder(id),
    enabled: !!id,
  });

  if (isPending) {
    return (
      <View style={styles.orderDetailsContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading order...</Text>
      </View>
    );
  }

  if (isError) {
  
    return (
      <View style={styles.orderDetailsContainer}>
        <Text>Error loading order: {error.message}</Text>
      </View>
    );
  }

  if (!order) {
    return (
      <View>
        <Text>Order not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.orderDetailsContainer}>
      <Stack.Screen options={{ title: order.customerName }} />
      <View style={styles.detailCustomerCard}>
        <Text>Dish: {order.dish}</Text>
        <Text>Filling: {order.filling}</Text>
        <Text>Quantity: {order.quantity}</Text>
        <Text>Status: {order.status}</Text>
        {/*      <View style={styles.btnsContainer}>
          {order.status === "Pending" && (
            <Pressable
              style={styles.readyBtn}
              onPress={() => markAsReady(order.id)}
            >
              <Text style={styles.readyBtnTxt}>Mark as Ready</Text>
            </Pressable>
          )}

          {order.status === "Pending" && (
            <Pressable
              style={styles.cancelBtn}
              onPress={() => markAsCancel(order.id)}
            >
              <Text style={styles.cancelBtnTxt}>Cancel Order</Text>
            </Pressable>
          )}
        </View> */}
      </View>
    </View>
  );
}
