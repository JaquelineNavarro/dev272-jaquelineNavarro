import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { Order, orders } from "@/data/orders";
import { styles } from "@/styles/indexStyles";
import { useState } from "react";

export default function Index() {
  
  return (
    <FlatList
      data={orders}
      keyExtractor={(o) => o.id}
      renderItem={({item}) => <OrderRow order={item} />}
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
          placeholderTextColor="#938a8a" />
        <Pressable style={styles.button} onPress={() => console.log(query)}>
          <Text style={styles.button}>Go</Text>
        </Pressable>
      </View>
    </View>
  );
}

function OrderRow({ order }: { order: Order }) {

  return (
  <View style={styles.card}>
    <View style={styles.cardMain}>
      <Text style={styles.cardTitle}>{order.customerName}</Text>
      <Text style={styles.cardSub}>{order.dish}</Text>
    </View>
    <Text style={styles.cardSub}>
      {order.quantity}, {order.status}
      </Text>
  </View>
  );
}

