class Barra extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open"});
		shadow.appendChild(this.build());
		shadow.appendChild(this.style());
	}

	build() {
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class", "barra");

		const titulo = document.createElement("h1");
		titulo.textContent = this.getAttribute("content");

		const subtitulo = document.createElement("p");
		subtitulo.textContent = this.getAttribute("valor");

		componentRoot.appendChild(titulo);
		componentRoot.appendChild(subtitulo);


		return componentRoot;
	}

	style() {
		const style = document.createElement("style");
		style.textContent = `
		* {
			padding: 0;
			margin: 0;
			font-family: 'Cinzel', serif;
			font-size: 50px;
		}

		.barra {
			display: flex;
			flex-direction: column;
			height: 100px;
			width: auto;
			background-color: #333;
			color: #f1f1f1;
			justify-content: center;
			padding-left: 1rem;
			
		}

		h1 {
			letter-spacing: 18px;
			text-align: center;
		}

		p {
			font-size: 20px;
			text-align: center;
			letter-spacing: 10px;

		}

		`
		return style;
	}
	
}

customElements.define("minha-barra", Barra);
