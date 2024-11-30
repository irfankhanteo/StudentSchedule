import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../assests/colors";

export default HomeTab = ({
  title = 'Home',
  onPress = () => {},
  selectedDay,
}) => {
    const isSelected = selectedDay === title;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: isSelected ? colors.primary : colors.cF2F2F2,
      }}>
      <Text
        style={{
          ...styles.title,
          color: isSelected ? colors.cF2F2F2 : colors.primary,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.primary,
        width:100,
        height:40,
        borderRadius:10,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.black,
    },
});