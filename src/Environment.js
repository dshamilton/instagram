const { Environment, Network, RecordSource, Store } = require("relay-runtime");

const store = new Store(new RecordSource());

const network = Network.create(async (operation, variables) => {
  let response = await fetch("https://api.graph.cool/relay/v1/cjv4dcc3h26d20129722irra1", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });
  let networkData = response.json();
  return networkData;
});

const environment = new Environment({
  network,
  store
});

export default environment;
