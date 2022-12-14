import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledButton, StyledForm, StyledPage } from "./styles";

export default function LoginPage() {
	const navigate = useNavigate();

	return (
		<StyledPage>
			<img src={logo} alt="" />
			<StyledForm action="">
				<input type="email" placeholder="e-mail" />
				<input type="password" placeholder="senha" />
				<StyledButton>Entrar</StyledButton>
				<p onClick={switchToSignUp}>Não tem uma conta? Cadastre-se!</p>
			</StyledForm>
		</StyledPage>
	);

	function switchToSignUp() {
		navigate("/cadastro");
	}
}
