import { getNoteByDate } from "@/src/db/notes";
import { dateFormatter } from "@/utils/dateFormatter";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, useColorScheme, View } from "react-native";

const viewday = () => {
  const { id } = useLocalSearchParams();
  const [note, setNote] = useState<string | null>(null);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  useEffect(() => {
    const formattedDate = dateFormatter(id as string);
    navigation.setOptions({
      title: formattedDate || "Not görüntüle",
    });

    getNoteByDate(id as string).then((note) => {
      setNote(note && note.content);
    });
  }, []);
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {note && note.length > 0 ? (
        <Text
          style={{
            color: colorScheme === "dark" ? "white" : "black",
            fontSize: 16,
          }}
        >
          {note}
        </Text>
      ) : (
        <Text
          style={{
            color: "gray",
            width: "100%",
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
            fontStyle: "italic",
          }}
        >
          Bu gün için henüz bir not eklenmemiş.
        </Text>
      )}
    </View>
  );
};

export default viewday;
