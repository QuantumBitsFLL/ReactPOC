import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MapView, {Marker} from 'react-native-maps';
import { WebView } from 'react-native-webview';

const Stack = createNativeStackNavigator();


const HomeScreen = ( {navigation} ) => {
	const [ cnt, setCnt ] = useState( 0 );
	const onPress = () => {
        setCnt( lastCnt => lastCnt + 1 );
        console.log( `Cnt is ${ cnt + 1 }; Was ${ cnt }` );
    };
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello, World! Cnt is { cnt }.</Text>
			<TouchableOpacity style={styles.button} onPress={ onPress }>
				<Text style={styles.text}>Hello, World! Pressed { cnt < 100 ? (cnt + "time" + (cnt === 1 ? '' : s) + "so far.") : `Damn bruh r u from ohio? ${cnt} times` }</Text> 
			</TouchableOpacity>
		</View>
	);
}

const MapScreen = ( {navigation, props} ) => {
    return(
        <View style={ styles.container }>
            <WebView source={{ uri: 'https://maps.google.com' }}/>
        </View>
    )
}

const App = () => {
	console.log( "Hello, World!" );
	return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
			name="Home"
			component={ HomeScreen }
			options={{ title: "Hello, World!", headerShown: false }}
			/>
			
		</Stack.Navigator>
	</NavigationContainer>
  );
}

/*
<View style={styles.container}>
    		<Text style={styles.text}>Open up App.js to start working on your app!</Text>
        	<Text style={styles.text}>Hello, World!</Text>
			<Button
			 onPress={() => console.log( "Hello Button!" ) }
			 style={styles.button}
			 title="Hello Button"/>	
    	</View>
*/

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#20272F',
		color: '#ddd',
    	alignItems: 'center',
    	justifyContent: 'center',
        lineHeight: 100,
	},
  	text: {
		color: '#ddd',
        fontSize: 20,
  	},
	title: {
		fontSize: 27,
		color: "#dff"
	},
  	button: {
		color: "#fff",
		backgroundColor: "#111a2F",
		borderColor: "#FFFFFF",
		borderStyle: "solid",
        borderWidth: 1,
		borderRadius: 12,
		padding: 5,
        margin: 50,
        width: '40%',
        alignContent: 'center',
        alignItems: 'center',
  	},
});

export default App;