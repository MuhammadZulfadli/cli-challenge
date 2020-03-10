const network = require('caporal');
const publicIp = require('public-ip');

network
    .version('1.0.0')
    .description('CLI Challenge')
    .command('ip-external')
    .action(async()=>{
        console.log(await publicIp.v4());
  });

network.parse(process.argv);