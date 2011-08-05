/* 
 * When you use this library in client side scripting, just write 
 * <script type="text/javascript" src="/path/to/PriProp.js"></script>
 *
 */
const PriProp = require('../PriProp');

/* define Constructor */
const SomeClass = (function() {
  // call PriProp like this.
  const _ = PriProp('id');

  function SomeClass(pub, priv) {
    _.construct(this); // initiallize

    this.somePublicValue = pub;

    _(this).somePrivateValue = priv;  // set private value
  }

  SomeClass.prototype.somePublicMethod = function() {
    return _(this).somePrivateValue;
  };

  return SomeClass;
})();

var obj = new SomeClass("still public...", "Hello, private values!");

console.log(obj.somePublicValue); // "still public..."
console.log(obj.somePrivateValue); // of cource, undefined...
console.log(obj.somePublicMethod()); // Hello, private values!
console.log(obj.id); // 1 (unique value. The first argument of PriProp() is set to this property name.)

var obj2 = new SomeClass('hoge', 'fuga');
console.log(obj2.id); // 2
