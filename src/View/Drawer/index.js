// import {createDrawerNavigator,createAppContainer} from 'react-navigation'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// import React, { Component } from 'react'
// import {ScrollView,SafeAreaView,DrawerItems} from 'react-native'
// import Page1 from './page1'
// import Page2 from './page2'
// import Page3 from './page3'

// export const DrawerPage = createDrawerNavigator({
//     Page1:{
//         screen:Page1,
//         navigationOptions:{
//             drawerLabel:'Page1',
//             drawerIcon:({tintColor}) => {
//                 <MaterialIcon name='drafts' size={24} style={{color:tintColor}} />
//             }
//         }
//     },
//     Page2:{
//         screen:Page2,
//         navigationOptions:{
//             drawerLabel:'Page2',
//             drawerIcon:({tintColor}) => {
//                 <MaterialIcon name='move-to-inbox' size={24} style={{color:tintColor}} />
//             }
//         }
//     },
//     Page3:{
//         screen:Page3,
//         navigationOptions:{
//             drawerLabel:'Page3',
//             drawerIcon:({tintColor}) => {
//                 <MaterialIcon name='drafts' size={24} style={{color:tintColor}} />
//             }
//         }
//     },
// },{
//     initialRouteName:'Page1',
//     contentOptions:{
//         activeTintColor:'#e91e63'
//     },
//     contentComponent:(props) =>{
//         <ScrollView style={{backgroundColor:'#456',flex: 1,}}>
//             <SafeAreaView
//                 forceInset={{top: 'always',horizontal:'naver'}}
//             >
//                 <DrawerItems {...props}/>
//             </SafeAreaView>
//         </ScrollView>
//     }
// })