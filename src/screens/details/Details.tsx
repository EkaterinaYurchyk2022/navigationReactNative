import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface DetailsScreenProps {

}

export const DetailsScreen = ({}: DetailsScreenProps) => {

    const navigation = useAppNavigation()

    return (
        <View>
            <Text>Details Screen</Text>
            <Button title={'Jump to Settings screen'} onPress={() => {
                navigation.navigate('Settings')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({})