import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import { useSelector, useDispatch } from 'react-redux'
import { addCart, removeCart } from './features/basicSlice'

import Nav from './imports/nav';

import styles from './stylesheet/appStyle';

import { Divider, Button, Center } from 'native-base';

export default function App() {

  const dispatch = useDispatch()

  return (
    <>
      <Nav/>
      <Text style={styles.header}>Home</Text>
      <Divider my={2} mx="auto" />
      <Center flex={1}>
          
      <Button colorScheme="primary" onPress={() =>  dispatch(addCart())}>Add Cart</Button>
      <Divider my={2} mx="auto" />
      <Button colorScheme="emerald" onPress={() => dispatch(removeCart())}>Remove to Cart</Button>
      </Center>
   
    </>
  )
}


