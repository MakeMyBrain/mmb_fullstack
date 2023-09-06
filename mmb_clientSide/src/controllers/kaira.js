async function speak(text) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  console.log("done speaking...", text);
}

export default speak;
