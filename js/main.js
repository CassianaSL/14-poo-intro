console.log('Hello!');

// objetivo: modelar coisas/conceitos reais como objetos ;)

// JS 2015 / ES6: disponibiliza CLASSES

// LIVRO > o que faz um livro ser um livro

// Classes dependem da ABSTRAÇÃO

// ABSTRAÇÃO: selecionar os detalhes importantes para o modelo!

class Livro { // abstração do livro > o que é um livro para meu sistema
    constructor(titulo, autor) { // parametros que tem que ser informados para o construtor
        // o objeto livro terá titulo e autor (objeto é THIS)
        // a class representa todos os livros, não em particular

        this.titulo = titulo;
        this.autor = autor;
    }
    // é sempre uma boa prática
    toString() { // Funções dentro de classes são Métodos!
        return `${this.titulo} / ${this.autor}`;

    }
}

// A ordem é inportante nos ()
const l1 = new Livro('Mein kampf', 'Hitler');
// new serve para instanciar um objeto a partir de uma classe!
const l2 = new Livro('Senhor dos Anéis', 'Tolkien');

const l3 = new Livro('Metamorfose', 'Franz Kafka');

const l4 = new Livro( 'Astrophysics for people in a hurry', 'Neil deGrasse Tyson');

const l5 = new Livro( 'Harry Potter', 'JK Rowling');


console.log(l1);
console.dir(l2);

// document.write(l1); <retorna>>> '[object Object]'  que é = .toString(), metodo

document.write(l1);

let x =  4;
let y =  x;

console.log(x); //4
console.log(y); //4
x = 5;
console.log(x); //5
console.log(y); //4

const l6 = l2; // cadê o new?? portanto l2 e l6 são a mesma cousa, são o MESMO objeto

console.log(l2);
console.log(l6);

l2.autor = 'John Ronald Reuel Tolkien';

console.log(l2);
console.log(l6);

l6.titulo = 'Senhor do Anéis!!';
console.log(l2.titulo);

// *REFERENCIAM* o mesmo objeto

// caracteristicas são propriedades

// MODELANDO A TV

class TV {
    constructor(marca, tamanho) { // imutaveis, é o que é e não o que está
        // IMUTAVEIS
        this._marca = marca; // _marca propriedade privada, interna
        this._tamanho = tamanho;
        // MUTAVEIS
        this._canal = 14; // sendo que vai até 83
        this._volume = 10; // de 0 à 100 (10 = volume arbitrario)
        this._ligada = false;
    }

    get isLigada() {
        return this._ligada;
    }

    ligarDesligar() {
        this._ligada = !this._ligada;
    }

    aumentarVolume() { // metodos, operação, ação
        if (! this.isLigada) return
        if (this._volume < 100) {
            this._volume++; // this._volume = this._volume
        }
    }

    diminuirVolume() { // metodos, operação, ação
        if (! this.isLigada) return
        if (this._volume > 0) {
            this._volume--; // this._volume = this._volume
        }
    }

    descerCanal() {
        if (! this.isLigada) return
        if (this._canal > 14) {
            this._canal--;
        } else {
            this._canal = 83;
        }
    }

    subirCanal() {
        if (! this.isLigada) return
        if (this._canal < 83) {
            this._canal++;
        } else {
            this._canal = 14;
        }
    }

    irParaCanal(canal) {
        if (this.isLigada) { // igual if (! this.isLigada) return
            if (canal > 83) this._canal = 83;

            else if (canal < 14) this._canal = 14;
        }
        // throw new Error('Canal inválido'); // lançar um ERRO/ Exception
    }

    get canal() {
        return this._canal;
    }

    get volume() {
        return this._canal;
    }

    // GETTER/ACESSOR, parece um método mas NÃO É, é propriedade
    get marca() {
        return this._marca;
    }

    get tamanho() {
        return this._tamanho;
    }

    toString() {
        return `${this.marca}, ${this._tamanho}"`;
    }
}


// instanciando um objeto TV

const tv1 = new TV('LG', 50);

console.log(tv1);
console.log(tv1.marca);
tv1.marca = 'Samsung'; // continua LG por causa do _ que significa 'não altere diretamente'

console.log(tv1.canal); // 14
console.log(tv1.volume); // 10
//  OBJETO TEM CARACTERISTICAS/ ATRIBUTOS/ ESTADO
//  OBJETO TEM cOMPORTAMENTO/ OPERAÇÕES/ MÉTODOS/ VERBO!

tv1.aumentarVolume();
console.log(tv1.volume); // 11
tv1.aumentarVolume();
console.log(tv1.volume); // 12

for (let i = 0; i < 500; i++) tv1.aumentarVolume();
console.log(tv1.volume);

tv1.diminuirVolume();
console.log(tv1.volume);

console.log(tv1.canal); // 14

tv1.descerCanal();
console.log(tv1.canal); // 83
tv1.descerCanal();
tv1.descerCanal();
tv1.descerCanal();
console.log(tv1.canal); // 80
tv1.subirCanal();
console.log(tv1.canal); // 81

// tv1.canal(15); // ERRADO, METODO DEVE SER VERBO

tv1.irParaCanal(15); // 15
console.log(tv1.canal); // 15

tv1.irParaCanal(150); // ??
console.log(tv1.canal); // 83

tv1.irParaCanal(5); // ??
console.log(tv1.canal); // 14

console.log(tv1.isLigada) // false
tv1.ligarDesligar();
console.log(tv1.isLigada) // true
console.log(tv1.isLigada) // false
