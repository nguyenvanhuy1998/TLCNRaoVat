import { Alert } from "react-native";

export default Helper = {
  validatePhoneNumber(text) {
    //  var reg = /^\+[0-9]?()[0-9](\s|\S)([0-9]{8}\d)$/
    const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/im;
    // const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im;
    //  const reg = /((09|03|07|08|05)+([0-9]{8})\b)/g
    return reg.test(text)
  },
  validatePassword(text) {
    return text.length >= 8;
  },
  validateFullName(text) {
    return text.length >= 1;
  },
  alert(title, message, callback) {
    Alert.alert(title, message,
      callback ? [
        { text: 'OK', onPress: callback },
      ] : undefined,
      { cancelable: false });
  },
 
}