<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function login()
    {
        echo view('components/header');
        echo view('components/login');
        echo view('components/footer');
    }

    public function signup()
    {
        echo view('components/header');
        echo view('components/signup');
        echo view('components/footer');
    }
}