// import React from 'react';
// import { 
//     createBottomTabNavigator,
//      createAppContainer,
//      createMaterialTopTabNavigator ,
     
//     } from 'react-navigation';
// import HomeScreen from './View/Home'
// import ImScreen from './View/Im'
// import MyScreen from './View/My'
// import Ionicons from './SvgIcon.js'
// const RootPage = createBottomTabNavigator({
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//             tabBarLabel: 'list',
//             tabBarIcon: ({tintColor, focused}) => (
//                 <Ionicons
//                     name={focused ? 'list' : 'list-1'}
//                     size={26}
//                     style={{color:tintColor}}
//                 />
//             ),
//             activeTintColor : 'green'
//         }
//     },
//     Im: {
//         screen: ImScreen,
//         navigationOptions: {
//             tabBarLabel: 'Im',
//             tabBarIcon: ({tintColor, focused}) => (
//                 <Ionicons
//                     name={focused ? 'im-1' : 'im'}
//                     size={26}
//                     style={{color:tintColor}}
//                 />
//             )
//         }
//     },
//     My: {
//         screen: MyScreen,
//         navigationOptions: {
//             tabBarLabel: 'My',
//             tabBarIcon: ({tintColor, focused}) => (
//                 <Ionicons
//                     name={focused ? 'my' : 'my-1'}
//                     size={26}
//                     style={{color:tintColor}}
//                 />
//             ),
//         }
//     },
// },{
//     tabBarOptions:{
//         activeTintColor: '#51e0ce',
//         pressOpacity: 0.8,
//     }
// });

// export default createAppContainer(RootPage);