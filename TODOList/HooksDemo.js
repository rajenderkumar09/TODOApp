
import React, { useState, useEffect } from 'react';

import { Text, View } from 'react-native';


export default function HookDemo() {

    const [count, setCount] = useState(0)

    useEffect (() => {
       const interval = setInterval(() => {
            setCount(count+1)
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <View style={{backgroundColor:'pink', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}> {`Interval: ${count}`} </Text>
        </View>
    )
}