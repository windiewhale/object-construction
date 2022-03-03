function init(mathFunction) { //itt egy functiont adunk meg argumentumként. (paraméterek mindig function scopeúak)
    var a = 5;
    var b = 6;
    

    if (a < b) {
        let c = mathFunction(b, a)
        console.log(c);

      /*  function initC() {  //hogyan hívjuk meg az anonim függvényt? hogyan lehet rá hivatkozni
           var c = b - a;
       };  */

      /*  (function(){  //immadiately invoked fonction
            var c = b - a;
            console.log(c);
        })();
 */
       //initC();
    } else {
        let c = mathFunction(a, b)
        console.log(c);
      /*   function initC() {  //függvénnyel lehet bekeretezni a var változót, hogy ne legyen global scopeja. így most nem lehet kilogolni
            var c = a - b;
        } */

        /* (function(){
            var c = a - b;
            console.log(c);
        })();
         */
        //initC()
    }

};

const initC = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

const initD = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;

}



init(initD);
