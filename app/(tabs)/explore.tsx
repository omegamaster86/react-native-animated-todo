import { StyleSheet, Text, View  } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

