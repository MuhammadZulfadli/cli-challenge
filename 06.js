const network = require('caporal')
const os = require('os');
const networkInterfaces = os.networkInterfaces( );

network
    .version('1.0.0')
    .description('CLI Challenge')
    .command('ip')
    .action((logger)=>{
        logger.info(networkInterfaces.eno1[0].address)
  });

network.parse(process.argv)