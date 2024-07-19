import "./App.css";
import { useEffect } from "react";

declare global {
    interface Window {
        MSStream?: any;
    }
}
function App({ FB }: Window) {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        console.log(userAgent);

        // Detecta dispositivos iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/us/app/coimbra-motorista/id6450483010";
        }
        // Detecta dispositivos Android
        else if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.dcoimbra.appmotorista";
        }
        // Redireciona para uma página de fallback ou mostra uma mensagem
        else {
            window.location.href = "https://www.google.com";
        }
    }, []);
    return (
        <>
            <p>Redirecionando para a loja de aplicativos apropriada...</p>
        </>
    );
}

export default App;
