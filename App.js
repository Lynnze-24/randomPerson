import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { useDevice } from './hooks/Device';
import cusTheme from './theme/Theme';
// import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Navigator from './navigation/Navigator';
import { PersonProvider } from './hooks/PersonContext';



export default function App() {
  const{isWeb} = useDevice();
  return (

    <SafeAreaProvider style={{backgroundColor:'black'}}>
    
        {/* <TouchableWithoutFeedback style={{flex:1}} onPress={()=>!isWeb && Keyboard.dismiss()}> */}
         <SafeAreaView style={[styles.container,{width:'100%',maxWidth:isWeb?1500:'100%',alignSelf:'center'}]}>
        
           <StatusBar/>
           <PersonProvider>
              <Navigator/>
          </PersonProvider>
         </SafeAreaView>
         {/* </TouchableWithoutFeedback> */}
    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: cusTheme.bg,
    
  }
});