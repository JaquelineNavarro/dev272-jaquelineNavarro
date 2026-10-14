import { View, Text, FlatList } from "react-native";
import { styles } from "@/styles/indexStyles";
import { useOrders } from "@/context/orderContext";


export default function OrdersReady() {
  const { allOrders } = useOrders();
  const readyOrders = allOrders.filter((order) => order.status === "Ready");
  return (
    <FlatList
      data={readyOrders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.orderReadyCard}>
          <Text style={styles.orderReadyText}>Customer: {item.customerName}</Text>
          <Text style={styles.orderReadyText}>Dish: {item.dish}</Text>
          <Text style={styles.orderReadyText}>Status: {item.status}</Text>
        </View>
      )}
    />
  );
}
