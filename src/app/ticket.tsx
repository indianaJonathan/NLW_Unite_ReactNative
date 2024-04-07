import { useState } from "react";

import {
    Text,
    View,
    Alert,
    Modal,
    Share,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MotiView } from "moti";

import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { useBadgeStore } from "@/store/badge-store";
import { colors } from "@/styles/colors";

import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Credential } from "@/components/credential";
import { QRCode } from "@/components/qrcode";
import { Redirect } from "expo-router";

export default function Ticket () {
    const badgeStore = useBadgeStore();

    const [expandQRCode, setExpandQRCode] = useState<boolean>(false);

    async function handleSelectImage () {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
            });

            if (result.assets) badgeStore.updateAvatar(result.assets[0].uri);
        } catch (error) {
            console.log(error);
            Alert.alert("Foto", "Não foi possível selecionar a imagem!");
        }
    }

    async function handleShare () {
        try {
            if (badgeStore.data?.checkInURL) {
                console.log("Sharing", badgeStore.data?.checkInURL);
                await Share.share({
                    message: "teste",
                });
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Compartilhar", "Não foi possível compartilhar");
        }
    }

    if (!badgeStore.data) return <Redirect href="/" />;

    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title="Minha credencial" />
            <ScrollView
                className="-mt-28 -z-10"
                contentContainerClassName="px-8 pb-8"
                showsVerticalScrollIndicator={false}
            >
                <Credential
                    data={badgeStore.data}
                    onChangeAvatar={handleSelectImage}
                    onExpandQRCode={() => setExpandQRCode(true)}
                />

                <MotiView
                    from={{
                        translateY: 0,
                    }}
                    animate={{
                        translateY: 10,
                    }}
                    transition={{
                        loop: true,
                        type: "timing",
                        duration: 700,
                    }}
                >
                    <FontAwesome
                        name="angle-double-down" size={24}
                        color={colors.gray[300]}
                        className="self-center my-6"
                    />
                </MotiView>

                <Text className="text-white font-bold text-2xl mt-4">
                    Compartilhar credencial
                </Text>

                <Text className="text-white font-regular text-base mt-1 mb-6">
                    Mostre ao mundo que você vai participar do evento {badgeStore.data.eventTitle}
                </Text>

                <Button title="Compartilhar" onPress={() => handleShare()} />
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => badgeStore.remove()}
                >
                    <View className="mt-10">
                        <Text className="text-base text-white font-bold text-center">
                            Remover ingresso
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                visible={expandQRCode}
                statusBarTranslucent
                animationType="slide"
            >
                <View className="flex-1 bg-green-500 items-center justify-center">
                    <QRCode value={badgeStore.data.checkInURL} size={300} />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setExpandQRCode(false)}
                    >
                        <View className="mt-10">
                            <Text className="font-body text-orange-500 text-sm text-center">
                                Fechar QRCode
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}