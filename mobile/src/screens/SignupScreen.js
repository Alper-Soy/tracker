import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        keyboardType='email-address'
        leftIcon={{ name: 'mail' }}
        label='Email'
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        leftIcon={{ name: 'lock' }}
        label='Password'
        secureTextEntry={true}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title='Sign Up' onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    justifyContent: 'center',
    flex: 1,
    marginBottom: 100,
    // marginVertical: 50,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 15,
    // marginVertical: 3,
  },
});

export default SignupScreen;
