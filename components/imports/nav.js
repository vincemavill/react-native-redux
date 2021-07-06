import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './../features/basicSlice'


import styles from '../stylesheet/appStyle';



export default function App() {

  const [wallet, cart] = useSelector(state => [state.counter.wallet,state.counter.cart])

  return (
    <>
     <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>About</Text>
        </Link>
        <Link to="/topic/hello" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Topics</Text>
        </Link>
        <Link to="/form" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Form</Text>
        </Link>
    </View>

    <Text> Wallet: {wallet}</Text>
    <Text> Cart: {cart}</Text>
    </>
  )
}


