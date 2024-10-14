<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        echo view('components/header');
        echo view('components/navbar');
        echo view('your_view');
        echo view('components/footer');
    }
}
