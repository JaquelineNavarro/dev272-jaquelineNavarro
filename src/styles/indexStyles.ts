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
 
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#A63B0A",
    color: "#595959",
    borderRadius: 8,
    padding: 10,
    backgroundColor:"#FFFFFF",
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
    textAlign:"center",
    fontWeight:"bold", 
    },

  cardSub: { 
    color: "#000000", 
    },

card: {
  padding: 12,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
  backgroundColor:"#FFFFFF",
  borderRadius:3,
  borderWidth:1,
},

cardRow: {
  flexDirection:"row",
  justifyContent: "space-between",
  alignItems: "center",
},

quantity: {
    width: 35,
    textAlign: "center",
}

});