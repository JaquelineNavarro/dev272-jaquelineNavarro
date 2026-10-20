import { styles } from "@/styles/indexStyles";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function AddOrder() {
  const [dish, setDish] = useState("");
  return (
    <View style={styles.newOrderContainer}>
      <Text style={styles.newOrderTitle}>Create New Order</Text>
      <Text style={styles.formLabel}> Customer Name:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Enter customer name"
        autoCapitalize="words"
        placeholderTextColor="#797575"
      />
      <Text style={styles.formLabel} >Select Dish:</Text>
      <View style={styles.dishButtonsContainer}>
        <Pressable
          onPress={() => setDish("Tacos Dorados")}
          style={[
            styles.dishButton,
            dish === "Tacos Dorados" && styles.selectedDishButton,
          ]}
        >
          <Text style={styles.dishButtonText}>Tacos Dorados</Text>
        </Pressable>

        <Pressable
          onPress={() => setDish("Tacos")}
          style={[
            styles.dishButton,
            dish === "Tacos" && styles.selectedDishButton,
          ]}
        >
          <Text style={styles.dishButtonText}>Tacos</Text>
        </Pressable>

        <Pressable
          onPress={() => setDish("Pozole")}
          style={[
            styles.dishButton,
            dish === "Pozole" && styles.selectedDishButton,
          ]}
        >
          <Text style={styles.dishButtonText}>Pozole</Text>
        </Pressable>
      </View>

      <Text style={styles.formLabel}>Quantity:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Quantity"
        keyboardType="number-pad"
        placeholderTextColor="#797575"
      />
      <Text style={styles.formLabel}>Filling:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Enter filling"
        autoCapitalize="words"
        placeholderTextColor="#797575"
      />

      <Pressable style={styles.saveOrderBtn}>
        <Text style={styles.saveOrderBtnTxt}>Save Order</Text>
      </Pressable>
    </View>
  );
}
