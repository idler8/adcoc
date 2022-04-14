export default function getBindSingleton(cache, name, Parser, defaultSource, options) {
  return Object.defineProperty(cache, name, {
    get() {
      if (!Parser[name]) Parser[name] = Parser(defaultSource, options);
      return Parser[name];
    }
  });
}