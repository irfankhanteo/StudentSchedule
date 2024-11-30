import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../assests/colors";

export default HomeTab = ({
    title='Home',
}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{title}</Text>
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