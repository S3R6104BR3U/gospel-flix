class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("imagem");


        const titulo = document.createElement("p");
		titulo.textContent = this.getAttribute("content");

        const time = document.createElement('p');
        time.textContent = this.getAttribute("time") + " min";

        const ano = document.createElement('p');
        ano.textContent = this.getAttribute("ano");

        const link = document.createElement('a');
        link.textContent = "assistir";
        link.href = this.getAttribute("link");
        link.target = "_blank";

        componentRoot.appendChild(imagem);
        componentRoot.appendChild(titulo);
        componentRoot.appendChild(ano);
        componentRoot.appendChild(time);
        componentRoot.appendChild(link);

        return componentRoot;

    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                font-family: 'Roboto', sans-serif;
            }
            
            .card {
			
                color: #fff;
                background-color: #333;
                font-size: 16px;
                text-align: center;
                height: 350px;
			    width: 300px;
                border-radius: 8px;
                margin: 1rem;
            }

            img {
                width: 280px;
                margin: 10px;
            }


            a {
                color: #66ff66;
            }
        `
        return style;
    }
}

customElements.define('my-card', Card);