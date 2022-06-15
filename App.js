import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './navigations/MainStack';
import { AboutScreen } from './screens/AboutScreen';

export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name='MainStack'
          component={MainStack}
        />
        <BottomTab.Screen
          name='About'
          component={AboutScreen}
          />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};