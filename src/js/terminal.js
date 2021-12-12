const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function printTerminal(text, color, id, speed) {
  const symbols = {};
  //  Speed is 0-10
  const textArea = document.getElementById(id);

  for (let char of text.split("")) {
    if (char == "\n") {
      textArea.innerHTML += "<br>";
    } else {
      textArea.innerHTML += `<span class='terminal-style-${color}'>${char}</span>`;
    }
    for (symbol in symbols) {
      textArea.innerHTML = textArea.innerHTML.replaceAll(
        symbol,
        symbols[symbol]
      );
    }

    await sleep(500 / speed);
  }
}

function setTerminal(text, color, id) {
  const symbols = {
    "/xb0": `<span class='terminal-style-green'>mik</span>@<span class='terminal-style-yellow'>mik-pc</span> <span class='terminal-style-green'>~</span>> `,
    "/xb1": `<span class='terminal-style-green'>mik</span>@<span class='terminal-style-yellow'>mik-pc</span> <span class='terminal-style-green'>~</span>`,
  };

  const textArea = document.getElementById(id);

  textArea.innerHTML += `<span class='terminal-style-${color}'>${text}</span>`;

  for (symbol in symbols) {
    textArea.innerHTML = textArea.innerHTML.replaceAll(symbol, symbols[symbol]);
  }
}

async function clearTerminal(id) {
  const textArea = document.getElementById(id);
  textArea.style.opacity = "0";
  await sleep(100);
  textArea.innerHTML = "";
  await sleep(100);
  textArea.style.opacity = "1";
}