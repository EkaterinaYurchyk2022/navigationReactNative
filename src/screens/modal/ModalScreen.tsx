import {View, Text, Button} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface ModalScreenProps {

}

export const ModalScreen = ({}: ModalScreenProps) => {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}