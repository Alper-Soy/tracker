import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
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
      <Spacer>
        <Button title='Sign Up' />
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
    // flex: 1,
    // marginBottom: 100,
    marginVertical: 60,
  },
});

export default SignupScreen;
