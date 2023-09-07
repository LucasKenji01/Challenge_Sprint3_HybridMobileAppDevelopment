import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function BemVindo() {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo</Text>
      <Image source={require('../src/img/ImgBemVindo.png')} style={styles.img}/>
      <Text style={styles.texto}>Acesse ou cadastre-se com o e-mail</Text>
      <TouchableOpacity style={styles.botao}>
        <Image source={require('../src/img/carta.png')} style={styles.carta}/>
        <Text style={styles.txtBotao}>Acessar com o E-mail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.txtLink}>Cadastre-se com o E-mail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  titulo: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1D203E'
  },
  img: {
    marginTop: 60,
  },
  texto: {
    width: 256,
    height: 60,
    marginTop: 30,
    fontSize: 24,
    fontWeight: '700',
    color: '#1D203E',
    textAlign: "center",
  },
  botao: {
    marginTop: 40,
    flexDirection: "row",
    borderWidth: 1,
    paddingTop: 20,
    paddingRight: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    borderRadius: 4,
    borderColor: '#434447'
  },
  carta: {
    marginRight: 30,
  },
  txtBotao: {
    fontSize: 16,
    fontWeight: '700',
    color: '#434447',
  },
  link: {
    marginTop: 30,
  },
  txtLink: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0079D3',
  }
})
