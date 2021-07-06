import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector, useDispatch } from 'react-redux'


import { getPosts } from './getSlice'

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])

    const list = useSelector(state => state.posts.result)
    
    console.log(list)

  return (
    
     <Text>GET API</Text>

  );
}
