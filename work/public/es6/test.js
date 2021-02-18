'use strict';
// средство ес6:блок левых обьявлений
const sentences = [
    {subject: 'JavaScript', verb: 'oooon', object: 'great' },
    {subject: 'Elephants', verb: 'are', object: 'large'},
];
//средство ес 6 - деструкторизация объекта
function say({subject, verb, object}) {
    // средство ес 6 - строки шаблона
    console.log(`${subject} ${verb} ${object}`);
}
//средство ес 6 -for ... of
for(let s of sentences) {
    say(s);
}