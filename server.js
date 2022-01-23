const hapi = require('@hapi/hapi');

const init = async () => {
    const server = hapi.Server({
      port: 1234,
      host: "localhost",
    });
    try{
    await server.start();
      console.log('server running at',server.info.uri);
    }
    catch(err)
    {
        console.log(err)
    };
    server.route({
        method : 'GET',
        path : "/",
        handler : (request, h) =>
        {
          
            return '<h1>Hello</h1>'
        }
    })
  
  };
  process.on("unhandledRejection", (error) => {
    console.log(error);
    process.exit(1);
  });
  
  init();
  