const randomString = require("caporal");

randomString
  .version("1.0.0")
  .description("CLI Challenge")
  .command("random")
  .option("--length <text>")
  .action((args, options, logger) => {
    const randoms = (length = 32) => {
      var result = "";
      var char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charLength = char.length;

      for (var i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * charLength));
      }
      return result;
    };

    logger.info(randoms(options.length));

  });

  randomString.parse(process.argv);