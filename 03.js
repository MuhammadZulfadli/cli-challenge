const palindrome = require('caporal')

palindrome
    .version('1.0.0')
    .description('CLI Challenge')
    .command('palindrome')
    .argument('<text>','input text', palindrome.STRING, 'start challenge')
    .action((args, options, logger) => {
        const result = args.text.toLowerCase().replace(/[^\w]/gi, "")
        logger.info(`String : "${args.text}`);
        logger.info(result === [...result].reverse().join('') ? "Is palindrome? Yes" : "Is Palindrome? No")
    })
    
palindrome.parse(process.argv)
