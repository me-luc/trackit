import { useNavigate } from "react-router-dom";
import { StyledButton, StyledForm, StyledPage } from "./styles";
import Loading from "../../animation/Loading";
import logo from "../../assets/logo.png";
import { useState } from "react";

export default function SignUpPage() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<StyledPage>
			<img src={logo} alt="" />
			<StyledForm action="">
				<input type="email" placeholder="e-mail" />
				<input type="password" placeholder="senha" />
				<input type="text" placeholder="nome" />
				<input type="text" placeholder="foto" />
				<StyledButton onClick={signUp} disabled={isLoading}>
					{isLoading ? <Loading /> : "Entrar"}
				</StyledButton>
				<p onClick={switchToLogin}> Já tem uma conta? Faça login! </p>
			</StyledForm>
		</StyledPage>
	);

	function signUp(e) {
		e.preventDefault();
		setIsLoading(true);
	}

	function switchToLogin() {
		navigate("/");
	}
}
