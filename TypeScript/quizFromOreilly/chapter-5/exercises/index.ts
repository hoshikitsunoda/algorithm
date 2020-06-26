// 5.3
interface A {
  good(x: number): string
  bad(x: number): string
}
// not compile
// interface B extends A {
//   good(x: string | number): string
//   bad(x: string): string
// }

type C = A & {
  good(x: string | number): string
  bad(x: string): string
}

// 5.4.1
interface User {
  name: string
}

interface User {
  age: number
  hobby?: string | string[]
}
// interface can be merged
let a: User = {
  name: 'Hosh',
  age: 35,
  hobby: ['music', 'movie'],
}

// console.log(a)

//  5.4.2
interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'bob'

  eat(food: string) {
    console.log('ate ' + food)
    return food
  }
  sleep(hours: number) {
    console.log('slept ' + hours)
    return hours
  }
  meow() {
    console.log('Meow')
  }
}
const cat = new Cat()
// console.log(cat, cat.eat('tuna'), cat.sleep(7), cat.meow())

// 5.5
// TS checks structures, not names
class Zebra {
  trot() {
    console.log('Zebra')
  }
}

class Poodle {
  trot() {
    console.log('Poodle')
  }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra()
let poodle = new Poodle()

// ambleAround(zebra)
// ambleAround(poodle)

class A2 {
  private x = 1

  updateX(num: number): void {
    this.x = this.x * num
  }

  log() {
    console.log(this.x)
    return this.x
  }
}

class B2 extends A2 {}
function f(a: A2) {
  return a
}

const updatedA2 = new A2()
updatedA2.updateX(20)

console.log(f(updatedA2))
console.log(f(new B2()))

// f({x: 1})
