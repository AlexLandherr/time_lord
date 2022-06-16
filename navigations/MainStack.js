import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimerScreen from '../screens/TimerScreen';

export const MainStack = ({dbInitialized}) => {

    const StackNavigation = createNativeStackNavigator();

    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen
                options={{headerShown: false}}
                name='TimerScreen'
                component={TimerScreen}
                initialParams={{dbInitialized: dbInitialized}}
            />
        </StackNavigation.Navigator>
    );
};