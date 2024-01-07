// resultsView and recipeView have a lot of common methods like
// render, renderSpinner, renderError

import icons from 'url:../../img/icons.svg';

// export the class itself because class is just for inheritance
// we will not create instances of this class
export default class View {
	_data;

	_clearParentElem() {
		this._parentElem.innerHTML = '';
	}

	render(data) {
		this._data = data;
		this._clearParentElem();
		this._parentElem.insertAdjacentHTML('afterbegin', this._generateMarkup());
	}

	renderSpinner() {
		// prettier-ignore
		const html = 
        `<div class="spinner">
        <svg>
        <use href="${icons}.svg#icon-loader"></use>
        </svg>
        </div>`;

		this._clearParentElem();
		this._parentElem.insertAdjacentHTML('afterbegin', html);
	}

	renderError(msg) {
		// prettier-ignore
		const markup = 
        `<div class="error">
        <div><svg><use href="${icons}#icon-alert-triangle"></use></svg></div>
        <p>${msg}</p>
        </div>`
		this._clearParentElem();
		this._parentElem.insertAdjacentHTML('afterbegin', markup);
	}

	renderMessage(msg) {
		// prettier-ignore
		const markup = 
        `<div class="message">
        <div><svg><use href="${icons}#icon-smile"></use></svg></div>
        <p>${msg}</p>
        </div>`
		this._clearParentElem();
		this._parentElem.insertAdjacentHTML('afterbegin', markup);
	}
}
