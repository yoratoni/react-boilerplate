import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "@/_app"

const rootElement = document.getElementById("root")

if (!rootElement) {
	throw new Error("Root element not found")
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
