import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            "uid": 1,
            "name": "Derry Alekhov",
            "status": "Recruiter",
            "imageUrl": "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
        }, {
            "uid": 2,
            "name": "Vilma Hawney",
            "status": "Staff Scientist",
            "imageUrl": "https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_640.jpg"
        }, {
            "uid": 3,
            "name": "Rodina Packham",
            "status": "Mechanical Systems Engineer",
            "imageUrl": "https://cdn.pixabay.com/photo/2021/04/10/05/32/woman-6166085_640.jpg"
        }, {
            "uid": 4,
            "name": "Willyt Evreux",
            "status": "Technical Writer",
            "imageUrl": "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_640.jpg"
        }, {
            "uid": 5,
            "name": "Abbott Gunton",
            "status": "Food Chemist",
            "imageUrl": "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_640.jpg"
        }, {
            "uid": 6,
            "name": "Maryanne Devereu",
            "status": "Human Resources Manager",
            "imageUrl": "https://cdn.pixabay.com/photo/2018/05/04/12/21/man-3373868_640.jpg"
        }, {
            "uid": 7,
            "name": "Mella Nelthorp",
            "status": "Analyst Programmer",
            "imageUrl": "https://cdn.pixabay.com/photo/2014/09/17/11/47/man-449406_640.jpg"
        }, {
            "uid": 8,
            "name": "Bobbi Pluvier",
            "status": "Developer I",
            "imageUrl": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg"
        },]

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView horizontal={true} style={styles.cardContainer}>
                {contacts.map((contact, index) => {
                    return (
                        <View key={index} style={styles.card}>
                            <Image source={{ uri: contact.imageUrl }} style={styles.image} />
                            <Text style={styles.name}>{contact.name}</Text>
                            <Text style={styles.status}>{contact.status}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    cardContainer: {
        height: 220,
        margin: 10,
        backgroundColor: '#727bfc',
        borderRadius: 10,
        shadowColor: '#000000',
    },
    card: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d42222'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        color: '#000000'
    },
    status: {
        fontSize: 13,
        textAlign: 'center',
        margin: 3,
        color: '#000000'
    }
})