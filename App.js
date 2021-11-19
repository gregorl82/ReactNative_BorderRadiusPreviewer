import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Top left radius: {topLeft}px</Text>
      <Slider
        style={{ height: 5, width: 200, marginTop: 5, marginBottom: 30 }}
        minimumValue={0}
        maximumValue={50}
        step={1}
        value={topLeft}
        onValueChange={(value) => setTopLeft(value)}
      />

      <Text>Top right radius: {topRight}px</Text>
      <Slider
        style={{ height: 5, width: 200, marginTop: 5, marginBottom: 30 }}
        minimumValue={0}
        maximumValue={50}
        step={1}
        value={topRight}
        onValueChange={(value) => setTopRight(value)}
      />

      <Text>Bottom right radius: {bottomRight}px</Text>
      <Slider
        style={{ height: 5, width: 200, marginTop: 5, marginBottom: 30 }}
        minimumValue={0}
        maximumValue={50}
        step={1}
        value={bottomRight}
        onValueChange={(value) => setBottomRight(value)}
      />

      <Text>Bottom left radius: {bottomLeft}px</Text>
      <Slider
        style={{ height: 5, width: 200, marginTop: 5, marginBottom: 30 }}
        minimumValue={0}
        maximumValue={50}
        step={1}
        value={bottomLeft}
        onValueChange={(value) => setBottomLeft(value)}
      />

      <View
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          height: 150,
          backgroundColor: 'pink',
          borderTopLeftRadius: topLeft,
          borderTopRightRadius: topRight,
          borderBottomLeftRadius: bottomLeft,
          borderBottomRightRadius: bottomRight,
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        <Text>Use the sliders to adjust border radius</Text>
      </View>

      <Button
        style={styles.button}
        title={'Reset'}
        onPress={() => {
          setBottomLeft(0);
          setBottomRight(0);
          setTopLeft(0);
          setTopRight(0);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
});
