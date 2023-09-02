async function speak(text) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  console.log("done speaking...", text);
}

export default speak;
