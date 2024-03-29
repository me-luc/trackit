import { useNavigate } from "react-router-dom";
import {
	StyledButton,
	StyledForm,
	StyledPage,
	SwitchMessage,
	ErrorMessage,
} from "./styles";
import Loading from "../../animation/Loading";
import logo from "../../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import { SIGNUP_URL } from "../../constants/URLs";

export default function SignUpPage() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");
	const [name, setName] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [nameError, setNameError] = useState("");
	const [photoError, setPhotoError] = useState("");

	return (
		<StyledPage>
			<img src={logo} alt="" />
			<StyledForm onSubmit={signUp}>
				<input
					data-test="email-input"
					type="email"
					placeholder="e-mail"
					onChange={updateEmail}
					disabled={isLoading}
				/>
				{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
				<input
					data-test="password-input"
					type="password"
					placeholder="senha"
					onChange={updatePassword}
					disabled={isLoading}
				/>

				{passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

				<input
					data-test="user-name-input"
					type="text"
					placeholder="nome"
					onChange={updateName}
					disabled={isLoading}
				/>

				{nameError && <ErrorMessage>{nameError}</ErrorMessage>}

				<input
					data-test="user-image-input"
					type="text"
					placeholder="foto"
					onChange={updatePhoto}
					disabled={isLoading}
				/>

				{photoError && <ErrorMessage>{photoError}</ErrorMessage>}

				<StyledButton
					data-test="signup-btn"
					type="submit"
					disabled={isLoading}>
					{isLoading ? <Loading /> : "Cadastrar"}
				</StyledButton>

				<SwitchMessage
					data-identifier="back-to-login-action"
					onClick={switchToLogin}>
					{" "}
					Já tem uma conta? Faça login!{" "}
				</SwitchMessage>
			</StyledForm>
		</StyledPage>
	);

	function signUp(e) {
		e.preventDefault();
		setIsLoading(true);

		let error = 0;

		if (!validateEmail()) {
			error++;
		}
		if (!validatePassword()) {
			error++;
		}
		if (!validateName()) {
			error++;
		}
		if (!validatePhoto()) {
			error++;
		}

		if (error > 0) {
			setIsLoading(false);
			return;
		}

		const request = axios.post(SIGNUP_URL, {
			email: email,
			name: name,
			image: photo,
			password: password,
		});
		request.then((answer) => handleSuccess(answer.response));
		request.catch((answer) => handleError(answer.response.data));
	}

	function handleError(data) {
		setIsLoading(false);

		const message = data.message;

		alert(message);

		let details = null;

		if (data.details) {
			details = data.details;
		}

		if (message.includes("Usuário")) setEmailError("E-mail já cadastrado");
		if (details && details.includes("image"))
			setPhotoError("Imagem inválida");
	}

	function handleSuccess(answer) {
		switchToLogin();
	}

	function switchToLogin() {
		navigate("/");
	}

	function validateEmail() {
		if (email.length === 0) {
			setEmailError("Preencha o campo e-mail!");
			return false;
		}

		var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		if (!email.match(mailformat)) {
			setEmailError("E-mail inválido!");
			return false;
		}
		return true;
	}

	function validatePassword() {
		if (password.length === 0) {
			setPasswordError("Preencha o campo senha!");
			return false;
		}
		if (password.length < 8) {
			setPasswordError("Senha deve ter pelo menos 8 caracteres");
			return false;
		}
		return true;
	}

	function validatePhoto() {
		if (photo.length === 0) {
			setPhotoError("Preencha o campo da foto!");
			return false;
		}
		return true;
	}

	function validateName() {
		if (name.length === 0) {
			setNameError("Preencha o campo do nome!");
			return false;
		}
		return true;
	}

	function updateEmail(event) {
		setEmailError("");
		setEmail(event.target.value);
	}

	function updatePassword(event) {
		setPasswordError("");
		setPassword(event.target.value);
	}

	function updatePhoto(event) {
		setPhotoError("");
		setPhoto(event.target.value);
	}

	function updateName(event) {
		setNameError("");
		setName(event.target.value);
	}
}
