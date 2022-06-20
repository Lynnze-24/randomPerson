import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import useMediaQueries from '../../hooks/MediaQueries'
import cusTheme from '../../theme/Theme'
import IconText from '../IconText'

const TileItem = ({name,avatar,email,phone,location}) => {
    const {isLessThanLG,isLessThanSM}= useMediaQueries()
    return (
        <View testID='tileItem' style={[styles.container,
                     isLessThanLG && styles.tileLG,
                      isLessThanSM && styles.tileSM,
                    
                     ]}>
            
            <Avatar.Image testID='avatar' size={60} source={avatar} />
            
           
            <View style={{width:250}}>
            <Text style={styles.text}>{name}</Text>
            <IconText isTable={false} icon="email-outline" text={email} style={{flex:1.5}}/>
            <IconText isTable={false} icon="phone-outline" text={phone} />
            <IconText isTable={false} type="Ionicons" icon="location" text={location} style={{flex:1.5}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height:125,
      width:400,
      backgroundColor:cusTheme.secondary,
      margin:10,
      borderRadius:10,
      justifyContent:'space-evenly',
      flexDirection:'row',
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 5,
     },
     shadowOpacity: 0.36,
     shadowRadius: 6.68,

     elevation: 11,
   },
   tileLG:{
       height:140,
      width:530,
   },
   tileSM:{
    height:120,
    width:380,
    },
   text:{
       width:200,
       fontSize:18
   }
})

export default TileItem;
