import React,{useState,useEffect} from 'react'
import { View, Text,ActivityIndicator,StyleSheet} from 'react-native'
import PersonList from '../components/PersonList'
import Topbar from '../components/Topbar'
import { usePersonContext } from '../hooks/PersonContext'
import cusTheme from '../theme/Theme'


const Dashboard = ({logout}) => {
     const {isLoading,isError} = usePersonContext();
     

    return (
        <View testID='dashboard' style={styles.container}>
            <Topbar logout ={logout}/>
            {isError?(<View style={styles.center}><Text >Something went wrong!Please check your connection.</Text></View>)
                    :isLoading?(<View testID='loading' style={styles.center}>
                               <ActivityIndicator size='large' color={cusTheme.primary}/>
                               </View>)
                              :<PersonList />}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Dashboard;
