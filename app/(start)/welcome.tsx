import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";

const Home = () => {
  const router = useRouter();
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      router.replace("/home");
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        onPress={() => router.replace("/home")}
        style={{ padding: 20, alignItems: "flex-end" }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={{ width: 8, height: 8, backgroundColor: "#E2E8F0", borderRadius: 4 }} />}
        activeDot={<View style={{ width: 8, height: 8, backgroundColor: "#0286FF", borderRadius: 4 }} />}
        onIndexChanged={setActiveIndex}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={{ alignItems: "center", padding: 20 }}>
            <Image
              source={item.image}
              style={{ width: "100%", height: 300 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 16, color: "#858585", textAlign: "center", marginTop: 10 }}>
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <TouchableOpacity
        onPress={handleNext}
        style={{
          margin: 20,
          backgroundColor: "#0286FF",
          borderRadius: 10,
          padding: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isLastSlide ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
