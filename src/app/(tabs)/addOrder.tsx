import { styles } from "@/styles/indexStyles";
import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderValidation } from "@/utilities/orderValidations";
import { router } from "expo-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "@/api/orders";

export default function AddOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      router.back();
    },
    onError: (error) => {
      Alert.alert("Could not save", error.message);
    },
  });
  const [dish, setDish] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderValidation),
    mode: "onBlur",
    defaultValues: {
      customerName: "",
      dish: "",
      quantity: "",
      filling: "",
    },
  });

  function saveOrder(data: {
    customerName: string;
    dish: string;
    quantity: number;
    filling: string;
  }) {
    const newOrder = {
      customerName: data.customerName,
      dish: data.dish,
      quantity: data.quantity,
      filling: data.filling,
      status: "Pending",
    };

    mutation.mutate(newOrder);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.newOrderContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.newOrderTitle}>Create New Order</Text>

        <Text style={styles.formLabel}>Customer Name:</Text>

        <Controller
          control={control}
          name="customerName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Enter customer name"
              autoCapitalize="words"
              placeholderTextColor="#797575"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        {errors.customerName && (
          <Text style={{ color: "red" }}>{errors.customerName.message}</Text>
        )}

        <Text style={styles.formLabel}>Select Dish:</Text>

        <Controller
          control={control}
          name="dish"
          render={({ field: { onChange, value } }) => (
            <View style={styles.dishButtonsContainer}>
              <Pressable
                onPress={() => onChange("Tacos Dorados")}
                style={[
                  styles.dishButton,
                  value === "Tacos Dorados" && styles.selectedDishButton,
                ]}
              >
                <Text style={styles.dishButtonText}>Tacos Dorados</Text>
              </Pressable>

              <Pressable
                onPress={() => onChange("Tacos")}
                style={[
                  styles.dishButton,
                  value === "Tacos" && styles.selectedDishButton,
                ]}
              >
                <Text style={styles.dishButtonText}>Tacos</Text>
              </Pressable>

              <Pressable
                onPress={() => onChange("Pozole")}
                style={[
                  styles.dishButton,
                  value === "Pozole" && styles.selectedDishButton,
                ]}
              >
                <Text style={styles.dishButtonText}>Pozole</Text>
              </Pressable>
            </View>
          )}
        />

        {errors.dish && (
          <Text style={{ color: "red" }}>{errors.dish.message}</Text>
        )}

        <Text style={styles.formLabel}>Quantity:</Text>

        <Controller
          control={control}
          name="quantity"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Quantity"
              keyboardType="number-pad"
              placeholderTextColor="#797575"
              onChangeText={onChange}
              onBlur={onBlur}
              value={String(value)}
            />
          )}
        />

        {errors.quantity && (
          <Text style={{ color: "red" }}>{errors.quantity.message}</Text>
        )}

        <Text style={styles.formLabel}>Filling:</Text>

        <Controller
          control={control}
          name="filling"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Enter filling"
              autoCapitalize="words"
              placeholderTextColor="#797575"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        {errors.filling && (
          <Text style={{ color: "red" }}>{errors.filling.message}</Text>
        )}

        <Pressable
          style={styles.saveOrderBtn}
          onPress={handleSubmit(saveOrder)}
          disabled={mutation.isPending}
        >
          <Text style={styles.saveOrderBtnTxt}>
            {mutation.isPending ? "Hold on, we're saving your order..." : "Save Order"}
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
