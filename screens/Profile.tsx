import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
  } = DEMO[5];

  const handleSecureOpportunity = () => {
    navigation.navigate('Chat'); // Navigate to the Chat tab
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.profileInfoContainer}>
        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />
        </View>

        <View style={styles.actionsProfile}>


          <TouchableOpacity style={styles.roundedButton} onPress={handleSecureOpportunity}>
            <Icon name="chatbubble" size={20} color={WHITE} />
            <Text style={styles.textButton}>Secure your opportunity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
