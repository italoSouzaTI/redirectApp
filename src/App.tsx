import "./App.css";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        console.log(userAgent);
        // Detect iOS devices
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/us/app/coimbra-motorista/id6450483010";
        }
        // Detect Android devices
        else if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.dcoimbra.appmotorista";
        }
        // Redirect to a fallback page or show a message
        else {
            window.location.href = "https://www.google.com";
        }
    }, []);
    return (
        <>
            <p>redirect</p>
        </>
    );
}

export default App;
