import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.user}>
              <Image source={require('../img/user.png')} />
              <Text style={styles.txtUser}>user@email.com</Text>
            </View>
            <View style={styles.navbar}>
              <TouchableOpacity style={styles.carrinho}>
                <Image source={require('../img/carrinho.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../img/menuHamburger.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.meusCursos}>
            <View>
              <Text style={styles.txtMeusCursos}>Meus cursos</Text>
              <Image source={require('../img/linhaBranca.png')} />
            </View>
            <Image source={require('../img/arrowRight.png')} />
          </TouchableOpacity>
          <View style={styles.cursos}>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoMontagemComputador.png')} style={styles.imgCurso} />
              <Text style={styles.txtCurso}>Curso de Montagem de Computadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoIngles.png')} style={styles.imgCurso} />
              <Text style={styles.txtCurso}>Curso de Inglês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoPython.png')} style={styles.imgCurso} />
              <Text style={styles.txtCurso}>Curso de Python</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.downScreen}>
        <View>
          <TouchableOpacity style={styles.paraVoce}>
            <View>
              <Text style={styles.txtParaVoce}>Para você</Text>
              <Image source={require('../img/linhaPreta.png')} style={styles.linhaPreta1} />
            </View>
          </TouchableOpacity>
          <View style={styles.cursos}>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoMontagemComputador.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Montagem de Computadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoIngles.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Inglês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoPython.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Python</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.paraVoce}>
            <View>
              <Text style={styles.txtParaVoce}>Mais Procurados</Text>
              <Image source={require('../img/linhaPreta.png')} style={styles.linhaPreta2} />
            </View>
          </TouchableOpacity>
          <View style={styles.cursos}>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoMontagemComputador.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Montagem de Computadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoIngles.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Inglês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoPython.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Python</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.paraVoce}>
            <View>
              <Text style={styles.txtParaVoce}>Novos cursos</Text>
              <Image source={require('../img/linhaPreta.png')} style={styles.linhaPreta3} />
            </View>
          </TouchableOpacity>
          <View style={styles.cursos}>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoMontagemComputador.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Montagem de Computadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoIngles.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Inglês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.curso}>
              <Image source={require('../img/cursoPython.png')} style={styles.imgCurso} />
              <Text style={styles.txtCursoDown}>Curso de Python</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  topScreen: {
    backgroundColor: '#1D203E',
  },
  content: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtUser: {
    color: '#ffffff',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  navbar: {
    flexDirection: "row",
  },
  carrinho: {
    marginRight: 40,
  },
  meusCursos: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  txtMeusCursos: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginRight: 15,
  },
  cursos: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 25,
  },
  curso: {
    marginRight: 10,
  },
  imgCurso: {
    width: 150,
    height: 90,
  },
  txtCurso: {
    width: 130,
    height: 30,
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
  },
  downScreen: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
  },
  txtParaVoce: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1D203E',
  },
  linhaPreta1: {
    width: 90,
  },
  linhaPreta2: {
    width: 155,
  },
  linhaPreta3: {
    width: 125,
  },
  txtCursoDown: {
    width: 130,
    height: 30,
    fontSize: 12,
    fontWeight: '500',
    color: '#1D203E',
  }
})