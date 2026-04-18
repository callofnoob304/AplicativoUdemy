import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textoFrase: '',
			img: require('./src/assets/biscoito.png')
		};

		this.quebraBiscoito = this.quebraBiscoito.bind(this);

		this.frases = [
			"A vida é um caos aleatório, ordenada pelo tempo",
			"Se podes olhar, vê. Se podes ver, repara",
			"A riqueza não consiste em ter grandes posses, mas em ter poucas necessidades",
			"Três regras: não prometa nada quando estiver feliz; não responda nada quando estiver irritado; não decida nada quando estiver triste",
		]
	}

	quebraBiscoito() {
		let random = Math.floor(Math.random() * this.frases.length)

		this.setState({
			textoFrase: '" ' + this.frases[random] + ' "',
			img: require('./src/assets/biscoitoAberto.png')
		})
	}

	render() {
		return (
			<View style={styles.container}>

				<Image style={styles.img}
					source={this.state.img}
				/>

				<Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

				<TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
					<View style={styles.btnArea}>
						<Text style={styles.btnTexto}>Abrir biscoito</Text>
					</View>
				</TouchableOpacity>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},

	img: {
		width: 250,
		height: 250,
	},

	textoFrase: {
		fontSize: 20,
		color: '#db7b22',
		margin: 30,
		fontStyle: 'italic',
		textAlign: 'center'
	},

	botao: {
		width: 230,
		height: 50,
		borderWidth: 2,
		borderColor: '#dd7b22',
		borderRadius: 24,
	},

	btnArea: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	btnTexto: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#dd7b22'
	}
});

export default App;