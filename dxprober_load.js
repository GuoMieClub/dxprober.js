var body = $response.body;
var url = $request.url;

var u = "GuoMie";
var p = "Grand425X";

if (body) {
  body = body.replace(
    /<head>/,
    '<head><script>var u = "' +
      u +
      '";var p = "' +
      p +
      '";</script>' +
      '<script src="https://github.com/GuoMieClub/dxprober.js/raw/main/dxprober.js"></script>'
  );
  $done({
    body,
  });
} else {
  $done({});
}
