/** Проверка поддержки в c8 покрытия по приватным полям */
class X {

  #a = 1

}

/** Старт проверки */
function test() {
  const x = new X()

  console.log(x, x.a)
}

test()
