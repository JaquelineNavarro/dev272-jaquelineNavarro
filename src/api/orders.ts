import { supabase } from "@/lib/supabase";

export type Order = {
  id: string;
  created_at: string;
  customerName: string;
  dish: string;
  filling: string;
  quantity: number;
  status: string;
};

export type NewOrder = Omit<Order, "id" | "created_at">;

export async function fetchOrders(): Promise<Order[]> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function fetchOrder(id: string): Promise<Order | null> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;

  return data;
}

export async function createOrder(input: NewOrder): Promise<Order> {
  const { data, error } = await supabase
    .from("orders")
    .insert(input)
    .select()
    .single();

  if (error) throw error;

  return data;
}
