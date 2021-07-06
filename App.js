import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import styles from './components/stylesheet/appStyle';


import store from './components/features/store/store'
import { Provider } from 'react-redux'
import { NativeBaseProvider } from "native-base"


import Home from './components/Home'
import About from './components/About'
import Topic from './components/Topic'
import Form from './components/Form'

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <NativeRouter>




      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/topic/:topicId" component={Topic} />
      <Route  path="/form" component={Form} />


      </NativeRouter>
    </NativeBaseProvider>
    </Provider>
  );
}



