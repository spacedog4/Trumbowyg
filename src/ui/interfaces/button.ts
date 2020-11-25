import State from 'src/core/types/state'

interface Button {
	apply(state: State): void
}

export default Button
