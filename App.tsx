import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {Main} from './src/screens/Main';


export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style={'light'}/>
            <Main/>
        </NavigationContainer>
    )
}