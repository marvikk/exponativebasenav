import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import TaskListScreen from '../screens/Third/TaskListScreen';
import LinksScreen from '../screens/Second/LinksScreen';
import Main from '../screens/Charades/Main';
import HomeScreen from '../screens/Fourth/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SideBar from '../screens/Charades/Sidebar'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const BottomTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={DrawerNav}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
        />
        <BottomTab.Screen
          name="Links"
          component={LinksScreen}
          options={{
            header: null,
            title: 'Resources',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
          }}
        />
        <BottomTab.Screen
          name="TaskListScreen"
          component={TaskListScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
        />
         <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
        />
    </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Home':
//       return 'How to get started';
//     case 'Links':
//       return 'Links to learn more';
//   }
// }
