import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input leftIcon={{ name: 'mail' }} label='Email' />
      <Spacer />
      <Input
        leftIcon={{ name: 'lock' }}
        label='Password'
        secureTextEntry={true}
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
    flex: 1,
    marginBottom: 100,
    // marginTop:100
  },
});

export default SignupScreen;
