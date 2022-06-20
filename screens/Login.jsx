import React,{useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet  } from 'react-native'
import { Button } from 'react-native-paper'
import FormInput from '../components/FormInput'

import cusTheme from '../theme/Theme'
import validate,{validateUser,validatePassword} from '../utils/validate'



const Login = ({login}) => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const[error,setError] = useState(null);

     const changeUsername = (username)=> setUsername(username)
     const changePassword = (password)=> setPassword(password)

     const keyUpUser = ()=>{
        
        if(!(error===1||error===12))return; // don't run if username is valid
       
        const isValidUser = validateUser(username);
       if(isValidUser && error===1)setError(null)
       if(isValidUser && error===12)setError(2)
     }

     const keyUpPassword = ()=>{
        
        if(!(error===2||error===12))return; // don't run if password is valid
        const isValidPassword = validatePassword(password);
       if(isValidPassword && error===2)setError(null)
       if(isValidPassword && error===12)setError(1)
     }

     const validateLogin = () => {
         let errorVal =validate(username,password);
         if(errorVal){
             setError(errorVal)
         }else{
             login()
         }
     }
     


    return (
        <View testID='loginScreen' style={styles.container}>

            <Text style={styles.header}>Random Person</Text>
            <View>
                <FormInput  hasError={(error===1||error===12)?true:false}
                            testID = "usernameInput"
                            onKeyUp = {keyUpUser}
                            isPassword={false}
                            errorMessage = "Invalid Username"
                            changeValue={changeUsername}
                            value={username} 
                            label="Username" />
                <FormInput   errorMessage = "Invalid Password"
                            testID = "passwordInput" 
                             isPassword={true}
                            onKeyUp = {keyUpPassword}
                             hasError={(error===2||error===12)?true:false}
                             changeValue={changePassword} value={password}
                             label="Password" />
                
                <Button contentStyle={styles.contentButton}
                        testID = "loginButton"
                        mode="contained" 
                        style={styles.button}
                        onPress={validateLogin}>
                            Login
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: cusTheme.bg,
      alignItems:'center',
      justifyContent:'center'
   },
   header: {
       color:cusTheme.primary,
       fontSize:25,
       textAlign:'center',
       marginBottom:30
   },
   button:{
       marginTop:20,
       width:150,
       borderRadius:20,
       alignSelf:'center',
       fontWeight:600,
       backgroundColor:cusTheme.primary,
   },
   contentButton:{
       height:40,
       lineHeight:40
   }
   
});

export default Login
