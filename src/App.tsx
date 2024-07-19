import "./App.css";
import { useEffect } from "react";
type Window = {
    FB: any;
};
function App({ FB }: Window) {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        console.log(userAgent);
        // Detect iOS devices
        if (/iPad|iPhone|iPod/.test(userAgent) && !FB.MSStream) {
            FB.location.href = "https://apps.apple.com/us/app/coimbra-motorista/id6450483010";
        }
        // Detect Android devices
        else if (/android/i.test(userAgent)) {
            FB.location.href = "https://play.google.com/store/apps/details?id=com.dcoimbra.appmotorista";
        }
        // Redirect to a fallback page or show a message
        else {
            FB.location.href = "https://www.google.com";
        }
    }, []);
    return (
        <>
            <p>redirect</p>
        </>
    );
}

export default App;
