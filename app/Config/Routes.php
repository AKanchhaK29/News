<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/news', 'NewsController::index');
$routes->get('/login', 'Pages::login');
$routes->get('/signup', 'Pages::signup');
$routes->get('/news', 'Pages::news');