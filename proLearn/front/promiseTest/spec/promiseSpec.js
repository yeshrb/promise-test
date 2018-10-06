// import {expect} from 'chai';

class Promise {
    constructor(){
        this.states = ['Pending', 'Fullfilled', 'Rejected'];
    };
    then(){};
}
describe('Promise',function() {

    it('是一个函数',()=>{
       expect(typeof Promise).toEqual('function')
    });
    it('有三个状态',()=>{
        let promise = new Promise();
        expect(promise.states).toEqual(['Pending', 'Fullfilled', 'Rejected']);
    });
    it('必须提供一个then方法',()=>{
        // for (let prototypeKey in Promise.prototype) {
        //     expect(true).toBe(false);
        // }
        expect(true).toBe(false);
    });
});
