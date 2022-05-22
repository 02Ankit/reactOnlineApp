import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation()
    
  return (
    <View style = {styles.menuContainer}>
            
            <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={()=>{
                navigation.navigate("Courses")
            }}>

        {/**<Text>Courses</Text>**/}
        <Image 
        style = {styles.iconStytle}
        source={{uri:"https://img.icons8.com/stickers/90/000000/training.png",}} />
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={()=>{
                navigation.navigate("About")
            }}>
             {/** <Text>About</Text>**/}
             <Image
             style={styles.iconStytle}
             source={{
               uri: "https://img.icons8.com/stickers/100/000000/about.png",
             }}
           />
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={()=>{
                navigation.navigate("Student")
            }}>
             {/** <Text>About</Text>**/}
             <Image
             style={styles.iconStytle}
             source={{
               uri: "https://img.icons8.com/stickers/100/000000/conference.png",
             }}
           />
             <Image />
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={()=>{
                navigation.navigate("Contact")
            }}>
            {/*<Text>Contact</Text>*/}
            <Image
            style={styles.iconStytle}
            source={{
              uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
            }}
          />
            </TouchableOpacity>

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer: {

        flexDirection : "row",
        justifyContent: "space-evenly"

    },
    iconStytle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
      },
})