import { useEffect } from "react";

export function AppImobilizado() {
    function handleImobilizado() {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/us/app/coimbra-gest%C3%A3o-patrimonial/id6636491331";
        }
        // Detecta dispositivos Android
        else if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.dcoimbra.appimobilizado";
        }
        // Redireciona para uma página de fallback ou mostra uma mensagem
        else {
            window.location.href = "https://www.google.com";
        }
    }
    useEffect(() => {
        handleImobilizado();
    }, []);
    return <text>App Imobilziado</text>;
}
