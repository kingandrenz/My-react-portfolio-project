const dummyApiResponse = {
  showLightDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      // ✅ pass a function to setTimeout, not the result of resolve()
      setTimeout(() => resolve(dummyApiResponse), 5000);
    } else {
      reject("Some error occurred, please try again");
    }
  });
}

export default featureFlagDataServiceCall;
