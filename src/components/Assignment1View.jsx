import { View, Text, StyleSheet } from 'react-native';

import {
  calculateCoinTotal,
  convertFahrenheitToCelsius,
  calculateCubeVolume,
  calculateGymMembershipCost,
  determineEarthquakeDamageLevel
} from '../Assign1';

export default function Assignment1View() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>UX308 Midterm Results</Text>

      <View style={[styles.card, styles.blueCard]}>
        <Text style={styles.sectionTitle}>💰 Coin Total</Text>
        <Text style={styles.output}>{calculateCoinTotal(1,1,1,1,1)}</Text>
        <Text style={styles.output}>{calculateCoinTotal(2,2,2,2,2)}</Text>
        <Text style={styles.output}>{calculateCoinTotal(0,0,0,0,0)}</Text>
      </View>

      <View style={[styles.card, styles.orangeCard]}>
        <Text style={styles.sectionTitle}>🌡 Temperature Conversion</Text>
        <Text style={styles.output}>32°F → {convertFahrenheitToCelsius(32)}°C</Text>
        <Text style={styles.output}>212°F → {convertFahrenheitToCelsius(212)}°C</Text>
        <Text style={styles.output}>70°F → {convertFahrenheitToCelsius(70)}°C</Text>
      </View>

      <View style={[styles.card, styles.greenCard]}>
        <Text style={styles.sectionTitle}>📦 Cube Volume</Text>
        <Text style={styles.output}>1m → {calculateCubeVolume(1)} m³</Text>
        <Text style={styles.output}>2m → {calculateCubeVolume(2)} m³</Text>
        <Text style={styles.output}>3m → {calculateCubeVolume(3)} m³</Text>
      </View>

      <View style={[styles.card, styles.purpleCard]}>
        <Text style={styles.sectionTitle}>🏋️ Gym Membership</Text>
        <Text style={styles.output}>1 Friend → ${calculateGymMembershipCost(100,1)}</Text>
        <Text style={styles.output}>2 Friends → ${calculateGymMembershipCost(100,2)}</Text>
        <Text style={styles.output}>3 Friends → ${calculateGymMembershipCost(100,3)}</Text>
        <Text style={styles.output}>4 Friends → ${calculateGymMembershipCost(100,4)}</Text>
      </View>

      <View style={[styles.card, styles.redCard]}>
        <Text style={styles.sectionTitle}>🌍 Earthquake Damage</Text>
        <Text style={styles.output}>4.0 → {determineEarthquakeDamageLevel(4)}</Text>
        <Text style={styles.output}>5.2 → {determineEarthquakeDamageLevel(5.2)}</Text>
        <Text style={styles.output}>6.0 → {determineEarthquakeDamageLevel(6)}</Text>
        <Text style={styles.output}>7.0 → {determineEarthquakeDamageLevel(7)}</Text>
        <Text style={styles.output}>8.0 → {determineEarthquakeDamageLevel(8)}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#f4f6f9',
    minHeight: '100vh'
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222'
  },

  card: {
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10
  },

  output: {
    fontSize: 16,
    marginBottom: 4
  },

  blueCard: {
    backgroundColor: '#e3f2fd'
  },

  orangeCard: {
    backgroundColor: '#fff3e0'
  },

  greenCard: {
    backgroundColor: '#e8f5e9'
  },

  purpleCard: {
    backgroundColor: '#f3e5f5'
  },

  redCard: {
    backgroundColor: '#fdecea'
  }
});
