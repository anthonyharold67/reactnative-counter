/* import {View, Text, Button} from 'react-native';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <View>
        <Text>Counter</Text>
      </View>
      <View>
        <Text>{count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Reset" color="darkgrey" disabled={true} />
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}
export default App; */

// Style verilmiş hali
import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    width: 100 + '%',
    display: 'flex',
    backgroundColor: 'bisque',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    width: 400,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orangered',
    textAlign: 'center',
  },
  btn: {
    cursor: 'pointer',
  },
});

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Counter</Text>
      </View>
      <View>
        <Text style={styles.header}>{count}</Text>
        <Button
          title="Increase"
          color="darkslategray"
          onPress={() => setCount(count + 1)}
          style={styles.btn}
        />
        <Button
          title="Reset"
          color="darkgrey"
          onPress={() => setCount(0)}
          style={styles.btn}
        />
        <Button
          title="Decrease"
          onPress={() => setCount(count === 0 ? count : count - 1)}
          color="darkslategray"
          style={styles.btn}
        />
      </View>
    </View>
  );
}
export default App;
