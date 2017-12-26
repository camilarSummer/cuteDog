import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import {
    Text,
    View,
    Button
}  from 'react-native'

import { TabNavigator,StackNavigator} from 'react-navigation'

const InnerScreen = ({navigation,desc})=>(
    <View style={{marginTop:20}}>
        <Text style={{textAlign:'center',color: '#f60'}}>{desc}</Text>
        <Button
            onPress={() => {navigation.navigate('Detail',{
                name:'Camilar'
            })}}
            title="列表页，点击前往详情页面"
        />
        <Button
            onPress={() => {navigation.navigate('Comment')}}
            title="详情页，点击前往评论页"
        />
        <Button
            onPress={() => {navigation.navigate('AccountUpdate')}}
            title="评论页，跳往账户更新页"
        />
        <Button
            onPress={() => {navigation.goBack(null)}}
            title="返回上一个页面"
        />
    </View>
)

const ListScreen = ({navigation}) => (
    <InnerScreen  desc='当前页是列表页' navigation={navigation}/>
)
const EditScreen = ({navigation}) => (
    <InnerScreen  desc={`当前是 ${navigation.state.params && navigation.state.params.name} 编辑页`}
                  navigation={navigation}/>
)
const AccountScreen = ({navigation}) => (
    <InnerScreen  desc='当前页是账户信息页' navigation={navigation}/>
)
const CommentScreen = ({navigation}) => (
    <InnerScreen  desc='当前页是评论页' navigation={navigation}/>
)
const AccountUpdateScreen = ({navigation}) => (
    <InnerScreen  desc='当前页是账户更新页' navigation={navigation}/>
)
const DetailScreen = ({navigation}) => (
    <InnerScreen  desc={`${navigation.state.params.name} 在咆哮`} navigation={navigation}/>
)

const headerStyle={
    height:52,
    paddingTop:0,
    backgroundColor:'#ee735c'
}

const ListTab =StackNavigator({
    List:{
        screen:ListScreen,
        navigationOptions:{
            headerTitle:'狗狗说',
            headerStyle:headerStyle,
            headerTintColor:'#fff'
        }
    },
    Detail:{
        screen:DetailScreen,
        navigationOptions:({navigation})=> ({
            headerTitle:`${navigation.state.params.name} 的创意`,
            headerStyle:headerStyle,
            headerTintColor:'#fff',
            tabBarVisible:false
        })
    },
    Comment:{
        screen:CommentScreen,
        navigationOptions:({navigation})=> ({
            headerTitle:'评论',
            headerStyle:headerStyle,
            headerTintColor:'#fff'
        })
    }
})

const AccountTab =StackNavigator({
    Account:{
        screen:AccountScreen,
        navigationOptions:({navigation})=> ({
            headerTitle:'狗狗的账户',
            headerStyle:headerStyle,
            headerTintColor:'#fff',
            headerRight:(
                <Text onPress={()=>navigation.navigate('AccountUpdate')}>编辑</Text>
            )
        })
    },
    AccountUpdate:{
        screen:AccountUpdateScreen,
        navigationOptions:{
            headerTitle:'更新资料',
            headerStyle:headerStyle,
            headerTintColor:'#fff',
            tabBarVisible:false
        }
    }
})



const Tabs = TabNavigator({
    ListTab: {
        screen: ListTab
    },
    EditTab: {
        screen: EditScreen,
        title:'理解狗狗，从配音开始',
        navigationOptions:{
            headerTitle:'编辑视频',
            headerStyle:headerStyle,
            headerTintColor:'#fff',
            tabBarVisible:false
        }
    },
    AccountTab: {
        screen: AccountTab
    },
},{
    tabBarPosition:'bottom',
    lazyload: true,
    tabBarOptions:{
        activeTintColor:'#ee735c',
        inactiveTintColor:'#666',
        // showIcon:true,
        // showLabel:false,
        labelStyle:{
            fontSize:12
        },
        style:{
            borderTopWidth:1,
            borderTopColor:'#f1f1f1',
            backgroundColor:'#fff'
        }
    }
})

export default Tabs