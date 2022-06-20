import React,{useState} from 'react'
import { View, Text,StyleSheet, TouchableHighlight } from 'react-native'
import { TextInput } from 'react-native-paper'
import useMediaQueries from '../hooks/MediaQueries'
import { usePersonContext } from '../hooks/PersonContext'

import cusTheme from '../theme/Theme'
import BarButton from './buttons/BarButton'

const Topbar = ({logout}) => {
    const {isLessThanMD,isLessThanSM} = useMediaQueries()
    const {setFilter,refreshPerson,switchView,isTableView} = usePersonContext()
    const [searchQuery, setSearchQuery] = useState('');    
     const onChangeSearch = query => {
         setSearchQuery(query)
         setFilter(query)
    };      
     
    return (
        <View testID='topBar' style={[styles.container, isLessThanSM && styles.containerSM]}>
           <Text style={[styles.headerText,styles.headerMD]}>Random Person</Text>
           <View style={styles.rightFunc}>
                  <TextInput
                  testID='searchBox'
                    activeUnderlineColor="transparent"
                     style={[styles.icon,styles.inputStyle,
                        isLessThanMD && styles.inputMD,
                        isLessThanSM && styles.inputSM]} 
                     placeholder="Search name"
                     onChangeText={onChangeSearch}
                     value={searchQuery}
                  />
                  <BarButton
                   testID='refreshBtn'
                    icon="refresh"
                    type="MaterialIcons"
                    onPress={refreshPerson}
                  />
                  <BarButton
                    testID='switchBtn'
                    icon={!isTableView?"table":"card-account-details-outline"}
                    type={!isTableView?"AntDesign":"MaterialCommunityIcons"}
                    onPress={switchView}
                  />
               
                <TouchableHighlight testID='logoutButton' onPress={logout} >
                    <Text style={styles.logout}>logout</Text>
                </TouchableHighlight>
           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: cusTheme.primary,
      flexDirection:'row',
      height:60,
      paddingHorizontal:50,
      alignItems:'center',
      justifyContent:'space-between'
   },
   containerSM:{
     paddingHorizontal:25
   },
   rightFunc:{
       height:'100%',
        flexDirection:'row',
        alignItems:'center'       
   },
   headerText:{
       color:cusTheme.secondary,
       fontSize:25
   },
   headerMD:{
    fontSize:20
   },
   logout:{
       color:cusTheme.secondary,
       fontSize:18,
       textDecorationLine:'underline'
   },
  
   inputStyle:{
       height:40,
       marginRight:30,
       marginLeft:20,
       width:200,
       borderRadius:5,
   },
   inputMD:{
       width:150
   },
   inputSM:{
    width:120,
    marginRight:10,
    }
})

export default Topbar;
