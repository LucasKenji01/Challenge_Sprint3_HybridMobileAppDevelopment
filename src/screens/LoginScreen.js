import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";


export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  const logar = async () => {
    const loginData = {
      descricao_email: email,
      descricao_senha: senha,
    };

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.replace('Home');
        console.log(loginData);
      })
      .catch((err) => {
        console.log('erro', JSON.stringify(err));
        if (err.code == 'auth/invalid-email')
          alert('Email inválido');
        else if (err.code == 'auth/wrong-password')
          alert('Senha inválida');
        else
          alert(err.message);
      })
  }
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