import { useNavigate } from "react-router-dom";
import { StyledButton, StyledForm, StyledPage } from "./styles";
import logo from "../../assets/logo.png";

export default function SignUpPage() {
	const navigate = useNavigate();

	return (
		<StyledPage>
			<img src={logo} alt="" />
			<StyledForm action="">
				<input type="email" placeholder="e-mail" />
				<input type="password" placeholder="senha" />
				<input type="text" placeholder="nome" />
				<input type="text" placeholder="foto" />
				<StyledButton>Cadastrar</StyledButton>
				<p onClick={switchToLogin}>Já tem uma conta? Faça login!</p>
			</StyledForm>
		</StyledPage>
	);

	function switchToLogin() {
		navigate("/");
	}
}
