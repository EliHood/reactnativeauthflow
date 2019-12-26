import AsyncStorage from "@react-native-community/async-storage";
export default {
  // save logged session

  getLoginStatus: async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      console.log(data);
    } catch (error) {
      console.log("Something went wrong");
    }
  },
};
