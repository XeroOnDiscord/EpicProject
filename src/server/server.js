module.exports = async (Manager) => {
    const Server = require('./classes/Server');
    const client = new Server(Manager);
    await client.register();
    client.login(process.env.PORT);
  
}

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);