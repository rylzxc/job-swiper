import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  const renderNoMoreCards = () => (
    <View style={styles.noMoreCardsContainer}>
      <Text style={styles.noMoreCardsTitle}>
        Upgrade to pro now and get the attention YOU deserve!
      </Text>
      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={styles.upgradeButtonText}>Pro plan for $10/mo</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          verticalSwipe={false}
          renderNoMoreCards={renderNoMoreCards}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.slice(0, 3).map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
