<?php
/* Gerado por Gestor/go/gerar-go.mjs a partir do go-map.json do projeto. NAO editar aqui:
   mude o go-map.json e gere de novo.

   Redirecionador rastreado /go/<produto>/?s=<pagina>_<posicao>. O .htaccess da raiz entrega o
   produto em ?p=. Anota o clique em privado/go-log.csv, AO LADO da pasta publicada (a implantacao
   da Hostinger apaga o que nao esta na main dentro de public_html) e devolve 302 para o link de
   afiliado do mapa. Nunca redireciona para endereco vindo da URL. Sem IP: so um hash de IP + dia.
   Falha ao gravar nunca impede o redirecionamento. */
$map = [
    'fabrica-de-milhas' => ['https://go.hotmart.com/Y102512256Q', 'src', 'curso_'],
    'destrave-suas-milhas' => ['https://go.hotmart.com/Y102512256Q?ap=3f4d', 'src', 'blg_'],
    'rodrigo-goes-instagram' => ['https://go.hotmart.com/Y102512256Q?ap=4b86', 'src', ''],
    'rodrigo-goes-youtube' => ['https://go.hotmart.com/Y102512256Q?ap=11eb', 'src', ''],
    'papo-de-milhas' => ['https://kiwify.app/LCTATKB?afid=imrX6P6K', 'src', 'papo_'],
];
$p = isset($_GET["p"]) ? substr(preg_replace('/[^a-z0-9-]/', '', strtolower((string) $_GET["p"])), 0, 40) : "";
$s = isset($_GET["s"]) ? substr(preg_replace('/[^a-z0-9_-]/', '', strtolower((string) $_GET["s"])), 0, 40) : "";
header("Cache-Control: no-store, max-age=0");
header("X-Robots-Tag: noindex, nofollow");
if (!isset($map[$p])) { header("Location: /", true, 302); exit; }
list($url, $sub, $pre) = $map[$p];
$target = ($sub !== "" && $s !== "") ? $url . (strpos($url, "?") !== false ? "&" : "?") . $sub . "=" . $pre . $s : $url;

$ua = (string) ($_SERVER["HTTP_USER_AGENT"] ?? "");
$bot = (preg_match('/bot|crawl|spider|slurp|preview|scan|facebookexternalhit|google-|bingpreview|headless|python|curl|wget|java\/|go-http|monitor|lighthouse/i', $ua) || (($_SERVER["REQUEST_METHOD"] ?? "") === "HEAD")) ? 1 : 0;
$ref = (string) ($_SERVER["HTTP_REFERER"] ?? "");
$page = "";
if ($ref !== "") {
    $u = parse_url($ref);
    $page = (($u["host"] ?? "") === "fabricantedemilhas.com.br") ? (string) ($u["path"] ?? "/") : "ext:" . (string) ($u["host"] ?? "");
}
$page = substr(preg_replace('/[^a-zA-Z0-9\/._:-]/', '', $page), 0, 120);
$ip = (string) ($_SERVER["HTTP_X_FORWARDED_FOR"] ?? ($_SERVER["REMOTE_ADDR"] ?? ""));
$ip = trim(explode(",", $ip)[0]);
$visitor = substr(hash("sha256", $ip . "|" . gmdate("Y-m-d") . "|go-87a6e4"), 0, 12);

$dir = __DIR__ . "/../../privado";
if (!is_dir($dir)) { @mkdir($dir, 0750, true); }
$log = $dir . "/go-log.csv";
$new = !is_file($log);
if ($fh = @fopen($log, "a")) {
    if (@flock($fh, LOCK_EX)) {
        if ($new) { fwrite($fh, "quando_utc,produto,posicao,pagina,robo,visitante_dia\n"); }
        fwrite($fh, sprintf("%s,%s,%s,%s,%d,%s\n", gmdate("c"), $p, ($s !== "" ? $s : "-"), ($page !== "" ? $page : "-"), $bot, $visitor));
        flock($fh, LOCK_UN);
    }
    fclose($fh);
}
header("Location: " . $target, true, 302);
exit;
