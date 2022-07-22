import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";

function App() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<>
			<Router>
				<AppRouter isLogin={isLogin} />
			</Router>
			<footer>&copy; 오늘두잉 {new Date().getFullYear()} </footer>
		</>
	);
}

export default App;

// 이제 기본 틀 라우터 세팅을 해주어야 합니다. 2022.07.14자
