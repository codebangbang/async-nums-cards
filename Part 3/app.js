// //1.
// favNum = 17;
// let url = "http://numbersapi.com";

// async function numOne() {
//     let res = await $.getJSON(`${url}/${favNum}?json`)
//         console.log(res.text);
// }

// 2.
// favNums = [2,4,19];
// let url = "http://numbersapi.com";

// async function numTwo() {
//     let res = await $.getJSON(`${url}/${favNums}?json`)
//     console.log(res);
// }

//3.
favNum = 7;
let url = "http://numbersapi.com";

async function numThree() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${url}/${favNum}?json`))
  );
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
}
