import AstNode from 'src/core/types/astNode'

const sample: AstNode[] = [
	{
		type: 'header1',
		children: [
			{ type: 'text', value: 'Trumbowyg v3 ' },
			{
				type: 'underline',
				children: [
					{ type: 'text', value: 'will be really great' },
				],
			},
		],
	},
	{
		type: 'paragraph',
		children: [
			{ type: 'text', value: 'Lorem ' },
			{
				type: 'delete',
				children: [
					{ type: 'text', value: 'ipsum ' },
					{
						type: 'strong',
						children: [
							{ type: 'text', value: 'd' },
							{
								type: 'emphasis',
								children: [
									{ type: 'text', value: 'o' },
								],
							},
							{ type: 'text', value: 'lor' },
						],
					},
				],
			},
			{ type: 'text', value: ' ' },
			{
				type: 'underline',
				children: [
					{
						type: 'emphasis',
						children: [
							{ type: 'text', value: 'sit' },
						],
					},
				],
			},
			{ type: 'text', value: ' amet' },
		],
	},
	{
		type: 'paragraph',
		children: [
			{ type: 'text', value: 'And ' },
			{
				type: 'strong',
				children: [
					{ type: 'text', value: 'blah ' },
					{
						type: 'emphasis',
						children: [
							{ type: 'text', value: 'or' },
						],
					},
				],
			},
			{ type: 'text', value: ' nah.' },
		],
	},
	{
		type: 'div',
		children: [
			{ type: 'text', value: 'Salut' },
			{
				type: 'image',
				attributes: [
					{
						key: 'src',
						value: '/contenteditable/img.svg'
					},
					{
						key: 'alt',
						value: 'Some JavaScript logo'
					},
					{
						key: 'width',
						value: '20px'
					},
				],
			},
		],
	},
	{
		type: 'ul',
		children: [
			{
				type: 'li',
				children: [
					{ type: 'text', value: 'Item 1' },
				],
			},
			{
				type: 'li',
				children: [
					{ type: 'text', value: 'Second item' },
				],
			},
			{
				type: 'li',
				children: [
					{ type: 'text', value: 'List in list' },
					{
						type: 'ul',
						children: [
							{
								type: 'li',
								children: [
									{ type: 'text', value: 'Third li' },
								],
							},
							{
								type: 'li',
								children: [
									{ type: 'text', value: 'Fourth Item' },
								],
							},
						],
					},
				],
			},
		],
	},
	{
		type: 'table',
		children: [
			{
				type: 'tableRow',
				children: [
					{
						type: 'tableCell',
						children: [
							{ type: 'text', value: 'Col 1' },
						],
					},
					{
						type: 'tableCell',
						children: [
							{ type: 'text', value: 'Col 2' },
						],
					},
				],
			},
			{
				type: 'tableRow',
				children: [
					{
						type: 'tableCell',
						children: [
							{ type: 'text', value: 'Line 1-1' },
						],
					},
					{
						type: 'tableCell',
						children: [
							{ type: 'text', value: 'Line 1-2' },
						],
					},
				],
			},
			{
				type: 'tableRow',
				children: [
					{
						type: 'tableCell',
						children: [
							{ type: 'text', value: 'Line 2-1' },
						],
					},
					{
						type: 'tableCell',
						children: [
							{ type: 'text', value: 'Line 2-2' },
						],
					},
				],
			},
		],
	},
]


const a = {
	type: 'strong',
	children: [
		{
			type: 'emphasis',
			children: [
				{ type: 'text', value: 'Item 1' },
			],
		},
		{
			type: 'delete',
			children: [
				{ type: 'text', value: 'Second item' },
			],
		},
		{
			type: 'emphasis',
			children: [
				{ type: 'text', value: 'List in list' },
			],
		},
	],
}


const b = {
	type: 'strong',
	children: [
		{
			type: 'emphasis',
			children: [
				{ type: 'text', value: 'Item 1' },
				{
					type: 'delete',
					children: [
						{ type: 'text', value: 'Second item' },
					],
				},
			],
		},
		{
			type: 'emphasis',
			children: [
				{ type: 'text', value: 'List in list' },
			],
		},
	],
}
