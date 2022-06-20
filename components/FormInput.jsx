import React,{useState} from 'react'
import {  Text,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import cusTheme from '../theme/Theme'

const FormInput = ({value,changeValue,testID,label,hasError,errorMessage,onKeyUp,isPassword}) => {
    const [isPwVisible, setIsPwVisible] = useState(true);
    const togglePasswordInput = ()=> isPwVisible? setIsPwVisible(false): setIsPwVisible(true)
    
    return (<>
        <TextInput 
            
             label={label}
             secureTextEntry={isPassword && isPwVisible?true:false}
            dense={true}
            mode='outlined'
            onKeyUp={onKeyUp}
            style={styles.input}
            value={value}
            outlineColor={hasError?cusTheme.danger:cusTheme.primary} 
            onChangeText={changeValue}
            activeOutlineColor={hasError?cusTheme.danger:cusTheme.primary} 
            right={isPassword && (<TextInput.Icon testID ="pwToggle" name="eye" onPress={togglePasswordInput} />)}
            testID={testID} 
            />
           { hasError && (<Text style={styles.errorText}>{errorMessage}</Text>)}
            </>
    )
}


const styles = StyleSheet.create({
    input:{
        width:350,
        maxWidth:'100%',
        marginTop:10,
        fontSize:18
    },
    errorText:{
        textAlign:'left',
        color:cusTheme.danger
    }
});



export default FormInput
