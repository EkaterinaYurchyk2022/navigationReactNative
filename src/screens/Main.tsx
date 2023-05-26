import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './home/HomeScreen';
import {RootStackParamType, RootTabParamType} from './types';
import {SettingsScreen} from './settings/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppNavigation} from '../hooks/useAppNavigation';

interface MainProps {

}

const Tab = createBottomTabNavigator<RootTabParamType>()
const Stack = createNativeStackNavigator<RootStackParamType>()

const Registration = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Registration</Text>
            <Button title={'Jump to Login screen'} onPress={() => {
                navigation.navigate('Details', {screen: 'Login'})
            }}/>
        </View>
    )
}
const Login = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Login</Text>
            <Button title={'Jump to ForgotPassword screen'} onPress={() => {
                navigation.navigate('Details', {screen: 'ForgotPassword'})
            }}/>
        </View>
    )
}
const ForgotPassword = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>ForgotPassword</Text>
            <Button title={'Jump to Home screen'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    )
}


const RootStackNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name={'Registration'} component={Registration}/>
        <Stack.Screen name={'Login'} component={Login}/>
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword}/>
    </Stack.Navigator>
}


export const Main = ({}: MainProps) => {

    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Details" component={RootStackNavigation}/>
                <Tab.Screen name="Settings">{
                    (props) => <SettingsScreen {...props} age={30}/>
                }</Tab.Screen>
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})