export function initPromise() {}

console.log('--promise1--');
const mPromise1 = new Promise((resolve, reject) => {
    resolve(1);
});
mPromise1.then(res => {
    console.log(typeof res, res);
});

console.log('--promise2--');
const promiseAsync = new Promise((resolve, reject) => {
    let sec: number = (Math.floor(Math.random() * 5)+1);
    setTimeout((isTrue: boolean) => {
        if (isTrue) {
            resolve(sec);
        }
    }, sec * 1000, true);
}).then(res => {
    console.log('--promise2--', res + 's');
});

console.log('--async/await1--');
function delay(msg: string) {
    let ms: number = Math.floor(Math.random() * 1000) + 1;
    return new Promise(resolve => {
        setTimeout(resolve, ms, msg);
    }).then(v => {
        console.log('--async/await1--', v, ms + 'ms');
    })
}
async function async() {
    let start = new Date().getTime();
    await delay('a');
    await delay('b');
    await delay('c');
    let end = new Date().getTime();
    console.log('시간 :', end - start + 'ms');
}
async();
