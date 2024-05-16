const calculateData = require('./calculateData.js');

describe('When the function is run', ()=>{
    const mockOrder = {
        "orders": [
            {
                "id": "629f41a2-11bc-46a4-bd61-6dc89c36aef9",
                "created_at": "2023-11-30T18:10:35.012Z",
                "items": [
                    {
                        "name": "Elegant Granite Fish",
                        "price": "10.00",
                        "sku": "9781203291868"
                    },
                    {
                        "name": "Incredible Concrete Mouse",
                        "price": "19.00",
                        "sku": "9781802448435"
                    },
                ],
                "customer": {
                    "name": "Myrtle Gibson",
                    "email": "myrtle_gibson67@gmail.com"
                }
            },
            {
                "id": "3b586a5a-3cb1-4c6e-a218-1d018e628f3e",
                "created_at": "2023-11-20T20:17:29.723Z",
                "items": [
                    {
                        "name": "Gorgeous Steel Chips",
                        "price": "14.00",
                        "sku": "9781849063768"
                    },
                    {
                        "name": "Handmade Frozen Keyboard",
                        "price": "23.00",
                        "sku": "9781144269013"
                    },
                ],
                "customer": {
                    "name": "Joshuah O'Reilly",
                    "email": "joshuah.oreilly@gmail.com"
                }
            },
        ]
    }
    test('should return the correct averages', ()=>{
            const result = calculateData(mockOrder);
            expect(result).toBe(33);
    })
})

