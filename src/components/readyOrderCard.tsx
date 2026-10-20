import { View, Text } from "react-native";
import { Order } from "@/data/orders";
import { styles } from "@/styles/indexStyles";

export default function ReadyOrderCard({ order }: { order: Order }) {
  return (
    <View style={styles.orderReadyCard}>
      <Text style={styles.orderReadyText}>
        Customer: {order.customerName}
      </Text>
      <Text style={styles.orderReadyText}>
        Dish: {order.dish}
      </Text>
      <Text style={styles.orderReadyText}>
        Status: {order.status}
      </Text>
    </View>
  );
}