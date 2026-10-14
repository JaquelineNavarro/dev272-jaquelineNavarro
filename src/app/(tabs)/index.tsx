import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { Order } from "@/data/orders";
import { useOrders } from "@/context/orderContext";
import { styles } from "@/styles/indexStyles";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const { allOrders } = useOrders();
  const [query, setQuery] = useState("");
  const filteredOrders = allOrders.filter((order) => {
    const customerName = order.customerName.toLowerCase();
    const search = query.toLowerCase();

    return customerName.includes(search);
  });
  return (
    <FlatList
      data={filteredOrders}
      keyExtractor={(o) => o.id}
      renderItem={({ item }) => <OrderRow order={item} />}
      ListHeaderComponent={<Header query={query} setQuery={setQuery} />}
      contentContainerStyle={styles.list}
    />
  );
}

function Header({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Orders</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Search clients"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          returnKeyType="search"
          placeholderTextColor="#595959"
        />
        <Pressable style={styles.button} onPress={() => setQuery("")}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </View>
    </View>
  );
}

function OrderRow({ order }: { order: Order }) {
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
