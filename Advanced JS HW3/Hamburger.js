/**
* Класс, объекты которого описывают параметры гамбургера.
*
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
/*

- Некая сеть фастфудов предлагает два вида гамбургеров:
    - маленький (50 гривен, 20 калорий)
- большой (100 гривен, 40 калорий)
- Гамбургер должен включать одну дополнительную начинку (обязательно):
- сыр (+ 10 гривен, + 20 калорий)
- салат (+ 20 гривен, + 5 калорий)
- картофель (+ 15 гривен, + 10 калорий)
- Дополнительно, в гамбургер можно добавить приправу (+ 15 гривен, 0 калорий) и полить майонезом (+ 20 гривен, + 5 калорий).
*/

function Hamburger(size, stuffing) {
    let SIZE_SMALL = {selected: false, cost: 50, cal: 20};
    let SIZE_LARGE = {selected: false, cost: 100, cal: 40};
    let STUFFING_CHEESE = {selected: false, cost: 10, cal: 20};
    let STUFFING_SALAD = {selected: false, cost: 20, cal: 5};
    let STUFFING_POTATO = {selected: false, cost: 15, cal: 10};
    let TOPPING_MAYO = {selected: false, cost: 20, cal: 5};
    let TOPPING_SPICE = {selected: false, cost: 15, cal: 0};

    if(size.toLowerCase() === "small"){
        SIZE_SMALL.selected = true;
    } else if (size.toLowerCase() === "large"){
        SIZE_LARGE.selected = true;
    } else {
        console.log(`No such size as '${size}' available `);
    }

    if(stuffing.toLowerCase() === "cheese"){
        STUFFING_CHEESE.selected = true;
    } else if (stuffing.toLowerCase() === "salad"){
        STUFFING_SALAD.selected = true;
    } else if (stuffing.toLowerCase() === "potato"){
        STUFFING_POTATO.selected = true;
    } else {
        console.log(`Stuffing '${stuffing}' does not exist`)
    }

    this._getSize = () => size;
    this._getStuffing = () => stuffing;
    this._setTopping = (topping) => {
        if (topping.toLowerCase() === "spice" && TOPPING_SPICE.selected === false){
            TOPPING_SPICE.selected = true;
        } else if (topping.toLowerCase() === "mayo" && TOPPING_MAYO.selected === false){
            TOPPING_MAYO.selected = true;
        } else if (topping.toLowerCase() === "spice" || topping.toLowerCase() === "mayo"){
            console.log(`Topping '${topping}' is already added`);
        } else {
            console.log(`Topping '${topping}' does not exist`);
        }
    };
    this._removeTopping = (topping) => {
        if (topping.toLowerCase() === "spice" && TOPPING_SPICE.selected === true){
            TOPPING_SPICE.selected = false;
        } else if (topping.toLowerCase() === "mayo" && TOPPING_MAYO.selected === true){
            TOPPING_MAYO.selected = false;
        } else if (topping.toLowerCase() === "spice" || topping.toLowerCase() === "mayo"){
            console.log(`Topping '${topping}' has not been previously added`);
        } else {
            console.log(`Topping '${topping}' does not exist`);
        }
    };
    this._getToppings = () => {
        let result = [];
        if (TOPPING_MAYO.selected === true){
            result.push("mayo");
        }
        if (TOPPING_SPICE.selected === true){
            result.push("spice");
        }
        return result;
    };
    this._calcPrice = () => {
        let result = 0;
        SIZE_SMALL.selected ? result += SIZE_SMALL.cost : result += 0;
        SIZE_LARGE.selected ? result += SIZE_LARGE.cost : result += 0;
        STUFFING_CHEESE.selected ? result += STUFFING_CHEESE.cost : result += 0;
        STUFFING_SALAD.selected ? result += STUFFING_SALAD.cost : result += 0;
        STUFFING_POTATO.selected ? result += STUFFING_POTATO.cost : result += 0;
        TOPPING_MAYO.selected ? result += TOPPING_MAYO.cost : result += 0;
        TOPPING_SPICE.selected ? result += TOPPING_SPICE.cost : result += 0;
        return result;
    };
    this._calcCalories = () => {
        let result = 0;
        SIZE_SMALL.selected ? result += SIZE_SMALL.cal : result += 0;
        SIZE_LARGE.selected ? result += SIZE_LARGE.cal : result += 0;
        STUFFING_CHEESE.selected ? result += STUFFING_CHEESE.cal : result += 0;
        STUFFING_SALAD.selected ? result += STUFFING_SALAD.cal : result += 0;
        STUFFING_POTATO.selected ? result += STUFFING_POTATO.cal : result += 0;
        TOPPING_MAYO.selected ? result += TOPPING_MAYO.cal : result += 0;
        TOPPING_SPICE.selected ? result += TOPPING_SPICE.cal : result += 0;
        return result;
    };
    this._instance = () => this;

    return () => this._instance();
    }

/* Размеры, виды начинок и добавок */

/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
*
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping){
    return this._setTopping(topping);
};

/**
* Убрать добавку, при условии, что она ранее была
* добавлена.
*
* @param topping   Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.removeTopping = function (topping){
    return this._removeTopping(topping);
};

/**
* Получить список добавок.
*
* @return {Array} Массив добавленных добавок, содержит константы
*                 Hamburger.TOPPING_*
*/
Hamburger.prototype.getToppings = function (){
    return this._getToppings();
};

/**
* Узнать размер гамбургера
*/
Hamburger.prototype.getSize = function (){
    return this._getSize();
};

/**
* Узнать начинку гамбургера
*/
Hamburger.prototype.getStuffing = function (){
  return this._getStuffing();
};

/**
* Узнать цену гамбургера
* @return {Number} Цена в тугриках
*/
Hamburger.prototype.calculatePrice = function (){
    return this._calcPrice();
};

/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Hamburger.prototype.calculateCalories = function (){
    return this._calcCalories();
};

/**
* Представляет информацию об ошибке в ходе работы с гамбургером.
* Подробности хранятся в свойстве message.
* @constructor
*/
//function HamburgerException (...) { ... }
