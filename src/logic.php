<?php
header('Access-Control-Allow-Origin: *');

// Открываем JSON файл
$jsonFile = '../data/data.json';
$data = file_get_contents($jsonFile);
// Декодируем JSON данные в ассоциативный массив
$jsonData = json_decode($data, true);

// Отправляем JSON данные на фронтенд
header('Content-Type: application/json');
echo json_encode($jsonData);