function funcaoPadrao (callback) {
    console.log("Executando via Gulp");
    callback();
}
function dizOi (callback) {
    console.log("Olá Gulp");
    callback();
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;