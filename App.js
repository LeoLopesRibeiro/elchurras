import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { StackRoutes } from "./src/routes/stack.routes";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [renderMap, setRenderMap] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // let address = await Location.reverseGeocodeAsync(location);
      console.log(location.coords);
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);

      setRenderMap(
        <MapView
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: "100%", height: "80%" }}
          minZoomLevel={19}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      );

      //   setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* <StackRoutes /> */}
      {/* {renderMap} */}
      <StackRoutes />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
