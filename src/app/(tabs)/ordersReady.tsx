import { View, Text, FlatList } from "react-native";
import { styles } from "@/styles/indexStyles";
import { useOrders } from "@/context/orderContext";
import ReadyOrderCard from "../../components/readyOrderCard";


export default function OrdersReady() {
  const { allOrders } = useOrders();
  const readyOrders = allOrders.filter((order) => order.status === "Ready");
  return (
    <FlatList
      data={readyOrders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReadyOrderCard order={item} />}
    />
  );
}
