const number = 50;
try {
    number = '123';
}catch(err) {
    console.log('catch');
}finally {
    console.log('finally');
}
{

}
console.log('code end!');

