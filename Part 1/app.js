// //1.
// favNum = 17;
// let url = "http://numbersapi.com";

// $.getJSON(`${url}/${favNum}?json`).then(data => {
//     console.log(data);
// })


//2.
// favNums = [2,4,19];
// let url = "http://numbersapi.com";

// $.getJSON(`${url}/${favNums}?json`).then(data => {
//     console.log(data);
// })


//3.
favNum = 7;
let url = "http://numbersapi.com";

Promise.all(
    Array.from({length: 4 }, () => {
        return $.getJSON(`${url}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
})