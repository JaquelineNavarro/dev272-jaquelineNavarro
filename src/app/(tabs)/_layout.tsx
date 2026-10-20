import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="clipboard-notes" size={24} color="black" />
          ),
        }}
      />
        <Tabs.Screen
        name="ordersReady"
        options={{
          title: "Orders Ready",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="check-square" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="addOrder"
        options={{
          title: "New Order",
          tabBarIcon: ({ color, size }) => (
           <Entypo name="new-message" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
  );
  
}
