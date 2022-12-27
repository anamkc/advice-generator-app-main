const URL = "http://localhost/quotes";
var jsonData = [];
fetch(URL)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      jsonData.push(element);
    })
  );

// const quotesId = Math.floor(Math.random());

// const authorDiv = document.querySelector(".advice-id");
// const quotesDiv = document.querySelector(".advice-text");

console.log(jsonData[5]);

// authorDiv.innerHTML += jsonData.author;
// quotesDiv.innerHTML = `"${jsonData.text}"`;
