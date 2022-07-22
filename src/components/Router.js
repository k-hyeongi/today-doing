import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../routes/Home";
import WebApp from "../routes/WebApp";
import Navigation from "./Navigation";

const AppRouter = (props) => {
	const { isLogin } = props;

	return (
		<>
			{isLogin ? <Navigation /> : null}
			<Routes>
				{isLogin ? (
					<>
						<Route exact path="/" element={<Navigate to="/webapp" />} />
						<Route exact path="/webapp" element={<WebApp />} />
					</>
				) : (
					<>
						<Route exact path="/" element={<Navigate to="/home" />} />
						<Route exact path="/home" element={<Home />} />
					</>
				)}
			</Routes>
		</>
	);
};

export default AppRouter;
