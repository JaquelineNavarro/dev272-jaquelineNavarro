import { fetchOrders } from "@/api/orders";
import { useSearch } from "@/context/searchContext";
import { styles } from "@/styles/indexStyles";
import { useQuery } from "@tanstack/react-query";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  TextInput,
  View,
} from "react-native";
import OrderRow from "../../components/orderRow";

export default function Index() {
  const {
    data: orders,
    isPending,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });
  const { query, setQuery, hydrated } = useSearch();
  const filteredOrders = (orders ?? []).filter((order) => {
    const customerName = order.customerName.toLowerCase();
    const search = query.toLowerCase();

    return customerName.includes(search);
  });

  if (isPending || !hydrated) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading orders...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Pressable onPress={() => refetch()}>
          <Text>Try again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={filteredOrders}
      keyExtractor={(o) => o.id}
      renderItem={({ item }) => <OrderRow order={item} />}
      ListHeaderComponent={<Header query={query} setQuery={setQuery} />}
      ListEmptyComponent={<Text>No orders yet.</Text>}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />
      }
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
