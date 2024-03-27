import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebSite(url: string) {
        Linking.openURL(url)
    }
    return (
        <View>
            <Text style={styles.headingText} >Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.cardHeadingContainer}>
                    <Text style={styles.cardHeaderText} >A Beautiful Butterfly on flower</Text>
                </View>
                <Image source={{ uri: 'https://res.cloudinary.com/reactcloudinary/image/upload/v1707280749/mn3qvw0epuulxewc3a0m.jpg' }} style={styles.cardImage} />
                <View style={styles.cardContentContainer}>
                    <Text
                        style={styles.cardDescription}
                        numberOfLines={3}
                    >
                        Perched delicately atop a vibrant blossom, a beautiful butterfly unfolds its wings, resplendent in hues of azure, sapphire, and ivory. Its graceful form dances in the gentle breeze, casting fleeting shadows upon the petals below. Sunlight kisses the intricate patterns adorning its wings, each delicate detail a masterpiece of nature's design. With effortless elegance, it sips nectar from the heart of the flower, a symbiotic exchange of beauty and life.
                    </Text>
                </View>
                <View style={styles.cardFooterContainer}>
                    <TouchableOpacity
                        onPress={() => openWebSite('https://pixabay.com/')}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebSite('https://www.linkedin.com/')}
                    >
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
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
        height: 380,
        borderRadius: 6,
        marginVertical: 8,
        marginHorizontal: 6
    },
    elevatedCard: {
        backgroundColor: '#f76928',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    cardHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#000'
    },
    cardHeadingContainer: {
    },
    cardImage: {
        height: 200,
    },
    cardContentContainer: {
        padding: 10,
    },
    cardDescription: {},
    cardFooterContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    cardFooter: {},
    socialLinks: {
        fontSize: 18,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 5,
    }

})