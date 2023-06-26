import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"

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
						<Route path="/" element={<div>Home</div>} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	</React.StrictMode>
)