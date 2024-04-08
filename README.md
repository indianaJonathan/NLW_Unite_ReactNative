![nlw_logo](https://github.com/indianaJonathan/NLW_Unite_NodeJS/assets/22666576/0d7cf97d-ff13-4ca3-a5eb-37a62920ac5c)

# pass.in
O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Dependências
- Expo Google fonts - Roboto: @expo-google-fonts/roboto (0.2.3) *Disponibiliza a fonte utilizada na aplicação*
- Expo Vector Icons: @expo/vector-icons (14.0.0) *Disponibiliza os ícones utilizados na aplicação*
- React Native Async Storage: @react-native-async-storage/async-storage (1.21.0) *Utiliza a memória do dispositivo para armazenamento de dados*
- React Navigation - Native: @react-navigation/native (6.0.2) *Possibilita a navegação pela aplicação*
- Axios: axios (1.6.8) *Realiza requisições HTTP*
- Expo: expo (50.0.14) *Framework utilizado para desenvolvimento*
- Expo font: expo-font (11.10.3) *Dependência do Expo*
- Expo image picker: expo-image-picker (14.7.1) *Disponibiliza a seleção de imagens*
    "expo-linking": "~6.2.2",
- Expo Router: expo-router (3.4.8) *Gerencia as rotas da aplicação*
- Expo Splash Screen: expo-splash-screen (0.26.4) *Dependência do Expo*
- Expo status bar: expo-status-bar (1.11.1) *Dependência do Expo*
- Expo system UI: expo-system-ui (2.9.3) *Dependência do Expo*
- Expo web browser: expo-web-browser (12.8.2) *Dependência do Expo*
- Moti: moti (0.28.1) *Possibilita animações da aplicação*
- Nativewind: nativewind (4.0.1) *Dependência do Tailwind CSS*
- React: react (18.2.0) *Dependência do React Native*
- React DOM: react-dom (18.2.0) *Dependência do React Native*
- React Native: react-native (0.73.6) *Framework utilizado para o desenvolvimento*
- React Native DotEnv: react-native-dotenv (3.4.11) *Possibilita a utilização de variáveis de ambiente*
- React Native QRCode SVG: react-native-qrcode-svg (6.3.0) *Possibilita a criação de QRCodes*
- React Native Reanimated: react-native-reanimated (3.6.2) *Possibilita animações da aplicação*
- React Native Safe Area Context: react-native-safe-area-context (4.8.2) *Dependência do React Native*
- React Native Screens: react-native-screens (3.29.0) *Dependência do React Native*
- React Native SVG: react-native-svg (14.1.0) *Dependência do React Native QRCode SVG*
- React Native web: react-native-web (0.19.6) *Dependência do React Native*
- Tailwind CSS: tailwindcss (3.4.3) *Framework de processamento do CSS*
- Zustand: zustand (4.5.2) *Gerencia os estados globais da aplicação*

## Dependências de desenvolvimento
- Babel Core: @babel/core (7.20.0) *Dependência do React Native*
- Types React: @types/react (18.2.45) *Dependência do TypeScript*
- TypeScript: typescript (5.1.3) *Possibilita tipagem estática para desenvolvimento*

## Quick start guide

Instalar dependências do projeto:
```
npm install
```

***Você deve criar o arquivo .env na pasta principal do projeto***

Adicionar variáveis de ambiente:
```
# App
API_URL=<URL DE CONEXÃO COM O BACKEND> # Para o ambiente de desenvolvimento segue o padrão: "http://<SEU ENDEREÇO DE IP>:3333"
```

> *Para realizar as operações corretamente você deve estar com o [ambiente de back-end](https://github.com/indianaJonathan/NLW_Unite_NodeJS) funcionando corretamente*

> *Essa aplicação foi criada para melhorar as habilidades técnicas e não possui nenhum tipo de intenção comercial*
