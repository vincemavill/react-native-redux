import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import styles from './stylesheet/appStyle';

import Nav from './imports/nav';

import Get from './features/getAPI';

import { Divider } from "native-base";

export default function Topic({ match }) {
    return (
      <>
        <Nav/>
       
        <Text>ID: {match.params.topicId}</Text>

        <Divider/>

        <Get/>
      </>
    )
  }
  
