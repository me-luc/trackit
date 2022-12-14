import { useNavigate } from "react-router-dom";
import { StyledButton, StyledForm, StyledPage } from "./styles";
import logo from "../../assets/logo.png";

import Loading from "./Loading";
import { useState } from "react";

export default function LoginPage() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<StyledPage>
			<img src={logo} alt="" />
			<StyledForm action="">
				<input type="email" placeholder="e-mail" />
				<input type="password" placeholder="senha" />
				<StyledButton onClick={login} disabled={isLoading}>
					{isLoading ? <Loading /> : "Entrar"}
				</StyledButton>
				<p onClick={switchToSignUp}>Não tem uma conta? Cadastre-se!</p>
			</StyledForm>
		</StyledPage>
	);

	function login(e) {
		e.preventDefault();
		setIsLoading(true);
	}

	function switchToSignUp() {
		setIsLoading(true);
		navigate("/cadastro");
	}
}
