import React, { useState, useEffect } from 'react';
import { View, Text, NativeModules } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import GLModelView from 'react-native-gl-model-view';

const MyMap = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 20.642805747259146,
          longitude: -103.42938299800035
        }}
        camera={{
          center: { latitude: 20.642805747259146, longitude: -103.42938299800035 },
          zoom: 15
        }}
        onRegionChange={setMapRegion}
      >
        {/* <Marker coordinate={{ latitude: 20.642805747259146, longitude: -103.42938299800035 }} /> */}
        <Marker>
          <GLModelView source={{ glb: 'https://stsiliantstaticdev.blob.core.windows.net/map-3d-models/taxi.glb' }} wireframe={false} style={{ transform: [{ scale: 0.05 }] }} />
        </Marker>
      </MapView>
  
    </View>
  );
};

  export default MyMap;
  