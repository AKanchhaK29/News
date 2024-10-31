document.addEventListener('DOMContentLoaded', function() {
    // Update the date and time
    function updateDateTime() {
        const dateTimeElement = document.getElementById('datetime');
        if (dateTimeElement) {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            dateTimeElement.innerText = now.toLocaleDateString('en-US', options);
        }
    }

    setInterval(updateDateTime, 1000); // Update date and time every second
    updateDateTime();

    // Function to update weather icon and temperature
    function updateWeather(condition, temperature) {
        const weatherIcon = document.getElementById('weather-icon');
        const tempElement = document.getElementById('temperature');

        if (weatherIcon && tempElement) {
            switch (condition) {
                case 'sunny':
                    weatherIcon.className = 'fas fa-sun ml-2';
                    break;
                case 'rainy':
                    weatherIcon.className = 'fas fa-cloud-showers-heavy ml-2';
                    break;
                case 'thunderstorm':
                    weatherIcon.className = 'fas fa-bolt ml-2';
                    break;
                default:
                    weatherIcon.className = 'fas fa-sun ml-2';
            }

            tempElement.innerText = temperature + '°C';
        }
    }

    // Example usage (replace with actual weather data)
    updateWeather('sunny', 28);
});

// ...Structure part...
// JavaScript to handle the news navigation
document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('newsList');
    const fullStory = document.getElementById('fullStory');
    const backButton = document.getElementById('backButton');
    const fullStoryTitle = document.getElementById('fullStoryTitle');
    const fullStoryContent = document.getElementById('fullStoryContent');

    // Articles data
    const articles = {
        1: { 
            title: 'Global Economic Growth', 
            content: `
                Global economic growth is expected to remain steady at around 3.2% in 2024 and 2025, 
                according to the latest forecasts by the IMF. However, this rate falls below the 
                pre-pandemic average of 3.8%. While growth in the United States and emerging markets 
                like Asia is helping stabilize the global economy, other regions, especially parts of 
                Europe and Sub-Saharan Africa, are facing downgrades due to factors such as geopolitical 
                tensions, commodity disruptions, and weather events.

                Inflation is projected to continue declining, with global headline inflation expected to 
                fall from 5.8% in 2024 to 4.3% in 2025.

                Despite improvements, risks remain, including potential financial market volatility, 
                disruptions in China's property sector, and geopolitical tensions, which could impact 
                the global economic outlook.
            ` 
        },

    2: { title: 'AI Revolution in Healthcare',
        content: `AI's integration into healthcare is reshaping the industry in several key areas. Machine learning algorithms are being used to analyze complex medical data, including genomics, radiology images, and electronic health records. For example, AI-powered tools help in early detection of diseases like cancer by identifying patterns in imaging that may not be visible to the human eye. AI systems are also revolutionizing personalized medicine, using patient data to predict responses to specific treatments and suggesting tailored interventions.

        In diagnostics, AI systems have demonstrated the ability to surpass human doctors in accuracy for some conditions. For example, AI-driven tools have outperformed radiologists in detecting lung cancer in early stages from CT scans, which is crucial for improving survival rates. Additionally, AI is accelerating the drug discovery process by predicting how different compounds will interact with biological targets, reducing the time and cost required for bringing new drugs to market.

        AI is also optimizing hospital workflows, predicting patient admission patterns, and enabling real-time monitoring of patients through wearables and mobile devices. This helps to reduce the strain on healthcare providers, improve patient outcomes, and manage chronic diseases more effectively.

        However, challenges remain, including ensuring data privacy, addressing biases in AI algorithms, and securing regulatory approval for widespread AI applications in clinical settings. Nevertheless, the AI revolution in healthcare holds significant promise for improving patient care, reducing costs, and enhancing overall healthcare delivery.

        These advances signal a new era in healthcare, where AI is poised to become a pivotal tool for improving medical outcomes and transforming how care is delivered.`

    },

    3: { title: ' Climate Change & Global Policy',
        content: `The urgency to address climate change has intensified as the latest reports reveal alarming trends and data. UN Secretary-General António Guterres highlighted the dire state of the planet, marking 2023 as a year of record heat, rising sea levels, and extreme weather events that have caused widespread devastation and economic losses. He emphasized that global leaders must act decisively to limit temperature increases, outlining necessary measures like transitioning away from fossil fuels, enhancing climate finance for developing nations, and establishing effective early warning systems for extreme weather events. Despite the grim scenario, Guterres remains optimistic that significant climate action can still avert the worst impacts.`
    },

    4: {title: `Advancements in Renewable Energy`,
        content: `Advancements in Renewable Energy
        In recent years, renewable energy has seen significant advancements, driven by technology, policy, and market dynamics. Key developments include:

        Solar Energy Innovations: The efficiency of solar panels has improved dramatically, with perovskite solar cells emerging as a promising alternative. These cells can be cheaper to produce and have the potential to reach higher efficiencies than traditional silicon-based cells.

        Wind Energy Growth: Offshore wind farms are expanding rapidly, utilizing larger and more efficient turbines. Innovations in floating wind turbine technology allow for installations in deeper waters, significantly increasing the potential for wind energy generation.

        Energy Storage Solutions: Advances in battery technology, particularly lithium-ion and solid-state batteries, are enhancing energy storage capabilities. This is crucial for balancing supply and demand, especially for intermittent energy sources like solar and wind.

        Hydrogen Economy: Green hydrogen, produced using renewable energy sources, is gaining traction as a clean fuel alternative. It can be used in transportation, industrial processes, and energy storage, contributing to decarbonization efforts.

        Smart Grids and AI: Integration of artificial intelligence in energy management systems improves the efficiency of electricity distribution and consumption. Smart grids enable real-time monitoring and optimization of energy flow, enhancing the reliability of renewable energy sources.

        Government Policies and Investment: Many countries are increasing investments in renewable energy infrastructure and offering incentives for clean energy projects. Global commitments to reduce carbon emissions are accelerating the transition to sustainable energy systems.

        These advancements reflect a growing commitment to reducing reliance on fossil fuels and combating climate change, paving the way for a more sustainable energy future.`
    },

    5: {title: `The Future of Work: Remote vs. Office`,
        content: `As the world continues to adapt to changes brought about by the COVID-19 pandemic, the conversation around remote work versus office work has intensified. Organizations are now exploring hybrid models, full remote setups, and traditional office environments, leading to significant shifts in workplace culture and employee expectations.<br><br>

        <strong>1. Rise of Remote Work</strong><br>
        The pandemic forced many companies to transition to remote work, and this shift has had lasting effects. Employees have reported increased flexibility, improved work-life balance, and reduced commute times. Surveys indicate that a significant portion of the workforce prefers remote work, with many expressing a desire to continue working from home even post-pandemic.<br>
        <em>Benefits:</em> Increased productivity, flexibility in working hours, and cost savings on commuting and office attire.<br>
        <em>Challenges:</em> Feelings of isolation, difficulties in communication and collaboration, and challenges in separating work from personal life.<br><br>

        <strong>2. The Case for Office Work</strong><br>
        Despite the advantages of remote work, many companies advocate for a return to the office. The office environment fosters collaboration, innovation, and company culture. In-person interactions can enhance team dynamics and improve communication.<br>
        <em>Benefits:</em> Enhanced teamwork, spontaneous brainstorming, and stronger company culture.<br>
        <em>Challenges:</em> Commuting time, potential distractions in the office, and limited flexibility.<br><br>

        <strong>3. Hybrid Work Models</strong><br>
        Many organizations are adopting hybrid work models that combine remote and in-office work. This approach allows employees to choose when and where they work, fostering a sense of autonomy and job satisfaction.<br>
        <em>Advantages:</em> Flexibility to work from home or the office, catering to diverse employee preferences, and maintaining a collaborative spirit.<br>
        <em>Implementation:</em> Companies are investing in technology to support hybrid work, such as video conferencing tools and collaborative software, to ensure seamless communication regardless of location.<br><br>

        <strong>4. Technology’s Role</strong><br>
        Technology plays a crucial role in shaping the future of work. Tools for communication, project management, and collaboration are vital for both remote and hybrid setups. The rise of artificial intelligence and automation is also changing job roles and workplace dynamics.<br>
        <em>Innovations:</em> Virtual reality (VR) and augmented reality (AR) are being explored for remote collaboration, while AI-driven analytics help organizations monitor productivity and employee engagement.<br><br>

        <strong>5. Employee Well-being and Work Culture</strong><br>
        Organizations are increasingly focusing on employee well-being and mental health. The shift to remote work has highlighted the importance of creating a supportive work environment, whether at home or in the office. Companies are implementing wellness programs and mental health resources to support their employees.<br>
        <em>Culture Shift:</em> Companies are reevaluating their corporate cultures to promote inclusivity and well-being, recognizing that a happy workforce is essential for long-term success.<br><br>

        <strong>6. Conclusion</strong><br>
        The future of work will likely be characterized by flexibility, with a blend of remote and office environments becoming the norm. Organizations that embrace these changes and prioritize employee needs are better positioned to thrive in this evolving landscape. As businesses continue to adapt, the focus will be on creating sustainable work environments that enhance productivity, foster collaboration, and support overall well-being.
    `
    },

    6: {title: `Tech Giants Unveil New Privacy Features`,
        content: `In response to growing concerns over data privacy and security, major technology companies have announced a series of new privacy features aimed at enhancing user control over personal information. As data breaches and privacy violations continue to make headlines, these updates reflect a significant shift in the industry’s approach to data protection.<br><br>

<strong>1. Overview of New Features</strong><br>
Leading tech firms, including Apple, Google, and Facebook, have introduced updates that give users more transparency and control over their data. These features are designed to address user concerns and comply with increasingly stringent regulations, such as the General Data Protection Regulation (GDPR) in Europe and similar laws worldwide.<br>

Apple has rolled out enhanced privacy settings in its latest iOS update, allowing users to see which apps are tracking their data. The feature includes a "Privacy Report" that summarizes data collection practices across apps.<br>

Google has introduced a new "Privacy Checkup" tool within its account settings. This tool guides users through their privacy settings, enabling them to adjust what data is shared with Google and its services.<br>

Facebook, facing scrutiny over its data practices, has launched a new set of privacy controls that allow users to manage who can see their posts and limit data sharing with third-party apps.<br>

<strong>2. User Empowerment and Transparency</strong><br>
One of the central themes of these updates is user empowerment. Tech giants are focusing on making privacy settings more accessible and understandable for users. This includes clearer explanations of data usage and simplified opt-in and opt-out processes.<br>

<em>Privacy Labels:</em> Many companies are adopting privacy labels that display how apps handle user data before installation. These labels provide a concise overview of data practices, allowing users to make informed choices.<br>

<em>Consent Management:</em> Improved consent management tools allow users to easily manage their preferences regarding targeted advertising and data sharing, aligning with the increasing demand for user-centric privacy practices.<br>

<strong>3. Regulatory Compliance and Industry Standards</strong><br>
As governments around the world tighten regulations on data privacy, tech companies are proactively adjusting their policies to comply with these laws. This includes regular audits of data practices and increased transparency regarding data storage and sharing.<br>

<em>GDPR and CCPA Compliance:</em> Many updates are aimed at ensuring compliance with GDPR and the California Consumer Privacy Act (CCPA), which grant users rights over their personal data, including the right to access, delete, and limit data sharing.<br>

<em>Collaboration with Regulators:</em> Tech firms are engaging with regulators to help shape industry standards for data privacy, emphasizing their commitment to protecting user information.<br>

<strong>4. User Reactions and Industry Implications</strong><br>
The response from users has been mixed. While many appreciate the increased transparency and control, some critics argue that these measures do not go far enough in addressing systemic privacy issues.<br>

<em>User Education:</em> Many users remain unaware of the implications of these privacy features. Tech companies are encouraged to invest in user education campaigns to raise awareness about data privacy and how to utilize new features effectively.<br>

<em>Future Innovations:</em> The competition among tech giants to enhance privacy features is expected to drive further innovations in data protection technologies, including advanced encryption methods and machine learning algorithms that safeguard user information.<br>

<strong>5. Conclusion : </strong>
The unveiling of new privacy features by tech giants marks a significant step towards addressing user concerns in an increasingly digital world. As companies continue to refine their data practices and comply with regulations, the focus on user empowerment and transparency is likely to shape the future of technology and privacy. Users are urged to take advantage of these new tools and remain vigilant about their data privacy.`
    },
        // Add more articles here as needed
    };

    // Function to show the full story
    function showFullStory(articleId) {
        const article = articles[articleId];
        fullStoryTitle.textContent = article.title;
        fullStoryContent.innerHTML = article.content;

        // Show the full story container and hide the news list
        newsList.style.display = 'none';
        fullStory.style.display = 'block';

        // Update the browser's URL without refreshing the page
        window.history.pushState({ page: 'fullStory', articleId: articleId }, '', `#article-${articleId}`);
    }

    // Function to go back to the news list
    function goBackToNewsList() {
        // Show the news list and hide the full story container
        newsList.style.display = 'block';
        fullStory.style.display = 'none';

        // Update the URL to reflect the news list view
        window.history.pushState({ page: 'newsList' }, '', '#news');
    }

    // Event listener for the "Read Full Story" buttons
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const articleId = this.getAttribute('data-article-id');
            showFullStory(articleId);
        });
    });

    // Event listener for the back button in the full story view
    backButton.addEventListener('click', goBackToNewsList);

    // Handle back/forward navigation
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.page === 'newsList') {
            goBackToNewsList();
        } else if (event.state && event.state.page === 'fullStory') {
            showFullStory(event.state.articleId);
        }
    });

    // Initialize the correct view based on the URL (in case of refresh or direct access)
    if (window.location.hash.startsWith('#article-')) {
        const articleId = window.location.hash.split('-')[1];
        showFullStory(articleId);
    } else {
        goBackToNewsList();
    }
});


//...footer part...
//JavaScript to Copy Link
    function copyLink() {
        const dummy = document.createElement('input');
        const text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Link copied to clipboard!');
    }

//Javascript to share a link of news
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Arya Prawah',
            url: window.location.href
        }).catch(console.error);
    } else {
        alert('Share not supported on this browser.');
    }
}