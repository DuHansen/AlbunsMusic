import { Outlet } from "react-router-dom";
import '../App.css';
import Footer from "./Footer";
import Header from "./Header";

export default function Body() {
  return (
    <div className="body">
    <>
      <div className="menu">
        <Header />
      </div>
      <section id='principal'>
        <div className="musicas">
         <Outlet />
      </div>
      </section>
      <section id='footer'>
        <div className="rodape">
          <Footer />
        </div>
      </section>
    </>
    </div>
  );
}