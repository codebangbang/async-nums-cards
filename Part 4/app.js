$(function () {
  // //1.
  // let url = "http://deckofcardsapi.com/api/deck";

  // async function numOne() {
  //     let res = await $.getJSON(`${url}/new/draw/`);
  //     let {suit, value } = res.cards[0];
  //     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  // }

  //2.
  // let firstCard = null;
  // let url = "http://deckofcardsapi.com/api/deck";

  // async function numTwo() {
  //   firstCard = await $.getJSON(`${url}/new/draw/`);
  //   let deckId = firstCard.deck_id;
  //   let secondCard = await $.getJSON(`${url}/${deckId}/draw/`);
  //   console.log(
  //     `${firstCard.value.toLowerCase} of ${firstCard.suit.toLowerCase}`
  //   );
  //   console.log(
  //     `${secondCard.value.toLowerCase} of ${secondCard.suit.toLowerCase}`
  //   );
  // }

  //3.
  async function setup() {
    let url = "http://deckofcardsapi.com/api/deck";
    let $btn = $("button");
    let $cardArea = $("#card-area");

    let shuffle = await $.getJSON(`${url}/new/shuffle/`);
    $btn.show().on("click", async function() {
      let data = await $.getJSON(`${url}/${shuffle.deck_id}/draw/`);
      let cardSrc = data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $("<img>", {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
          },
        })
      );
      if (data.remaining === 0) $btn.remove();
    });
  }
  setup();
});
