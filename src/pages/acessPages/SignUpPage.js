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
					type="email"
					placeholder="e-mail"
					onChange={updateEmail}
				/>
				{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
				<input
					type="password"
					placeholder="senha"
					onChange={updatePassword}
				/>

				{passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

				<input type="text" placeholder="nome" onChange={updateName} />

				{nameError && <ErrorMessage>{nameError}</ErrorMessage>}

				<input type="text" placeholder="foto" onChange={updatePhoto} />

				{photoError && <ErrorMessage>{photoError}</ErrorMessage>}

				<StyledButton type="submit" disabled={isLoading}>
					{isLoading ? <Loading /> : "Cadastrar"}
				</StyledButton>

				<SwitchMessage onClick={switchToLogin}>
					{" "}
					Já tem uma conta? Faça login!{" "}
				</SwitchMessage>
			</StyledForm>
		</StyledPage>
	);

	function signUp(e) {
		e.preventDefault();
		setIsLoading(true);

		if (!validateEmail()) {
			return;
		}
		if (!validatePassword()) {
			return;
		}
		if (!validateName()) {
			return;
		}
		if (!validatePhoto()) {
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
		let details = null;

		if (data.details) {
			details = data.details;
		}

		if (message.includes("Usuário")) setEmailError("E-mail já cadastrado");
		if (details && details.includes("image"))
			setPhotoError("Imagem inválida");
	}

	function handleSuccess(answer) {}

	function switchToLogin() {
		navigate("/");
	}

	function validateEmail() {
		if (email.length === 0) {
			setEmailError("Preencha o campo e-mail!");
			setIsLoading(false);
			return false;
		}

		var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		if (!email.match(mailformat)) {
			setEmailError("E-mail inválido!");
			setIsLoading(false);
			return false;
		}
		return true;
	}

	function validatePassword() {
		if (password.length === 0) {
			setPasswordError("Preencha o campo senha!");
			setIsLoading(false);
			return false;
		}
		if (password.length < 8) {
			setPasswordError("Senha deve ter pelo menos 8 caracteres");
			setIsLoading(false);
			return false;
		}
		return true;
	}

	function validatePhoto() {
		if (photo.length === 0) {
			setPhotoError("Preencha o campo da foto!");
			setIsLoading(false);
			return false;
		}
		return true;
	}

	function validateName() {
		if (name.length === 0) {
			setNameError("Preencha o campo do nome!");
			setIsLoading(false);
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
