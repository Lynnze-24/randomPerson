import React,{useState} from 'react'
import { IconButton } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import cusTheme from '../../theme/Theme'
import { usePersonContext } from '../../hooks/PersonContext'
import useMediaQueries from '../../hooks/MediaQueries'

const BarButton = ({icon,type,onPress,testID}) => {
    const{isLoading} = usePersonContext()
    const {isLessThanSM} = useMediaQueries()
    
    return (
        <IconButton
            testID={testID}
            style={[styles.container,isLessThanSM && styles.sm]}
            icon={icon}
            disabled={icon==='refresh'?isLoading:false}
            type={type}
            color={cusTheme.secondary}
            size={20}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight:30,
        marginLeft:0
   },
   sm:{
    marginRight:10
   }
})

export default BarButton;
