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

    public function news()
    {
        // To display the news section using the structure layout
        echo view('components/header');
        echo view('components/navbar');
        echo view('components/news'); // This calls news.php to display the news content
        echo view('components/footer');
    }
}