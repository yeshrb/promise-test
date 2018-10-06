'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {expect} from 'chai';

var Promise = function () {
    function Promise() {
        _classCallCheck(this, Promise);

        this.states = ['Pending', 'Fullfilled', 'Rejected'];
    }

    _createClass(Promise, [{
        key: 'then',
        value: function then() {}
    }]);

    return Promise;
}();

describe('Promise', function () {

    it('是一个函数', function () {
        expect(typeof Promise === 'undefined' ? 'undefined' : _typeof(Promise)).toEqual('function');
    });
    it('有三个状态', function () {
        var promise = new Promise();
        expect(promise.states).toEqual(['Pending', 'Fullfilled', 'Rejected']);
    });
    it('必须提供一个then方法', function () {
        // for (let prototypeKey in Promise.prototype) {
        //     expect(true).toBe(false);
        // }
        expect(true).toBe(false);
    });
});
//# sourceMappingURL=promiseSpec.js.map