import { TestClassProperties } from './extpkg/class-properties.js'


const tcp = new TestClassProperties()


console.log(tcp)
console.log('test - ok')


/** Проверка поддержки в c8 покрытия по приватным полям */
class X {

  #a = 1

}

/** Старт проверки */
function test() {
  const x = new X()

  // @ts-ignore
  console.log(x, x.a)
}

test()
