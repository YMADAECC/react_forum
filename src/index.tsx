import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeScreen from './components/screens/HomeScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFoundScreen from './components/screens/NotFoundScreen'
import GameScreen from './components/screens/GameScreen'
import HistoryScreen from './components/screens/HistoryScreen'
import RankingScreen from './components/screens/RankingScreen'
import AboutScreen from './components/screens/AboutScreen'
import SettingsScreen from './components/screens/SettingsScreen'

import "./styles/index.css"

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	
	<React.StrictMode>

		<BrowserRouter>

			<div className="w-screen h-screen flex justify-center items-center bg-keys bg-cover text-2xl text-neutral-700">

				<div className="width-800 min-height-500 max-height-screen-90 overflow-y-auto border border-neutral-700 border-4 rounded-xl bg-window">

					<Routes>

						<Route path="/" element={<HomeScreen />} />
						<Route path="/game" element={<GameScreen />} />

						<Route path="/history" element={<HistoryScreen />} />
						<Route path="/settings" element={<SettingsScreen />} />
						<Route path="/ranking" element={<RankingScreen />} />
						<Route path="/about" element={<AboutScreen />} />

						<Route path="*" element={<NotFoundScreen />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	</React.StrictMode>
)