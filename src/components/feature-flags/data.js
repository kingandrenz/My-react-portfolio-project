const dummyApiResponse = {
  showLightDarkMode : false,
  showTicTacToeBoard : true,
  showRandomColorGenerator : true,
  showAccordion: false,
  showTreeView : true,
};


function featureFlagDataServiceCall() {
  return new promise((resolve, reject)=> {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 5000);
    else reject('some error occured, please try again')
  })
}

export default featureFlagDataServiceCall;