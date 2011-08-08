/**
 * PriProp v1.0.0
 *
 * Copyright 2011, SHIN Suzuki 
 *
 */
function PriProp(keyname) {
  const _ = function(o) {
    return _.props[o[keyname]];
  };

  if (_.__proto__) {
    _.__proto__ = PriProp.prototype;
  }
  else {
    Object.keys(PriProp.prototype).forEach(function(p) {
      Object.defineProperty(_, p, {
        value    : PriProp.prototype[p],
        writable : false
      });
    }, this);
  }

  Object.defineProperties(_, {
    keyname : {
      value: keyname,
      writable: false
    },
    props : {
      value: {},
      writable: false
    },
    count : {
      value: 0,
      writable : true
    }
  });
  return _;
}

PriProp.prototype = {
  construct: function(obj) {
    Object.defineProperty(obj, this.keyname, {
      value    : ++this.count,
      writable : false
    });
    if ( ! this.props[this.count]) this.props[this.count] = {};
    return this.count;
  }
};

Object.getOwnPropertyNames(Function.prototype).forEach(function(k) {
  PriProp.prototype[k] = Function.prototype[k];
});

Object.freeze(PriProp.prototype);

if (typeof module == 'object' && module.exports === this) { module.exports = PriProp; }
