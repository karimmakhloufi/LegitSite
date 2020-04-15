const request = async (domain) => {
  const response = await fetch(
    "https://spreadsheets.google.com/feeds/cells/1d0qp8SRxPF2L2xqOa9G-aVuNOTwJs0FycMkr534ZFo8/1/public/full?alt=json"
  );
  const json = await response.json();
  const sites = json.feed.entry;
  for (let i = 0; i < sites.length; i += 2) {
    // console.log(sites[i].content.$t);
    if (sites[i].content.$t === domain) {
      console.log(sites[i + 1].content.$t);
      return;
    }
  }
  console.log("not found");
};

request("youtube.com");
