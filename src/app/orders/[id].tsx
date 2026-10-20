import { View, Text, Pressable } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useOrders } from "@/context/orderContext";
import { styles } from "@/styles/indexStyles";

export default function OrderDetails() {
  const { id } = useLocalSearchParams();
  const { allOrders, markAsReady, markAsCancel } = useOrders();
  const order = allOrders.find((item) => item.id === id);

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
        <View style={styles.btnsContainer}>
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
        </View>
      </View>
    </View>
  );
}
