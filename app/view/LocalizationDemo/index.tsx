// import React,{useEffect} from 'react';
// import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
// import strings from '../../constant/LocalizedString';
// import styles from './style';

// const LanguageSupport = () => {

//     const getUserData=async()=>{
//         try{
//           const responce=await fetch("https://reactnative.dev/movies.json")
//           const myData= await responce.json();
//           console.log('My Api data is ========>\n',myData)
//         }
//         catch(error){
//             console.log(error)
//         }
        
//     }

//  useEffect(()=>{
//  getUserData();

//  },[])












//     const setLanguage = (lng: string) => {
//         if (lng == 'en') {
//             strings.setLanguage(lng)
//             return;
//         }
//         if (lng == 'hi') {
//             strings.setLanguage(lng)
//             return;
//         }
//     }

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={styles.mainContainer}>
//                 <View>
//                     <TouchableOpacity style={styles.selectBtn}
//                         onPress={() => setLanguage('en')}
//                     >
//                         <Text>For English</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.selectBtn}
//                         onPress={() => setLanguage('hi')}
//                     >
//                         <Text>For Hindi</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <Text>{strings.CASE_UPDATE}</Text>
//             </View>
//         </SafeAreaView>
//     )
// };
// export default LanguageSupport;
