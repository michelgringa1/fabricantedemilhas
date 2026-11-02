<?php
/* Gerado por Gestor/go/gerar-go.mjs. Resumo dos cliques do /go/, lido pelo gestor.
   Uso: /api/go-stats.php?k=<chave>[&desde=AAAA-MM-DD][&fmt=json]. A chave fica so no computador do
   Michel (~/.claude/secrets/go-stats.txt); aqui fica so o SHA-256 dela. Sem fmt=json devolve texto. */
header("Cache-Control: no-store");
header("X-Robots-Tag: noindex, nofollow");
$hash = "de0e1289bb54448ac2deead73858418bb66dc5e690c978937f94b310763d1a1c";
$k = (string) ($_GET["k"] ?? "");
if ($hash === "" || !hash_equals($hash, hash("sha256", $k))) { http_response_code(403); header("Content-Type: text/plain; charset=utf-8"); echo "Forbidden"; exit; }
$since = preg_match('/^\d{4}-\d{2}-\d{2}$/', (string) ($_GET["desde"] ?? "")) ? $_GET["desde"] : "2000-01-01";
$json = (($_GET["fmt"] ?? "") === "json");
$log = __DIR__ . "/../../privado/go-log.csv";
$prod = []; $pos = []; $pag = []; $dia = []; $vis = []; $bots = 0; $tot = 0;
if (is_file($log) && ($fh = fopen($log, "r"))) {
    fgets($fh);
    while (($l = fgets($fh)) !== false) {
        $c = str_getcsv(trim($l));
        if (count($c) < 6) continue;
        list($when, $p, $s, $page, $bot, $v) = $c;
        $d = substr($when, 0, 10);
        if ($d < $since) continue;
        if ((int) $bot === 1 || strpos($s, "teste") === 0) { $bots++; continue; } // robo, preview ou clique de teste (s=teste_...)
        $tot++;
        $prod[$p] = ($prod[$p] ?? 0) + 1;
        $pos[$p . " / " . $s] = ($pos[$p . " / " . $s] ?? 0) + 1;
        $pag[$page] = ($pag[$page] ?? 0) + 1;
        $dia[$d] = ($dia[$d] ?? 0) + 1;
        $vis[$v] = 1;
    }
    fclose($fh);
}
arsort($prod); arsort($pos); arsort($pag); ksort($dia);
if ($json) {
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode(["versao" => 1, "desde" => $since, "humanos" => $tot, "robos" => $bots, "visitantes" => count($vis),
        "porDia" => (object) $dia, "porProduto" => (object) $prod, "porPosicao" => (object) $pos, "porPagina" => (object) $pag], JSON_UNESCAPED_UNICODE);
    exit;
}
header("Content-Type: text/plain; charset=utf-8");
echo "Cliques humanos desde $since: $tot (visitantes-dia unicos: " . count($vis) . ")\n\nPor produto:\n";
foreach ($prod as $k2 => $n) printf("  %-24s %d\n", $k2, $n);
echo "\nPor produto / posicao:\n";
foreach ($pos as $k2 => $n) printf("  %-44s %d\n", $k2, $n);
echo "\nPor pagina de origem:\n";
foreach ($pag as $k2 => $n) printf("  %-44s %d\n", $k2, $n);
if ($bots > 0) echo "\n(robos, previews e testes ignorados: $bots)\n";
