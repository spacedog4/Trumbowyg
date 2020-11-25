import State from 'src/core/types/state'

class Trumbowyg {
	state: State
	element: HTMLElement

	constructor(element: HTMLElement) {
		this.element = element
		this.state = {
			ast: []
		}
	}

}

export default Trumbowyg
