import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  StyleSheet
} from "react-native";
import { Icon, Message } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";

const Messages = () => {
  const navigation = useNavigation();

  const handleMessagePress = (item) => {
    navigation.navigate('ChatScreen', { name: item.name, lastMessage: item.message });
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={DEMO.slice(0, 3)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMessagePress(item)}>
              <Message
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles1 = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  containerMessages: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  title: { paddingBottom: 10, fontSize: 22, fontWeight: "bold" }
});

export default Messages;