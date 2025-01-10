import "../../App.css";
import LogoGeral from "../../assets/GERAL.svg";
import LogoTransporte from "../../assets/TRANSPORTE.svg";
import { Link } from "react-router";
export function Home() {
    return (
        <div className="container">
            <div className="card">
                <Link to="/AppImobilizado">
                    <img src={LogoGeral} alt="Logo Imobilizado" />
                    <span className="textCuston">Imobilizado</span>
                </Link>
            </div>
            <div className="card">
                <Link to="/AppGestaoMotorista">
                    <img src={LogoTransporte} alt="Logo Transporte" />
                    <span className="textCuston">Supervisor Motorista</span>
                </Link>
            </div>
            <div className="card">
                <Link to="/AppMotorista">
                    <img src={LogoTransporte} alt="Logo Transporte" />
                    <span className="textCuston">Motorista</span>
                </Link>
            </div>
        </div>
    );
}
