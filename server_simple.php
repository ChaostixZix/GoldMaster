<?php
// Simple server script that suppresses PHP 8.3 compatibility warnings
ini_set('display_errors', 0);
error_reporting(E_ERROR | E_PARSE | E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_COMPILE_WARNING);

$host = '0.0.0.0';
$port = 8000;
$root = __DIR__ . '/public';

echo "Starting Laravel server on http://{$host}:{$port}\n";
echo "Document root: {$root}\n";

// Start PHP built-in server
$command = "php -S {$host}:{$port} -t {$root}";
passthru($command);