import "./App.css";
import LogoGeral from "./assets/GERAL.svg";
import LogoLogistica from "./assets/LOGISTICA.svg";
import LogoTransporte from "./assets/TRANSPORTE.svg";
declare global {
    interface Window {
        MSStream?: any;
    }
}
function App() {
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
    function handleMotorista() {
        const userAgent = navigator.userAgent || navigator.vendor;
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
    }
    function handleAuditoria() {
        const userAgent = navigator.userAgent || navigator.vendor;
        // if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        //     window.location.href = "https://apps.apple.com/us/app/coimbra-motorista/id6450483010";
        // }
        // Detecta dispositivos Android
        if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.coimbra.auditoria";
        }
        // Redireciona para uma página de fallback ou mostra uma mensagem
        else {
            window.location.href = "https://www.google.com";
        }
    }

    return (
        <div className="container">
            <div className="card" onClick={handleImobilizado}>
                <img src={LogoGeral} alt="Logo Imobilizado" />
                <span className="textCuston">Imobilizado</span>
            </div>
            <div className="card" onClick={handleGestaoMotorista}>
                <img src={LogoTransporte} alt="Logo Transporte" />
                <span className="textCuston">Supervisor Motorista</span>
            </div>
            <div className="card" onClick={handleMotorista}>
                <img src={LogoTransporte} alt="Logo Transporte" />
                <span className="textCuston">Motorista</span>
            </div>
            <div className="card" onClick={handleAuditoria}>
                <img src={LogoLogistica} alt="Logo Logística" />
                <span className="textCuston">Auditoria</span>
            </div>
        </div>
    );
}

export default App;
