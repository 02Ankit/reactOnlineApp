import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Courses from './src/screens/Courses';
import UserData from './src/screens/UserData';
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }


  return (
 <NavigationContainer>
  {/*  Home Screen */}
 <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
    name='Home'
    options={{headerShown:false, //Header me Home Nahi Dikhana hai. 
    }}>
    {(props) => <Home {...props} channelName={'Ankit Tech'}/>}

    </Stack.Screen>


    {/*  Courses Screen */}
      <Stack.Screen 
      
      name='Courses' 
      component={Courses}
      options={{

        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_700Bold",
        },
        headerTitle: "courses",
        headerTitleAlign: "center"
      }}
    />

    {/*  About Screen */}
      <Stack.Screen 
      
      name='About' 
      component={About}
      options={{

          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitle: "About",
          headerTitleAlign: "center"
        }}
      />

    

      {/*  Contact Screen */}
      <Stack.Screen 
      
      name='Contact' 
      component={Contact}
      options={{

        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_700Bold",
        },
        headerTitle: "Contact",
        headerTitleAlign: "center"
      }}
    />


      {/*  USerData Screen */}
      <Stack.Screen 
      
      name='Student' 
      component={UserData}
      options={{

        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_700Bold",
        },
        headerTitle: "Students",
        headerTitleAlign: "center"
      }}
    />

 </Stack.Navigator>
 </NavigationContainer>
  );
}


