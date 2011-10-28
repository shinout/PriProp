/* 
 * When you use this library in client side scripting, just write 
 * <script type="text/javascript" src="/path/to/PriProp.js"></script>
 *
 */
var PriProp = require('../PriProp');

/* define Constructor */
var SomeClass = (function() {
  // call PriProp like this.
  var _ = PriProp('id');

  function SomeClass(pub, priv) {
    _.construct(this); // initiallize

    this.somePublicValue = pub;

    _(this).somePrivateValue = priv;  // set private value
  }

  //console.log(_.bind);

  SomeClass.prototype.somePublicMethod = function() {
    return _(this).somePrivateValue;
  };

  return SomeClass;
})();

var obj = new SomeClass("still public...", "Hello, private values!");

console.assert(obj.somePublicValue == "still public..."); // "still public..."
console.assert(obj.somePrivateValue === undefined); // of cource, undefined...
console.assert(obj.somePublicMethod() == "Hello, private values!"); // Hello, private values!
console.assert(obj.id == 1); // 1 (unique value. The first argument of PriProp() is set to this property name.)

var obj2 = new SomeClass('hoge', 'fuga');
console.assert(obj2.id == 2); // 2
