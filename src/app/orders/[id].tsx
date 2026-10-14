import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useOrders } from "@/context/orderContext";
import { styles } from "@/styles/indexStyles";

export default function OrderDetails() {
  const { id } = useLocalSearchParams();
  const { allOrders, markAsReady } = useOrders();
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
      <View style ={styles.detailCustomerCard}>
        <Text>Customer: {order.customerName}</Text>
        <Text>Dish: {order.dish}</Text>
        <Text>Filling: {order.filling}</Text>
        <Text>Quantity: {order.quantity}</Text>
        <Text>Status: {order.status}</Text>
        {order.status === "Pending" && (
          <Pressable
            style={styles.readyBtn}
            onPress={() => markAsReady(order.id)}
          >
            <Text style={styles.readyBtnTxt}>Mark as Ready</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
