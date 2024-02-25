import React from 'react';
import {View, StyleSheet} from 'react-native';

import MinMax from './components/MinMax';
// import Comp from './components/Mult';
//import {Comp1, Comp2} from './components/Mult';
//import Primeiro from './components/Primeiro';

export default () => (
  <View style={style.App}>
    <MinMax min={3} max={30} />
    {/* <Comp />
    <Comp1 />
    <Primeiro />
  <Comp2 /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
