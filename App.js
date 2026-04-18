import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			input: '',
		};

		this.entrar = this.entrar.bind(this);
	};

	entrar() {
		if (this.state.input === '') {
			alert("Digite seu nome!");
			return;
		};

		this.setState({ nome: "Bem vindo: " + this.state.input })
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.input}
					onChangeText={(texto) => this.setState({ input: texto })} 
					underlineColorAndroid="transparent" 
					placeholder="Digite seu nome"
				/>

				<Button title="Entrar" onPress={this.entrar} />

				<Text style={styles.texto}>{this.state.nome}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	input: {
		height: 45,
		borderWidth: 1,
		borderColor: '#222',
		margin: 10,
		padding: 10,
		fontSize: 20,
	},

	texto: {
		textAlign: 'center',
		fontSize: 25,
	}
});

export default App;