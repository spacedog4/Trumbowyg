import {Italic} from '@/src/core/modules'
import State from 'src/core/types/state'
import Button from 'src/ui/interfaces/button'

class ItalicButton implements Button {
	apply(state: State): void {
		Italic.apply(state)
	}
}

export default ItalicButton
