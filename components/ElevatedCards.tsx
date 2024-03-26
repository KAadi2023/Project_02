import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={[styles.card, styles.CardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.CardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.CardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.CardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.CardElevated]}>
            <Text>more..</Text>
        </View>
        <View style={[styles.card, styles.CardElevated]}>
            <Text>😎🤫🤭.</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 10,
    },
    cardContainer: {
        padding: 10,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 10,
    },
    CardElevated: {
        backgroundColor: '#CAD5E2',
        // elevation: 10,
        // shadowOffset: {
        //     width: 1,
        //     height: 1,
        // },
        // shadowColor: 'red',
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    },
})