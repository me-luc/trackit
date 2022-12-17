import { Navigate, useNavigate } from "react-router-dom";

export default function Authenticate() {
	const isAuthenticated = localStorage.getItem("userToken");

	if (isAuthenticated === null || isAuthenticated === "") {
		return <Navigate to="/" />;
	}
}
