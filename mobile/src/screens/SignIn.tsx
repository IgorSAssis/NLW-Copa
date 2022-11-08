import { Center, Text, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";

export function SignIn() {

  const {
    signIn
  } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        type="SECONDARY"
        buttonText="ENTRAR COM O GOOGLE"
        mt={12}
        onPress={signIn }
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
      />
      <Text
        color="white"
        textAlign="center"
        marginTop={4}
      >
        Não utilizamos nenhuma informação além {'\n'} do seu email para realizar a criação da sua conta.
      </Text>
    </Center>
  );
}
