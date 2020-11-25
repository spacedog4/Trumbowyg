import test from 'ava'
import Ast from 'src/core/classes/ast'


test('getAstNodeForIndex', t => {
	const sourceAst = {
		type: 'root',
		children: [
			{
				type: 'delete',
				children: [
					{type: 'text', value: 'Sec'},
					{
						type: 'emphasis',
						children: [
							{
								type: 'sup',
								children: [
									{type: 'text', value: 'nd'},
								]
							},
							{type: 'text', value: 'ond'},
						]
					},
					{type: 'text', value: ' item'},
				],
			},
		],
	}

	const ast = new Ast(sourceAst)

	t.deepEqual(ast.getAstNodeForIndex(1), {node: {type: 'text', value: 'Sec'}, index: 1})
	t.deepEqual(ast.getAstNodeForIndex(5), {node: {type: 'text', value: 'ond'}, index: 2})
	t.deepEqual(ast.getAstNodeForIndex(0), {node: {type: 'text', value: 'Sec'}, index: 0})
	t.deepEqual(ast.getAstNodeForIndex(11), {node: {type: 'text', value: ' item'}, index: 5})
})

test('getAstNodesForSelection', t => {
	const sourceAst = {
		type: 'root',
		children: [
			{
				type: 'delete',
				children: [
					{type: 'text', value: 'Sec'},
					{
						type: 'emphasis',
						children: [
							{type: 'text', value: 'ond'},
						]
					},
					{type: 'text', value: ' item'},
				],
			},
		],
	}

	const ast = new Ast(sourceAst)

	t.deepEqual(ast.getAstNodesForSelection(), {node: {type: 'text', value: 'Sec'}, index: 1})
})



test.skip('wrap at same level', t => {
	const sourceAst = {
		type: 'root',
		children: [
			{
				type: 'delete',
				children: [
					{ type: 'text', value: 'Second item' },
				],
			},
		],
	}

	const outputAst = {
		type: 'root',
		children: [
			{
				type: 'delete',
				children: [
					{type: 'text', value: 'Sec'},
					{
						type: '@type',
						children: [
							{type: 'text', value: 'ond'},
						]
					},
					{type: 'text', value: ' item'},
				],
			},
		],
	}

	const ast = new Ast(sourceAst)
	ast.wrap({
		start: 2,
		end: 5
	}, {
		type: '@type'
	})

	t.deepEqual(ast.state, outputAst)
})



test.skip('wrap at different level', t => {
	const sourceAst = {
		type: 'root',
		children: [
			{
				type: 'delete',
				children: [
					{type: 'text', value: 'Sec'},
					{
						type: 'emphasis',
						children: [
							{
								type: 'sup',
								children: [
									{type: 'text', value: 'nd'},
								]
							},
							{type: 'text', value: 'ond'},
						]
					},
					{type: 'text', value: ' item'},
				],
			},
		],
	}

	const outputAst = {
		type: 'root',
		children: [
			{
				type: 'delete',
				children: [
					{type: 'text', value: 'Se'},
					{
						type: '@type',
						children: [
							{type: 'text', value: 'c'},
							{
								type: 'emphasis',
								children: [
									{
										type: 'sup',
										children: [
											{type: 'text', value: 'nd'},
										]
									},
									{type: 'text', value: 'on'},
								]
							},
						],
					},
					{
						type: 'emphasis',
						children: [
							{type: 'text', value: 'd'},
						]
					},
					{type: 'text', value: ' item'},
				],
			},
		],
	}

	const ast = new Ast(sourceAst)
	ast.wrap({
		start: 2,
		end: 7
	}, {
		type: '@type'
	})

	t.deepEqual(ast.state, outputAst)
})

