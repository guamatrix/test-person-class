class Person {
    
    constructor(name = '', age = 0, sex = 'M', weight = 0, height = 0) {
        this.name = name; 
        this.age = age;
        this.dni = this.createDNI();
        this.sex = sex;
        this.weight = weight;
        this.height = height;            
    }
    
    
    createDNI() {
        const sizeDNI = 8;
        let dni = '';
        for(let i = 0; i < sizeDNI; i += 1) {
            dni += Math.floor(Math.random() * 10).toString();
        }
        return dni;
    }
    
    setName(name) {
        this.name = name;
    }
    
    setAge(age) {
        this.age = age;
    }
    
    setSex(sex) {
        this.checkSex(sex);
    }
    
    setWeight(weight) {
        this.weight = weight;
    }
    
    setHeight(height) {
        this.height = height;
    }
    
    calculateIMC() {
        const imc = this.weight / Math.pow(this.height, 2);
        if (imc === Infinity || imc === NaN) {
            alert('Person weight or height invalid');
            return 
        } else {
            return imc < 20 ? -1 : imc > 25 ? 1 : 0;
        }
    }   
    
    isAdult() {
        return this.age > 17 ? 1 : 0;
    }
    
    checkSex(sex) {
        const stringSex = sex.toString();
        if (stringSex.toUpperCase() !== 'M' || stringSex.toUpperCase() !== 'F') {
            this.sex = 'M';
        } else {
            this.sex = sex;
        }
    }
    
    toString() {
        let message = 'Person attributes: <br/>';
        Object.getOwnPropertyNames(this).map((attr, index) => {
            message += `${attr}: ${this[attr]} <br/>`;
        })
        return message;
    }    
}

const name = prompt('Please enter your name');
const age = prompt('Please enter your age');
const sex = prompt('Please enter your sex (M or F)');
const height = prompt('Please enter your height (Mts)');
const weight = prompt('Please enter your weight (Kg)');

const PersonOne = new Person(name, age, sex, weight, height);
const PersonTwo = new Person(name, age, sex);
const PersonThree = new Person();

PersonThree.setName(name);
PersonThree.setAge(age);
PersonThree.setSex(sex);
PersonThree.setHeight(height);
PersonThree.setWeight(weight);

const isYesorNot = (value) => {
    return value === 1 ? 'Yes' : 'Not';
}

const getIMC = (value) => {
    return value === 0 ? 'Ideal Weight' : value === 1 ? 'Overwight' : 'Underweight';
}

document.getElementById('data').innerHTML = `
        <table>
           <thead>
               <tr>
                   <th>Person Class</th>
                   <th>Is Adult</th>
                   <th>IMC Information</th>
                   <th>Attributes Information</th>
                </tr>
           </thead>
            <tbody>
                <tr>
                    <td>Person One</td>
                    <td>${isYesorNot(PersonOne.isAdult())}</td>
                    <td>${getIMC(PersonOne.calculateIMC())}</td>
                    <td>${PersonOne.toString()}</td>  
                </tr>
                <tr>
                    <td>Person Two</td>
                    <td>${isYesorNot(PersonTwo.isAdult())}</td>
                    <td>${getIMC(PersonTwo.calculateIMC())}</td>
                    <td>${PersonTwo.toString()}</td>  
                </tr>
                <tr>
                    <td>Person Three</td>
                    <td>${isYesorNot(PersonThree.isAdult())}</td>
                    <td>${getIMC(PersonThree.calculateIMC())}</td>
                    <td>${PersonThree.toString()}</td>  
                </tr>                
            </tbody>
        </table>    
`;