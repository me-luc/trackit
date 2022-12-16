import { useNavigate } from "react-router-dom";
import {
	StyledButton,
	StyledForm,
	StyledPage,
	ErrorMessage,
	SwitchMessage,
} from "./styles";
import { useState } from "react";
import { LOGIN_URL } from "../../constants/URLs";
import axios from "axios";

import logo from "../../assets/logo.png";
import Loading from "../../animation/Loading";

export default function LoginPage() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	return (
		<StyledPage>
			<img src={logo} alt="" />
			<StyledForm onSubmit={authenticate}>
				<input
					type="email"
					placeholder="e-mail"
					required
					value={email}
					onChange={updateEmail}
				/>

				{emailError && <ErrorMessage>{emailError}</ErrorMessage>}

				<input
					type="password"
					placeholder="senha"
					required
					value={password}
					onChange={updatePassword}
				/>
				{passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
				<StyledButton
					onClick={validate}
					type="submit"
					disabled={isLoading}>
					{isLoading ? <Loading /> : "Entrar"}
				</StyledButton>
			</StyledForm>

			<SwitchMessage onClick={switchToSignUp}>
				Não tem uma conta? Cadastre-se!
			</SwitchMessage>
		</StyledPage>
	);

	function switchToSignUp() {
		setIsLoading(true);
		navigate("/cadastro");
	}

	function authenticate(e) {
		e.preventDefault();

		validate();

		setIsLoading(true);

		const request = axios.post(LOGIN_URL, {
			email: email,
			password: password,
		});
		request.then((answer) => console.log(answer));
		request.catch((answer) => console.log(answer));

		navigate("/hoje");
	}

	function validate() {
		validateEmail();
		validatePassword();
	}

	function validateEmail() {
		if (email.length === 0) {
			setEmailError("Preencha o campo e-mail!");
		}
		var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
		if (!email.match(mailformat)) {
			setEmailError("E-mail inválido!");
			return;
		}
	}

	function validatePassword() {
		if (password.length === 0) {
			setPasswordError("Preencha o campo senha!");
			return;
		}
	}

	function updateEmail(event) {
		setEmailError("");
		setEmail(event.target.value);
	}
	function updatePassword(event) {
		setPasswordError("");
		setPassword(event.target.value);
	}
}
