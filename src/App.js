import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/acessPages/LoginPage";
import SignUpPage from "./pages/acessPages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

export default function App() {
	localStorage.setItem("userEmail", "email");
	const [user, setUser] = useState({
		email: localStorage.getItem("userEmail"),
		id: localStorage.getItem("userId"),
		image: localStorage.getItem("userImage"),
		name: localStorage.getItem("userName"),
		password: localStorage.getItem("userPassword"),
		token: localStorage.getItem("userToken"),
	});

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<UserContext.Provider value={{ user, setUser, saveUserLocally }}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/habitos" element={<HabitsPage />} />
					<Route path="/hoje" element={<TodayPage />} />
					<Route path="/historico" element={<HistoryPage />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);

	function saveUserLocally({ email, id, image, name, password, token }) {
		console.log("EMAIL IN SAVING", email);
		localStorage.setItem("userEmail", email);
		localStorage.setItem("userId", id);
		localStorage.setItem("userImage", image);
		localStorage.setItem("userName", name);
		localStorage.setItem("userPassword", password);
		localStorage.setItem("userToken", token);
	}

	function checkAuthentication(token) {
		console.log(token);
		console.log(token === null);
		console.log(token === "");
		if (token === null) {
			return false;
		}
		if (token === "") {
			return false;
		}
		return true;
	}
}
