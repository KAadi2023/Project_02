import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
          uri: 'https://res.cloudinary.com/reactcloudinary/image/upload/v1710768534/zngdiqrvyxpiwzrwt7l1.jpg'
        }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Flower</Text>
          <Text style={styles.cardLabel}>with a Beautiful pink color</Text>
          <Text style={styles.cardDescription}>Flowers, with their vibrant colors, delicate petals, and enchanting fragrances, hold a special place in nature's tapestry, captivating hearts and minds across cultures and generations.</Text>
          <Text style={styles.cardFooter}>12 min ago</Text>
        </View>
      </View>
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
  card: {
    width: 400,
    height: 360,
    marginHorizontal: 5,
  },
  cardElevated: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },
  cardImage: {
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#758283',
    fontSize: 13,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    
  },
})