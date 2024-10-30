<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arya Prawah</title>

    <link rel="stylesheet" href="/css/style.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script src="/js/script.js"></script>
</head>
<body>
    
<!-- Header -->
<nav class="lang">
<div class="time">
        <div id="datetime" class="mr-3"></div>          
    </div>
        <div class="language">
        <ul>
            <li><a href="#">ENGLISH</a></li>
            <li><a href="#">தமிழ்</a></li>
            <li><a href="#">हिन्दी</a></li>
            <li><a href="#">ಕನ್ನಡ</a></li>
            <li><a href="#">മലയാളം</a></li>
            <li><a href="#">తెలుగు</a></li>
            <li><a href="#">বাংলা</a></li>
            <li><a href="#">ગુજરાતી</a></li>
            <li><a href="#">ଓଡ଼ିଆ</a></li>
            <li><a href="#">मराठी</a></li>
        </ul>
        </div>
        <div class="temp"><div id="city" class="mr-3">Lucknow</div>
            <i id="weather-icon" class="fas fa-sun"></i>
            <div id="temperature">28°C</div>
        </div>
    </nav>
<div class="logo-main">
    
    <div class="logo">
                <h1>आर्य प्रवाह
                <h5>हिन्दी दैनिक</h5>
                </h1>
    </div>
    <div class="logo-right">
        <button type="button" class="btn btn-danger login"> <a href="/login" class="login-text"><i class="fas fa-user icon"></i>Login</a></button>
    </div>
</div>
<!-- Login -->
<div class="container mt-5">
    <form action="/login" method="post">
        <h2>Login</h2>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <p class="mt-3">Don't have an account? <a href="/signup">Sign Up</a></p>
    </form>
</div>

<!-- SignUp -->
<div class="container mt-5">
    <form action="/signup" method="post">
        <h2>Sign Up</h2>
        <div class="form-group">
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
    </form>
</div>

<!-- Navbar -->
<div class="navbar">  
        <ul class="navbar-ul">
            <li><a href="">होम</a></li>
            <li><a href="#">राष्ट्रीय</a></li>
            <li><a href="#">राज्य</a></li>
            <li><a href="#">ओपिनियन</a></li>
            <li><a href="#">मनोरंजन</a></li>
            <li><a href="#">खेल</a></li>
            <li><a href="#">वेब स्टोरीज​​</a></li>
            <li><a href="#">वीडियो</a></li>
            <li><a href="#">विश्व</a></li>
            <li><a href="#">बिजनेस</a></li>
        </ul>

        <div class="right-side">
            <button class="download-button">Download E-paper</button>
            
            <div class="search-box">
            <input type="text" class="text" placeholder="Search...">
            <span class="material-symbols-outlined">search</span>
            </div>
        </div>
</div>
<!-- Main structure of newspaper -->
    <!-- for 1st news -->
    <div class="container mt-5">
    <div class="row">
        <!-- Sample news card -->
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="path_to_image.jpg" class="card-img-top" alt="News Image">
                <div class="card-body">
                    <h5 class="card-title">News Title</h5>
                    <p class="card-text">A short description of the news...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-toggle="collapse" data-target="#fullStory1">
                        Read Full Story
                    </button>
                    <div id="fullStory1" class="collapse mt-2">
                        <p>Full content of the news article goes here. This content appears when "Read Full Story" is clicked.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Repeat similar structure for additional news items as needed -->
        <!-- Add more cards by copying the above block and updating `data-target` and `id` for each item -->
    </div>
</div>

<!-- Footer -->
<footer class="container-fluid bg-light text-center py-3">
    <div class="social-icons mt-2">
        <a href="https://www.instagram.com/yournewspaper" target="_blank" class="text-dark mx-2"><i class="fab fa-instagram fa-lg"></i></a>
        <a href="https://www.youtube.com/yournewspaper" target="_blank" class="text-dark mx-2"><i class="fab fa-youtube fa-lg"></i></a>
        <a href="https://www.twitter.com/yournewspaper" target="_blank" class="text-dark mx-2"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="https://www.facebook.com/yournewspaper" target="_blank" class="text-dark mx-2"><i class="fab fa-facebook fa-lg"></i></a>
        <button onclick="copyLink()" class="text-dark mx-2"><i class="fas fa-link fa-lg"></i></button>
    </div>
    <p>&copy; 2024 Arya Prawah. All rights reserved.</p>
</footer>

</body>
</html>