import React from "react";
import Header from "../../components/header/header";
import './fotos.css'
import Footer from "../../components/footer/footer";

function Fotos(){
    return(
        <>
        <Header />
        <h1 id="pics">Conheça algumas fotos do filme Batman</h1>
        <div className="gallery-container">
            <div className="gallery">
                <img src="https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg" />
                <img src="https://conteudo.imguol.com.br/c/entretenimento/04/2022/02/25/batman-1645790799911_v2_450x337.jpg" />
                <img src="https://istoe.com.br/wp-content/uploads/2022/03/36.jpg" />
                <img src="https://universoheroico.com.br/wp-content/uploads/2021/07/Batman-The-Dark-Knight.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzxkpcqxzq-E3jfoV_Sy_MXnz-wNup7RGYQ&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdzUnqo2eblI386lZ35eebcpylo5fxBbRWRwCikT-8UyOlerusoH1PsiOclM9VT8fILE&usqp=CAU" />
                <img src="https://macmagazine.com.br/wp-content/uploads/2019/09/13-batman.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWslZn-eQHYdzEd-cDDrmxqUNfZWh0ns991EtNDlI9MMjLH4ohaJpVJ9H5THGMjdssF8&usqp=CAU" />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Fotos;