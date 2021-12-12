async function runGreetingTerminal() {
    setTerminal("/xb0", "", "test1");
  await printTerminal(" bash /greeting.sh\n", "white", "test1", 5);
  await sleep(400);
  setTerminal(
    "bash: /greeting.sh: No such file or directory<br>",
    "red",
    "test1"
  );
  setTerminal("/xb1", "", "test1");
  setTerminal(" [130]", "red", "test1");
  setTerminal("> ", "white", "test1");
  await printTerminal(
    "# Oh no, i messed that up.\n",
    "gray",
    "test1",
    10
  );
  await sleep(700);
  setTerminal("/xb0", "white", "test1");
  await printTerminal("clear\n", "white", "test1", 5);
  await sleep(100);
  await clearTerminal("test1");
  setTerminal("/xb0", "white", "test1");
  await printTerminal(
    "# Oh, you want larger text?\n",
    "gray",
    "test1",
    5
  );
  setTerminal("/xb0", "white", "test1");
  document.getElementsByClassName("terminal-contents-text")[0].style.fontSize ="1.1rem";
  await printTerminal("clear\n", "white", "test1", 5);
  await sleep(1000);
  await clearTerminal("test1");
  setTerminal("/xb0", "white", "test1");
  await printTerminal("bash ./greeting.sh\n", "white", "test1", 5);
  

  //    Start of ./greeting.sh
  await setTerminal("Hi, ", "orange", "test1", 10);

  await setTerminal("My name is ", "white", "test1", 10);
  await setTerminal("Mik", "green", "test1", 10);
  await setTerminal(".<br>", "white", "test1", 10);
  await sleep(500);
  await setTerminal(
    "\nI am a 15 year-old student from Germany.",
    "white",
    "test1"
  );
  await sleep(500);
  await setTerminal("<br>----------------------", "white", "test1");
  await sleep(1000);
  await setTerminal("<br>My interests and hobbies are:", "white", "test1");
  await sleep(500);
  await setTerminal("<br> -> ", "yellow", "test1");

  await setTerminal("Programming", "white", "test1");
  await sleep(500);
  await setTerminal("<br> -> ", "yellow", "test1");
  await setTerminal("Linux", "white", "test1");
  await sleep(500);
  await setTerminal("<br> -> ", "yellow", "test1");
  await setTerminal("Servers", "white", "test1");
  await sleep(500);
  await setTerminal("<br> -> ", "yellow", "test1");
  await setTerminal("Electronics", "white", "test1");
  setTerminal("<br>/xb0", "white", "test1");
}


addLoadEvent(function () {
  runGreetingTerminal()
});
