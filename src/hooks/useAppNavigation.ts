import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootTabParamType} from '../screens/types';

export type NavigationUseType = NavigationProp<RootTabParamType>
export const useAppNavigation = () => useNavigation<NavigationUseType>()