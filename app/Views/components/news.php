<!-- for 1st news -->
<div class="container mt-5" id="newsList">
    <div class="row">
        <!-- Sample news card -->
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="<?= base_url('images/global_economic_growth.webp'); ?>" class="card-img-top" alt="Global Economic Growth">
                <div class="card-body">
                    <h5 class="card-title">Global Economic Growth</h5>
                    <p class="card-text"> A short description about the global economic growth in 2024...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-article-id="1">
                        Read Full Story
                    </button>
                </div>
            </div>
        </div>


        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="<?= base_url('images/ai_medicine.jpg'); ?>" class="card-img-top" alt="AI Revolution in Healthcare">
                <div class="card-body">
                    <h5 class="card-title">AI Revolution in Healthcare</h5>
                    <p class="card-text">The rise of artificial intelligence is transforming the healthcare industry...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-article-id="2">
                        Read Full Story
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="<?= base_url('images/renewable_energy.webp'); ?>" class="card-img-top" alt="News Image">
                <div class="card-body">
                    <h5 class="card-title">Climate Change & Global Policy</h5>
                    <p class="card-text">A global response to climate change is urgently needed...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-article-id="3">
                        Read Full Story
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="<?= base_url('images/renewable_energy.webp'); ?>" class="card-img-top" alt="News Image">
                <div class="card-body">
                    <h5 class="card-title">Advancements in Renewable Energy</h5>
                    <p class="card-text">A look into the future of clean energy technologies...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-article-id="4">
                        Read Full Story
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="<?= base_url('images/office_remote_work.jpg'); ?>" class="card-img-top" alt="News Image">
                <div class="card-body">
                    <h5 class="card-title">The Future of Work: Remote vs. Office</h5>
                    <p class="card-text">The debate over remote work versus in-office work continues...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-article-id="5">
                        Read Full Story
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="<?= base_url('images/tech_giants.jpg'); ?>" class="card-img-top" alt="News Image">
                <div class="card-body">
                    <h5 class="card-title">Tech Giants Unveil New Privacy Features</h5>
                    <p class="card-text">Tech Giants Announce New Privacy Features to enhance user data protection amid rising concerns over privacy violations...</p>
                    <!-- Read Full Story Button -->
                    <button class="btn btn-primary btn-sm read-more-btn" data-article-id="6">
                        Read Full Story
                    </button>
                </div>
            </div>
        </div>

        <!-- Repeat similar structure for additional news items as needed -->
        <!-- Add more cards by copying the above block and updating `data-target` and `id` for each item -->
    </div>
</div>

<!-- Full story content container (hidden initially) -->
<div class="container mt-5" id="fullStory" style="display:none;">
    <button id="backButton" class="btn btn-secondary mb-4">Back to News</button>
    <h1 id="fullStoryTitle">Full Story Title</h1>
    <p id="fullStoryContent">Full content of the selected news article will appear here.</p>
</div>