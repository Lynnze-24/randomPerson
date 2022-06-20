import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { MaterialCommunityIcons,Ionicons  } from '@expo/vector-icons';

import cusTheme from '../theme/Theme';
import useMediaQueries from '../hooks/MediaQueries';

const IconText = ({icon,text,type,style,isTable}) => {
    const {isLessThanLG,isLessThanXSM}= useMediaQueries()
    return (
        <View style={[isTable?styles.containerTable:styles.containerTile,style]}>
            {
                type==="Ionicons"?( <Ionicons testID='icon' name="location-outline" size={24} color={cusTheme.primary} />)
                                 :(<MaterialCommunityIcons testID='icon' name={icon} size={24} color={cusTheme.primary} />)
            }
            <Text style={isTable ? [styles.text,
                                    isLessThanLG && styles.textLG,
                                    isLessThanXSM && styles.textXSM]

                                  : styles.text
                                    }>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    containerTable: {
        flex:1,
      flexDirection:'row',
      height:'100%',
      alignItems:'center',
   },
   containerTile: {
    flexDirection:'row',
    alignItems:'center',
 },
   text:{
       textAlign:'left',
       marginLeft:2,
       fontSize:13,
   },
   textLG:{
    width:100
   },
   textXSM:{
    width:'auto'
   }
})

export default IconText
