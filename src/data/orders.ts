export type Order = {
    id: string;
    customerName: string;
    dish: string;
    quantity: number;
    filling: string;
    status: string;
};

export const orders: Order []= [
    {
    id: "1",
    customerName: "Felipe Nava",
    dish: "Tacos",
    quantity: 3,
    filling:"Cabeza, Frijoles, Suadero",
    status: "Ready"
    },

    {
    id: "2",
    customerName: "Arnoldo Navarro",
    dish: "Sope",
    quantity: 1,
    filling:"Costilla",
    status: "Pending"
    },

    {
  id: "3",
  customerName: "Lety Pedraza",
  dish: "Pozole",
  quantity: 2,
  filling: "Mixto",
  status: "Ready"
},

{
  id: "4",
  customerName: "Carmen Navarro",
  dish: "Tacos Dorados",
  quantity: 4,
  filling: "Pollo, Papa",
  status: "Pending"
},

{
  id: "5",
  customerName: "Jaqueline Navarro",
  dish: "Tacos",
  quantity: 3,
  filling: "Adobada, Chicharron, Frijoles",
  status: "Ready"
},

{
  id: "6",
  customerName: "Manuel Pedraza",
  dish: "Sopitos",
  quantity: 5,
  filling: "Carne",
  status: "Pending"
},

{
  id: "7",
  customerName: "Leobarda Avalos",
  dish: "Pozole",
  quantity: 1,
  filling: "Espinazo",
  status: "Ready"
},

{
  id: "8",
  customerName: "Gael Contreras",
  dish: "Sope",
  quantity: 2,
  filling: "Chicharron",
  status: "Pending"
},

{
  id: "9",
  customerName: "Cristian Farias",
  dish: "Tacos",
  quantity: 4,
  filling: "Suadero, Cabeza",
  status: "Ready"
},

{
  id: "10",
  customerName: "Monserrath Navarro",
  dish: "Tacos Dorados",
  quantity: 3,
  filling: "Panela, Pollo, Papa",
  status: "Pending"
},
]


