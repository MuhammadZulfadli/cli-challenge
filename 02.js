const aritmatika = require('caporal')

aritmatika
    .version('1.0.0')
    .description('CLI Challenge')

    .command('add')
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(el => parseFloat(el));
        logger.info(convert.reduce((a,b) => a+b ));
    })

    .command('substract')
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(el => parseFloat(el));
        logger.info(convert.reduce((a,b) => a-b ));
    })

    .command('multiply')
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(el => parseFloat(el));
        logger.info(convert.reduce((a,b) => a*b ));
    })
    
    .command('divide')
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(el => parseFloat(el));
        logger.info(convert.reduce((a,b) => a/b ));
    })

    aritmatika.parse(process.argv)