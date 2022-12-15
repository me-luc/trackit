import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/acessPages/LoginPage";
import SignUpPage from "./pages/acessPages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HistoryPage />} />
				<Route path="/cadastro" element={<SignUpPage />} />
				<Route path="/habitos" element={<HabitsPage />} />
				<Route path="/hoje" element={<TodayPage />} />
				<Route path="/historico" element={<HistoryPage />} />
			</Routes>
		</BrowserRouter>
	);
}
