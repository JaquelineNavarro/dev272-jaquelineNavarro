import { FlatList, Pressable, Text, TextInput, View } from "react-native";

import { Order, orders } from "@/data/orders";
import { styles } from "@/styles/indexStyles";
import { useState } from "react";

export default function Index() {
  return (
    <FlatList
      data={orders}
      keyExtractor={(o) => o.id}
      renderItem={({ item }) => <OrderRow order={item} />}
      ListHeaderComponent={<Header />}
      contentContainerStyle={styles.list}
    />
  );
}

function Header() {
  const [query, setQuery] = useState<string>("");

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
        <Pressable style={styles.button} onPress={() => console.log(query)}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </View>
    </View>
  );
}

function OrderRow({ order }: { order: Order }) {
  return (
    <View style={styles.card}>
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
        <Text style={[styles.cardSub,{color: getStatusColor (order.status)},]}>{order.status}</Text>
      </View>
    </View>
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
    return "#000000"

  }
}
