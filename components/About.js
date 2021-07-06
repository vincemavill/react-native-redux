import React, { useState } from 'react'

import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import { useSelector, useDispatch } from 'react-redux'
import {  addAmount ,deductAmount }  from './features/basicSlice'

import Nav from './imports/nav';

import styles from './stylesheet/appStyle';

import { Divider, Button, Center, Input } from 'native-base';



export default function App() {

  const dispatch = useDispatch()

  const [amount, inputAmount] = useState("100");
  

  return (
    <>
      <Nav/>
      <Text style={styles.header}>About</Text>
      <Divider my={2} mx="auto" />
      <Center flex={1}>

      <Input
      keyboardType={'numeric'}

      w="50%"
      mx={3}
      my={3}
      
      _light={{
        placeholderTextColor: "blueGray.400",
      }}
      _dark={{
        placeholderTextColor: "blueGray.50",
      }}
      value={amount} 
      numericvalue
      onChangeText={inputAmount}
    />
      <Button colorScheme="primary"  my={3} onPress={() => dispatch(addAmount(Number(amount)))}>Add Cart</Button>
      <Button colorScheme="emerald"  my={3} onPress={() => dispatch(deductAmount(Number(amount)))}>Remove to Cart</Button>
      </Center>
    </>
  )
}


