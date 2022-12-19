import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import HabitsPage from "./pages/HabitsPage";
import StoragePage from "./pages/StoragePage";
import LoginPage from "./pages/acessPages/LoginPage";
import SignUpPage from "./pages/acessPages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

export default function App() {
	const [user, setUser] = useState({
		image: localStorage.getItem("userImage"),
		token: localStorage.getItem("userToken"),
	});
	const [progress, setProgress] = useState(0);

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				saveTokenLocally,
				progress,
				setProgress,
				config,
			}}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/habitos" element={<HabitsPage />} />
					<Route path="/hoje" element={<TodayPage />} />
					<Route path="/historico" element={<StoragePage />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);

	function saveTokenLocally({ image, token }) {
		console.log(image);
		localStorage.setItem("userToken", token);
		localStorage.setItem("userImage", image);
	}
}
