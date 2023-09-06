async function speak(text) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });

  console.log("done speaking...", text);
}

export default speak;
