var fakebr = require('faker-br');
var faker = require('faker');

export default{

    person : function() {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {

            name: `${firstName} ${lastName}`,
            document: fakebr.br.cpf(),
            email: faker.internet.email(firstName),
            phone: '48987654320',
            address: {
                code: '88140970',
                street: 'Rua Santana',
                number: '208',
                details: 'portão azul',
                city: 'Centro',
                state: 'Santo Amaro da Imperatriz/SC'
            },
            
            delivery_type: 'Van/Carro',
            cnh: 'cnh-digital.jpg'

        }

        return data;




    }


}