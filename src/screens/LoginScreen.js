import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = async () => {
    const loginData = {
      descricao_email: email,
      descricao_senha: senha,
    };

    try {
      const response = await fetch("http://192.168.0.7:8080/api/login", {
        method: "GET"
      })

      if (response.status != 200) {
        Alert.alert("Erro", "Não foi possivel fazer a requisicao");
      } else {
        const responseBody = await response.json();
        let found = false
        responseBody["_embedded"]["entityModelList"].forEach(e => {
          const emailFromResponse = e["descricao_email"]
          const senhaFromResponse = e["descricao_senha"]

          if (emailFromResponse == email && senhaFromResponse == senha) {
            console.log("Logado");
            navigation.push("Home");
            found = true

            const carregarLogin = async () => {
              try {
                const obj = await AsyncStorage.getItem('login');
                if (obj == null)
                  console.log('Nenhum login encontrado');
              } catch (error) {
                console.log('Erro ao recuperar dados:', error);
              }
            }

            useEffect(() => { carregarLogin(); }, []);

          }
        })

        if (!found) {
          Alert.alert("Erro", "Usuário ou senha incorretos");
        }

      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      Alert.alert("Erro", "Ocorreu um erro na requisição. Tente novamente mais tarde.");
    }
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../img/arrowLeft.png')} style={styles.voltar} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titulo}>Login</Text>
        <View style={styles.div}>
          <Text style={styles.labelEmail}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu e-mail'
            value={email}
            onChangeText={setEmail}
            type='email'
          />
        </View>
        <View style={styles.div}>
          <Text style={styles.labelSenha}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.divLink}>
          <Text style={styles.textoLink}>Ainda não tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.link}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={logar}>
          <Text style={styles.txtBtn}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  voltar: {
    marginTop: 28,
    marginLeft: 30,
  },
  content: {
    alignItems: 'center',
  },
  titulo: {
    marginTop: 20,
    fontSize: 48,
    fontWeight: '700',
    color: '#1D203E'
  },
  labelEmail: {
    marginTop: 80,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000'
  },
  labelSenha: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000'
  },
  input: {
    width: 300,
    height: 48,
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
    borderColor: '#1D203E',
  },
  divLink: {
    marginTop: 16,
    flexDirection: 'row',
    marginLeft: -80,
  },
  textoLink: {
    marginRight: 4,
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  link: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0079D3'
  },
  btn: {
    marginTop: 24,
    width: 300,
    height: 50,
    backgroundColor: '#1D203E',
    borderRadius: 4,
  },
  txtBtn: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  }
})