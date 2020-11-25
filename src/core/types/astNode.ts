type ASTNodeAttribute = {
	key: string
	value: string
}

type AbstractASTNode = {
	type: string
	children?: AstNode[]
	attributes?: ASTNodeAttribute[]
}

type TextASTNode = {
	type: 'text',
	value: string
	children?: undefined
	attributes?: undefined
}

type AstNode = TextASTNode | AbstractASTNode

export default AstNode

export {TextASTNode}
