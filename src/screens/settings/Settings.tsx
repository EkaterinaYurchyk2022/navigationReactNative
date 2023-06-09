import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StackSettingsProps} from '../types';

interface SettingsScreenProps extends StackSettingsProps {
    age: number
}

export const SettingsScreen = ({age, route, navigation}: SettingsScreenProps) => {
    const params = route.params
    return (
        <View>
            <Text>SettingsScreen</Text>
            {params && (
                <>
                    <Text>name: {params?.name}</Text>
                    <Text>myAge: {params?.myAge}</Text>
                    <Text>{params?.isDoneCourse ? 'isDoneCourse' : 'Ooops... not isDoneCourse'}</Text>
                </>
            )}
            <Text>age: {age}</Text>
            <Button title={'Jump to Home screen'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    )
}


const styles = StyleSheet.create({})