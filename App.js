import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);
  const [btnText, setBtnText] = useState('START');
  const [lastNumber, setLastNumber] = useState();
  const [timer, setTimer] = useState(null);

  function start() {
    if (timer) {
      clearInterval(timer);
      setTimer(null);

      setBtnText('START');
    } else {
      const interval = setInterval(() => {
        setNumber(number => number + 0.1)
      }, 100);
      setTimer(interval);

      setBtnText('PARAR');
    }

  }

  function clear() {
    if (timer) {
      clearInterval(timer);
      setTimer(null);

    }
    setLastNumber(number);
    setNumber(0);
    setBtnText('START')
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/timer.png')}
        style={styles.cronometer}
      />

      <Text style={styles.timer}> {number.toFixed(1)} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnText}> {btnText} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={clear}>
          <Text style={styles.btnText}>CLEAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.lastTimeArea}>
        <Text style={styles.runningText}>
          {lastNumber > 0 ? 'lastNumber tempo: ' + lastNumber.toFixed(1) + 's' : ''}
        </Text>
      </View>


    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    marginTop: -160,
    color: '#efefef',
    fontSize: 65,
    fontWeight: "bold",
    alignItems: 'center',
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#efefef',
    maxWidth: 180,
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#031727',
  },
  lastTimeArea: {
    marginTop: 40,
  },
  runningText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#efefef'
  }
});