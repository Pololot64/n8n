import {
	INodeProperties,
} from 'n8n-workflow';

export const campaignOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'get',
		description: 'Operation to perform',
		options: [
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
			},
		},
	},
] as INodeProperties[];

export const campaignFields = [
	// ----------------------------------
	//        campaign: get
	// ----------------------------------
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'options',
		required: true,
		default: [],
		typeOptions: {
			loadOptionsMethod: 'getCampaigns',
		},
		description: 'ID of the campaign to retrieve.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------
	//        campaign: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Return all results.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 5,
		description: 'The number of results to return.',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
] as INodeProperties[];