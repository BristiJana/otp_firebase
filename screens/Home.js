import * as React from 'react';
import { View, Text ,Button} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: "black" }}>Home Screen</Text>
      <Button
        title="Move"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}