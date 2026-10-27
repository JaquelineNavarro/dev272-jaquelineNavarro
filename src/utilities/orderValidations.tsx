import { z } from "zod";

export const orderValidation = z.object({
  customerName: z.string().min(1, "Please write your name, this is required"),
  dish: z.string().min(1, "Please select your dish"),
  quantity: z.coerce
    .number()
    .int("Quantity needs to be a whole number")
    .min(1, "Quantity needs to be bigger than 0"),
  filling: z
    .string()
    .min(1, "Please write the filling that you want, this is requiered"),
});
