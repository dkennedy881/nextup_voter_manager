import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

function Queue({ queue }) {
  return (
    <View style={styles.QueueContainer}>
      <View style={styles.metaDataContainer}>
        <Text style={styles.titleText}>{queue.title}</Text>
        <Text style={styles.messageText}>{queue.message}</Text>
        <View style={styles.hoursContainer}>
          <Text style={styles.hoursText}>{queue.hours.open} - </Text>
          <Text style={styles.hoursText}>{queue.hours.close}</Text>
        </View>
      </View>
      <View style={styles.queueCountContainer}>
        <Text style={styles.queueCountText}>100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  QueueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 9,
  },
  titleText: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 15,
    color: "black",
    fontWeight: "200",
    marginBottom: 5,
  },
  hoursText: {
    fontSize: 15,
    color: "grey",
    fontWeight: "300",
  },
  hoursContainer: {
    display: "flex",
    flexDirection: "row",
  },
  metaDataContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginRight: 20,
  },
  queueCountContainer: {
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 0.5,
    borderRadius: 5,
    width: 50,
  },
  queueCountText: {
    padding: 10,
    textAlign: "center",
  },
});

export default Queue;
