import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CadastroScreen({ navigation }) {
 return (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('../img/arrowLeft.png')} style={styles.voltar}/>
    </TouchableOpacity>
    <View style={styles.content}>
      <Text style={styles.titulo}>Cadastro</Text>
      <View style={styles.div}>
        <Text style={styles.labelEmail}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um e-mail'
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.labelSenha}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite uma senha'
        />
      </View>
      <View style={styles.divLink}>
        <Text style={styles.textoLink}>Já tenho conta.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Fazer login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>Cadastrar</Text>
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
    marginLeft: -120,
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