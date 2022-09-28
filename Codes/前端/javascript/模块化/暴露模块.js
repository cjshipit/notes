//javascript的模块必须暴露才能够引入，暴露的方式有三种

//分别暴露属性 school前面必须有let
export let  info1 = '分别暴露' ;
export function fn1(){
    console.log('分别暴露')
};
//同意暴露
let  info2 = '统一暴露' ;
function fn2(){
    console.log('统一暴露')
};
export {info2,fn2}

//默认暴露
let  info3 = '统一暴露' ;
function fn3(){
    console.log('同意暴露')
};
export default {info3,fn3}




