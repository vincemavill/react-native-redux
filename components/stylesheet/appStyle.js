import { StyleSheet, StatusBar, Dimensions } from 'react-native';

// var color1 = "#4f3a92";
// var color2 = "#442f87";

const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({

    

        container: {
          marginTop: 25,
          padding: 10
        },
        header: {
          fontSize: 20
        },
        nav: {
            marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-around"
        },
        navItem: {
          flex: 1,
          alignItems: "center",
          padding: 10
        },
        subNavItem: {
          padding: 5
        },
        topic: {
          textAlign: "center",
          fontSize: 15
        }

});