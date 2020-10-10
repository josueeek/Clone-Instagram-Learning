import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },
});

export default function Index() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Hello World</Text>
            </View>
        </>
    );
}
