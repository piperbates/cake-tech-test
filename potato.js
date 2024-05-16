import calculateData from './app.js';

const mockOrder = {
	"orders": [
		{
			"id": "629f41a2-11bc-46a4-bd61-6dc89c36aef9",
			"created_at": "2023-11-30T18:10:35.012Z",
			"items": [
				{
					"name": "Elegant Granite Fish",
					"price": "714.00",
					"sku": "9781203291868"
				},
				{
					"name": "Small Wooden Computer",
					"price": "617.00",
					"sku": "9781071730895"
				},
				{
					"name": "Licensed Cotton Computer",
					"price": "916.00",
					"sku": "9781928427407"
				},
				{
					"name": "Electronic Steel Chicken",
					"price": "690.00",
					"sku": "9781535427986"
				},
				{
					"name": "Luxurious Plastic Soap",
					"price": "192.00",
					"sku": "9781901705390"
				}
			],
			"customer": {
				"name": "Myrtle Gibson",
				"email": "myrtle_gibson67@gmail.com"
			}
		}
    ]
}

calculateData(mockOrder)