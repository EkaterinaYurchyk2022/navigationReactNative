import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootTabParamType = {
    Home: undefined
    Details: NavigatorScreenParams<RootStackParamType>
    Settings: {
        name: string
        myAge: number
        isDoneCourse: boolean
    } | undefined
    MyModal: undefined
}

export type RootStackParamType = {
    Login: undefined
    Registration: undefined
    ForgotPassword: undefined
}

export type StackSettingsProps = NativeStackScreenProps<RootTabParamType, 'Settings'>
