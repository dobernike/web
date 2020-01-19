// список
class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  // O(1)
  get(address) {
    return this.memory[address];
  }

  // Push — Добавить значение в конец.
  // O(1)
  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  // Pop — Удалить значение из конца.
  // O(1)
  pop() {
    // нет элементов - ничего не делаем
    if (this.length === 0) return;

    // Получаем последнее значение, перестаём его хранить, возвращаем его.
    var lastAddress = this.length - 1;
    var value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Возвращаем значение, чтобы его можно было использовать.
    return value;
  }

  // Unshift — Добавить значение в начало.
  // O(N)
  unshift(value) {
    // Сохраняем значение, которое хотим добавить в начало.
    var previous = value;

    // Проходимся по каждому элементу...
    for (var address = 0; address < this.length; address++) {
      // заменяя текущее значение "current" на предыдущее значение "previous",
      // и сохраняя значение "current" для следующей итерации.
      var current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Добавляем последний элемент на новую позицию в конце списка.
    this.memory[this.length] = previous;
    this.length++;
  }
  // Shift — Удалить значение из начала.
  // O(N)
  shift() {
    // Нет элементов - ничего не делаем.
    if (this.length === 0) return;

    var value = this.memory[0];

    // Проходимся по каждому элементу, кроме последнего
    for (var address = 0; address < this.length - 1; address++) {
      // и заменяем его на следующий элемент списка.
      this.memory[address] = this.memory[address + 1];
    }

    // удаляем последний элемент, поскольку значение теперь в предыдущем адресе.
    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
  //...
}
