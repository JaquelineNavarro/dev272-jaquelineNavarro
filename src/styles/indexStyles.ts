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
},

containerOR: {
    flex:1,
    alignItems: "center",
    justifyContent: "center", 
},

readyBtn: {
  backgroundColor: "#166534",
  alignItems:"center",
  padding: 15,
  marginTop: 20,
  borderRadius:20,
},

readyBtnTxt: {
  color: "#ffffff",
  fontWeight:"bold",
},

orderDetailsContainer: {
  flex: 1,
  backgroundColor: "#F5F5F5",
  padding: 20,
},

detailCustomerCard: {
  backgroundColor: "#FFFFFF",
  padding: 20,
  borderRadius: 10,
  marginBottom: 20,
},

orderReadyCard:{
  backgroundColor:"#E8F5E9",
  padding: 15,
  margin: 10,
  borderWidth:1,
  borderColor:"#166534",
  borderRadius: 8,
},

orderReadyText: {
  fontSize: 15,
  marginBottom: 10,
},



});