const fs = require("fs");
const { extname } = require("path");
const prettier = require("prettier");

function read(filename) {
  return fs.readFileSync(filename, "utf8");
}

function prettyprint(src, filename, options) {
  return prettier.format(
    src,
    Object.assign(
      {
        filepath: filename,
        serverAutoStart: false,
      },
      options,
    ),
  );
}

/**
 * Wraps a string in a marker object that is used by `./raw-serializer.js` to
 * directly print that string in a snapshot without escaping all double quotes.
 * Backticks will still be escaped.
 */
function raw(string) {
  if (typeof string !== "string") {
    throw new Error("Raw snapshots have to be strings.");
  }
  return { [Symbol.for("raw")]: string };
}

function runSpec(dirname, parsers, options) {
  // eslint-disable-next-line no-param-reassign
  options = Object.assign(
    {
      plugins: ["."],
    },
    options,
  );

  /* instabul ignore if */
  if (!parsers || !parsers.length) {
    throw new Error(`No parsers were specified for ${dirname}`);
  }

  fs.readdirSync(dirname).forEach(filename => {
    const path = `${dirname}/${filename}`;
    if (
      extname(filename) !== ".snap" &&
      fs.lstatSync(path).isFile() &&
      filename[0] !== "." &&
      filename !== "jsfmt.spec.js"
    ) {
      const source = read(path).replace(/\r\n/g, "\n");

      const mergedOptions = Object.assign({}, options, {
        parser: parsers[0],
      });
      const output = prettyprint(source, path, mergedOptions);
      test(`${filename} - ${mergedOptions.parser}-verify`, () => {
        expect(raw(`${source}${"~".repeat(80)}\n${output}`)).toMatchSnapshot(
          filename,
        );
      });
    }
  });
}
global.run_spec = runSpec;
