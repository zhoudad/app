import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './View/Home'
import ImScreen from './View/Im'
import MyScreen from './View/My'
import Ionicons from './SvgIcon.js'
const RootPage = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'list',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'list' : 'list-1'}
                    size={26}
                />
            ),
        }
    },
    Im: {
        screen: ImScreen,
        navigationOptions: {
            tabBarLabel: 'Im',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'im' : 'im-1'}
                    size={26}
                />
            ),
        }
    },
    My: {
        screen: MyScreen,
        navigationOptions: {
            tabBarLabel: 'My',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'my' : 'my-1'}
                    size={26}
                />
            ),
        }
    },
});

export default createAppContainer(RootPage);