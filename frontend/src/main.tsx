
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'sonner';
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
    <Toaster  visibleToasts={2} position="top-right" richColors />
    </>
)
