import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { Order } from "@/data/orders";
import { useOrders } from "@/context/orderContext";
import { styles } from "@/styles/indexStyles";
import { useState } from "react";
import { router } from "expo-router";
import OrderRow from "../../components/orderRow";

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
