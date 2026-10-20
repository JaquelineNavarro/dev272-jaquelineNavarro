import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { styles } from "@/styles/indexStyles";
import { Order } from "@/data/orders";


export default function OrderRow({ order }: { order: Order }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/orders/[id]",
          params: { id: order.id },
        })
      }
    >
      <Text style={styles.cardTitle}>{order.customerName}</Text>
      <View style={styles.cardRow}>
        <View style={styles.cardMain}>
          <Text style={styles.cardSub}>
            <Text style={{ fontWeight: "bold" }}>Dish: </Text>
            {order.dish}
          </Text>
          <Text style={styles.cardSub}>
            <Text style={{ fontWeight: "bold" }}>Filling: </Text>
            {order.filling}
          </Text>
        </View>
        <Text style={styles.quantity}>{order.quantity}</Text>
        <Text style={[styles.cardSub, { color: getStatusColor(order.status) }]}>
          {order.status}
        </Text>
      </View>
    </Pressable>
  );

    function getStatusColor(status: string) {
    if (status === "Ready") {
      return "#166534";
    }
    if (status === "Cancelled") {
      return "#B91C1C";
    }
    if (status === "Pending") {
      return "#92400E";
    }
    return "#000000";
  }
}