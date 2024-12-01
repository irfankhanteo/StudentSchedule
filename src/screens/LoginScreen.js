import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import api from '../services/axios-interceptor'; // Import your Axios instance
import PrimaryButton from '../components/PrimaryButton';
import {colors} from '../assests/colors';
import Logo from '../images/logo.jpg';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Validation Function
  const validateInputs = () => {
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Email is required');
      return false;
    }
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   Alert.alert('Validation Error', 'Invalid email format');
    //   return false;
    // }
    if (!password.trim()) {
      Alert.alert('Validation Error', 'Password is required');
      return false;
    }
    // if (password.length < 6) {
    //   Alert.alert('Validation Error', 'Password must be at least 6 characters');
    //   return false;
    // }
    return true;
  };

  // API Call
  const handleLogin = async () => {
    if (!validateInputs()) return;

    setLoading(true);

    try {
      const response = await api.post('Students/Login', {
        UserName: email,
        Password: password,
      });

      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Dashboard', {data: response.data});
    } catch (error) {
      // Handle API error
      console.error('Login Error:', error.response?.data || error.message);
      if (error.response.status === 401) {
        Alert.alert('Login Error', 'Invalid credentials. Please try again.');
      } else {
        Alert.alert(
          'Error',
          error.response?.data?.message || 'Something went wrong',
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{width: 200, alignSelf: 'center'}} />

      <Text style={styles.title}>Login with your Username and password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <PrimaryButton title="Login" onPress={handleLogin} loading={loading} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffa500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: colors.primary,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
