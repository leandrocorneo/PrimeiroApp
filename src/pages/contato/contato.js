import React from "react";
import Header from "../../components/header/header";
import './contato.css'
import Footer from "../../components/footer/footer";

function Contato(){
    return(
        <>
        <Header />
        <div id="banner">
            <form id="contact">
                <h1>Entre em contato conosco</h1>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required></input>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required></input>

                <label for="message">Mensagem:</label>
                <input type="text" id="message" name="message"></input>

                <input type="submit" value="Enviar"></input>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default Contato;