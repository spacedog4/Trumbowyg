import AstNode, {TextASTNode} from 'src/core/types/astNode'
import TbwSelection from 'src/core/types/tbwSelection'
import ROOT_NODE from 'src/core/constants/rootNode'

class Ast {
	state: AstNode

	constructor(state: AstNode = ROOT_NODE) {
		this.state = state
	}

	wrap(selection: TbwSelection | undefined, astNode: AstNode) {
		if (selection === undefined) {
			return
		}
	}

	getAstNodeForIndex(absoluteIndex: number, astNode?: AstNode): {node: AstNode | undefined, index: number} {
		let node = undefined
		let index = absoluteIndex
		let childNodes = (astNode || this.state).children || []

		for (let childNode of childNodes) {
			if (childNode.type === 'text') {
				let textNodeLength = (childNode as TextASTNode).value.length

				if (index <= textNodeLength) {
					return {
						node: childNode,
						index,
					}
				}

				index -= textNodeLength
			} else {
				const result = this.getAstNodeForIndex(index, childNode)
				index = result.index

				if (result.node !== undefined) {
					return {
						node: result.node,
						index,
					}
				}
			}
		}

		return {
			node,
			index
		}
	}

	getAstNodesForSelection(selection: TbwSelection, astNode?: AstNode): {node: AstNode | undefined, index: number} {
		let node = undefined
		let startIndex = selection.start
		let endIndex = selection.end
		let childNodes = (astNode || this.state).children || []

		for (let childNode of childNodes) {
			if (childNode.type === 'text') {
				let textNodeLength = (childNode as TextASTNode).value.length

				if (index <= textNodeLength) {
					return {
						node: childNode,
						index,
					}
				}

				index -= textNodeLength
			} else {
				const result = this.getAstNodeForIndex(index, childNode)
				index = result.index

				if (result.node !== undefined) {
					return {
						node: result.node,
						index,
					}
				}
			}
		}

		return {
			node,
			index
		}
	}
}

export default Ast
