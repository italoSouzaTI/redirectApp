import { useEffect } from "react";

export function AppGestaoMotorista() {
    function handleGestaoMotorista() {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/us/app/coimbra-gest%C3%A3o-de-motorista/id6739811424";
        }
        // Detecta dispositivos Android
        else if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.dcoimbra.appgestaomotorista";
        }
        // Redireciona para uma página de fallback ou mostra uma mensagem
        else {
            window.location.href = "https://www.google.com";
        }
    }
    useEffect(() => {
        handleGestaoMotorista();
    }, []);
    return <text>App Gestão Motorista</text>;
}
