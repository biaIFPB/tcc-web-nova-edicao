import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextDevTool } from 'react-context-devtool';
import FavoritesProvider, {FavoritesContext} from './context/FavoritesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FavoritesProvider>
		<App />
			<ContextDevTool 
				context={FavoritesContext} 
				id="favorites-context-id" 
				displayName="FavoritesContext" 
			/>
		</FavoritesProvider>
	</React.StrictMode>
)