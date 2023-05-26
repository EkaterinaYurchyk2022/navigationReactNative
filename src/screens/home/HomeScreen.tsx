import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamType} from '../types';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface HomeScreenProps {

}
const Stack = createNativeStackNavigator<RootStackParamType>()

export const HomeScreen = ({}:HomeScreenProps) => {

    const navigation = useAppNavigation()
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title={'Jump to Details screen'} onPress={() => {
                navigation.navigate('Details', {screen: 'Registration'})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({})