import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimerScreen from '../screens/TimerScreen';

export const MainStack = () => {

    const StackNavigation = createNativeStackNavigator();

    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen
                options={{headerShown: false}}
                name='TimerScreen'
                component={TimerScreen}
            />
        </StackNavigation.Navigator>
    );
};