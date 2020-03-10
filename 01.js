const stringTransform = require('caporal')

stringTransform
    .version('1.0.0')
    .description('CLI Challenge')
    .command('start')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .option('--repeat <times>', 'repeat string', stringTransform.INTEGER, 1)
    .action((args, options, logger) => {
        logger.info(args.text.toLowerCase(" "))
        logger.info(args.text.toUpperCase(" "))
        logger.info(args.text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" "))
    })

    stringTransform.parse(process.argv)

