import React from "react";
import './comentarios.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Comentarios(){
    return(
        <>
        <Header />
        <div className="comments-container-1">
            <div className="comments-container">
                <div className="comment-form">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name" required placeholder="Digite seu nome completo" />
                    <label for="email">E-mail:</label>
                    <input type="text" id="email" name="email" required placeholder="Digite seu e-mail" />
                    <label for="comment">Comentario:</label>
                    <input type="text" id="mensagem" name="menssagem" required placeholder="Digite sua menssagem" />
                    <input type="submit" value="Enviar"/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Comentarios;