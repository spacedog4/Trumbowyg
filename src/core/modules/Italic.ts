import State from 'src/core/types/state'

class Italic {
	apply(state: State) {
		state.ast.wrap(state.selection, {
			type: 'italic'
		})
	}
}

export default Italic
