const cards = [
	{
		id:'card-1',
		content: 'Learning how to cook'
	},
	{
		id:'card-2',
		content: 'Learning  English'
	},
	{
		id:'card-3',
		content: 'Learning Spanish'
	},
];

const data = {
	lists:{
		'list-1':{
			id: 'list-1',
			title: 'Work',
			cards,
		},
	},
	listIds:['list-1'],
}

export default data;