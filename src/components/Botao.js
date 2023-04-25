
class Botao extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open"});
		shadow.appendChild(this.build());
		shadow.appendChild(this.style());

	}

	build() {
		const componentRoot = document.createElement("button");
		componentRoot.setAttribute("class", "btn");
		componentRoot.textContent = this.getAttribute("content");

		return componentRoot;

	}

	style() {
		const style = document.createElement("style");
		style.textContent = `

		.btn {
 			background-color: red;
 			color: #fff;
 			margin: 1rem;
			height: 50px;
			width: 150px;
			border-radius: 8px;
			font-size: 20px;
		}
		`
	
		return style;
	}
}

customElements.define("meu-botao", Botao);