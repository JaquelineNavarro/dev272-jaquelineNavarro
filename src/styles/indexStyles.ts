import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  list: { 
    padding: 16, 
    gap: 8 
},
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    textAlign: "center",
  },
  hint: {
    marginTop: 24,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#f8b88a",
    color: "#5c5c5c",
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: "#c5460c",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  cardMain: { 
    flex: 1, 
    gap: 2 
    },

  cardTitle: { 
    fontWeight: "600" 
    },

  cardSub: { 
    color: "#000000" 
    },

card: {
  padding: 12,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

quantity: {
    width: 100,
    textAlign: "center",
}

});