
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(

    <>
    <App />
    <ToastContainer 
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    // pauseOnFocusLoss
    draggable
    pauseOnHover={true}
    theme="colored"
    transition={Slide} />
    </>
)
