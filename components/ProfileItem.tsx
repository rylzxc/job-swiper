import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>


    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {location}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={16} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info1}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="code-slash-outline" size={16} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info2}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="business-outline" size={16} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info3}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="mic-circle-outline" size={16} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info4}</Text>
    </View>
  </View>
);

export default ProfileItem;
