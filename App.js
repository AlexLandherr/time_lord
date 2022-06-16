import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { initDB } from './database/localdb';
import { MainStack } from './navigations/MainStack';
import { AboutScreen } from './screens/AboutScreen';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  const BottomTab = createBottomTabNavigator();

  useEffect(() => {
    initDB()
      .then(res => {
        console.log(res)
        setDbInitialized(true)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name='MainStack'
          component={MainStack}
          initialParams={{dbInitialized: dbInitialized}}
        />
        <BottomTab.Screen
          name='About'
          component={AboutScreen}
          />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};