import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import './style/index.css';
import 'grapesjs/dist/css/grapes.min.css';


const root = createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
)