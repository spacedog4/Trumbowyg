import Ast from 'src/core/classes/ast'
import TbwSelection from 'src/core/types/tbwSelection'

type State = {
	ast: Ast
	selection?: TbwSelection
}

export default State
