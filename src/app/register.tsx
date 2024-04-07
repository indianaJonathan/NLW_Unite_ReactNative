import { useState } from "react";

import { StatusBar } from "react-native";
import { Link, router } from "expo-router";
import { View, Image, Alert } from "react-native";

import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

import { useBadgeStore } from "@/store/badge-store";
import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { api } from "@/server/api";

const EVENT_ID = "c7c7a8f1-0237-4def-a92a-726ecb8dbae9";

export default function Register () {
    const badgeStore = useBadgeStore();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleRegister () {
        try {
            const errors: string[] = [];
            if (!name.trim()) errors.push("Campo \"Nome\" é obrigatório");
            if (name.trim().length < 4) errors.push("Campo \"Nome\" precisa ter pelo menos 4 caracteres");
            if (!email.trim()) errors.push("Campo \"E-mail\" é obrigatório");

            if (errors.length > 0) return Alert.alert("Inscrição", `Não foi possível realizar o cadastro devido aos seguintes erros:\n\n${errors.map((erro) => erro).join("\n")}`);

            setIsLoading(true);

            const registerResponse = await api.post(`/events/${EVENT_ID}/attendees`, {
                name,
                email,
            });

            if (registerResponse.data.attendeeId) {
                const { data } = await api.get(`/attendees/${registerResponse.data.attendeeId}/badge`);

                badgeStore.save({ ...data.badge, id: registerResponse.data.attendeeId });

                Alert.alert("Inscrição", "Inscrição realizada com sucesso!", [
                    {
                        text: "OK",
                        onPress: () => router.push("/ticket"),
                    }
                ]);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data) return Alert.alert("Inscrição", error.response?.data.message);
            } 
            Alert.alert("Inscrição", "Não foi possível fazer a inscrição");
        } finally {
            setIsLoading(false);
        }
    }
    
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
                    <FontAwesome6
                        name="user-circle"
                        color={colors.green[200]}
                        size={20}
                    />
                    <Input.Field
                        placeholder="Nome completo"
                        onChangeText={setName}
                    />
                </Input>
                <Input>
                    <MaterialIcons
                        name="alternate-email"
                        color={colors.green[200]}
                        size={20}
                    />
                    <Input.Field
                        placeholder="E-mail"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                </Input>
                <Button
                    title="Realizar inscrição"
                    onPress={handleRegister}
                    isLoading={isLoading}
                />
                <Link
                    href="/"
                    className="text-gray-100 text-base font-bold text-center mt-8"
                >
                    Já possui ingresso?
                </Link>
            </View>
        </View>
    );
}