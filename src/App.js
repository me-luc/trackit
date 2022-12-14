import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
	return (
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
	);
}
