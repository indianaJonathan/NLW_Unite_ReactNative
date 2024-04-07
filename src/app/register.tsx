import { useState } from "react";

import { View, Image, Alert } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "react-native";

import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Register () {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    function handleRegister () {
        const errors: string[] = [];
        if (!name.trim()) errors.push("Campo \"Nome\" é obrigatório");
        if (!email.trim()) errors.push("Campo \"E-mail\" é obrigatório");

        if (errors.length > 0) return Alert.alert("Inscrição", `Não foi possível realizar o cadastro devido aos seguintes erros:\n\n${errors.map((erro) => erro).join("\n")}`);

        router.push("/ticket");
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