import { useState } from "react";
import { StatusBar } from "react-native";
import { Link, Redirect } from "expo-router";
import { View, Image, Alert } from "react-native";

import axios from "axios";

import { api } from "@/server/api";
import { useBadgeStore } from "@/store/badge-store";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Home () {
    const badgeStore = useBadgeStore();

    const [code, setCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleAccessCredential () {
        try {
            setIsLoading(true);
            if (!code.trim()) return Alert.alert("Ingresso", "Informe o código do ingresso!");

            const { data } = await api.get(`/attendees/${code}/badge`);

            badgeStore.save( { ...data.badge, id: code });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data) return Alert.alert("Ingresso", error.response?.data.message);
            }
            Alert.alert("Ingresso", "Ingresso não encontrado!");
        } finally {
            setIsLoading(false);
        }
    }

    if (badgeStore.data) return <Redirect href="/ticket" />;

    return (
        <View className="flex-1 bg-green-500 items-center justify-center p-8">
            <StatusBar barStyle="light-content" />
            <Image
                source={require("@/assets/logo.png")}
                className="h-16"
                resizeMode="contain"
            />
            <View className="w-full mt-12 gap-3">
                <Input>
                <MaterialCommunityIcons
                    name="ticket-confirmation-outline"
                    color={colors.green[200]}
                    size={20}
                />
                <Input.Field
                    placeholder="Código do ingresso"
                    onChangeText={setCode}
                />
                </Input>
                <Button
                    title="Acessar credencial"
                    onPress={handleAccessCredential}
                    isLoading={isLoading}
                />
                <Link
                    href="/register"
                    className="text-gray-100 text-base font-bold text-center mt-8"
                >
                    Ainda não possui ingresso?
                </Link>
            </View>
        </View>
    );
}