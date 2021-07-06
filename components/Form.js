import React, { useState } from 'react'

import { StyleSheet, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import { useSelector, useDispatch } from 'react-redux'
import {  addAmount ,deductAmount }  from './features/basicSlice'

import Nav from './imports/nav';

import styles from './stylesheet/appStyle';

import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider
  } from 'native-base';



export default function App() {

  const dispatch = useDispatch()

  const [username, inputUsername] = useState("")
  const [password, inputPassword] = useState("")


  const handleSubmit = () => {
    // setCount(count + 1);

    let data = {
        "username" : username,
        "password" : password,
    } 

    console.log(data)
  }

  

  return (
    <>
      <Nav/>
      <Text style={styles.header}>About</Text>
      <Divider my={2} mx="auto" />
    
      <Box
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
        <Heading size="lg" color='primary.500'>
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign in to continue!
        </Heading>

        <FormControl isRequired>
        <FormControl.Label><Text bold italic>Username</Text></FormControl.Label>
        <Input
          placeholder=""
          onChangeText={inputUsername}
          value={username}
        />

        <FormControl.Label mt="2"><Text bold italic>Password</Text></FormControl.Label>
        <Input
          placeholder=""
          type="password"
          
          value={password}
          onChangeText={inputPassword}
        />



        <Button onPress={handleSubmit} mt={5} colorScheme="cyan">
        Submit
        </Button>
      </FormControl>

        </Box>
    </>
  )
}


