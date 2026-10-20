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
  flex:1,
  alignItems:"center",
  justifyContent:"center",
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

cancelBtn: {
  backgroundColor: "#b91c1c",
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  padding: 15,
  marginTop: 20,
  borderRadius:20,
},

cancelBtnTxt: {
  color: "#ffffff",
  fontWeight:"bold",
},

btnsContainer: {
  flexDirection: "row",
  display: "flex",
  gap: 10,
},
dishButtonsContainer: {
  flexDirection: "row",
  gap: 8,
},

dishButton: {
  flex: 1,
  backgroundColor: "#EEEEEE",
  paddingVertical: 16,
  paddingHorizontal: 6,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
},

selectedDishButton: {
  backgroundColor: "#D4A373",
},

dishButtonText: {
  fontSize: 14,
  fontWeight: "500",
  color: "#333333",
  textAlign: "center",
},

newOrderContainer: {
  flex: 1,
  padding: 20,
  backgroundColor: "#F8F7F5",
},

newOrderTitle: {
  fontSize: 26,
  fontWeight: "bold",
  marginBottom: 10,
  textAlign:"center",
},

formLabel: {
  fontSize: 16,
  fontWeight: "600",
  marginTop: 16,
  marginBottom: 8,
},

formInput: {
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: "#DDDDDD",
  borderRadius: 10,
  padding: 14,
  fontSize: 16,
  color: "#333333",
},

saveOrderBtn: {
  backgroundColor: "#A63B0A",
  padding: 16,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 30,
}, 

saveOrderBtnTxt: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "bold",
},

});