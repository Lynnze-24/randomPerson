import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import useMediaQueries from '../../hooks/MediaQueries'
import cusTheme from '../../theme/Theme'
import IconText from '../IconText'

const TableItem = ({name,avatar,email,phone,location}) => {
      const {isLessThanXLG,isLessThanXSM} = useMediaQueries()
    return (
        <View testID='tableItem' style={styles.container}>
            <View style={[styles.avatarCon,
                          isLessThanXLG && styles.avatarConXLG,
                          ]}>
                <Avatar.Image testID='avatar' size={60} source={avatar} />
                <Text testID='personName' style={[styles.text,isLessThanXLG && styles.textXLG]}>{name}</Text>
            </View>
            <View style={[styles.iconCon,isLessThanXSM && styles.iconConXSM]}>
                <IconText isTable={true} icon="email-outline" text={email} style={{flex:1.5}}/>
                <IconText isTable={true} icon="phone-outline" text={phone} />
                <IconText isTable={true} type="Ionicons" icon="location" text={location} style={{flex:1.5}}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height:100,
      borderColor:cusTheme.lpr,
      borderWidth:2,
      borderTopWidth:0,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center'
   },
   iconCon:{
       flex:'1',
    flexDirection:'row'
   },
   iconConXSM:{
        flexDirection:'column'
   },
   avatarCon:{
       marginLeft:20,
    flexDirection:'row',
    alignItems:'center'
   },
   avatarConXLG:{
       marginLeft:0,
    flexDirection:'column',
    justifyContent:'center'
   },
   text:{
       width:200,
       marginLeft:10,
       fontSize:13
   },
   textXLG:{
       textAlign:'center',
       marginLeft:0,
       width:150
    }
})

export default TableItem
