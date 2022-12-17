import { useNavigate } from "react-router-dom";
import {
	StyledButton,
	StyledForm,
	StyledPage,
	ErrorMessage,
	SwitchMessage,
} from "./styles";
import { useContext, useState } from "react";
import { LOGIN_URL } from "../../constants/URLs";
import axios from "axios";
import logo from "../../assets/logo.png";
import Loading from "../../animation/Loading";
import { UserContext } from "../../context/UserContext";

export default function LoginPage() {
	const { user, setUser, saveUserLocally } = useContext(UserContext);

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
				<StyledButton type="submit" disabled={isLoading}>
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

	function handleSuccess(answer) {
		navigate("/hoje");
		setUser(answer);
		saveUserLocally(answer);
	}

	function handleError(answer) {
		const message = answer.data.message;

		setIsLoading(false);
		setEmailError(message);
	}

	function authenticate(e) {
		e.preventDefault();

		if (!validateEmail()) {
			return;
		}
		if (!validatePassword()) {
			return;
		}

		setIsLoading(true);

		const request = axios.post(LOGIN_URL, {
			email: email,
			password: password,
		});
		request.then((answer) => handleSuccess(answer.data));
		request.catch((answer) => handleError(answer.response));
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
}
