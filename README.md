<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PeopleTech Final Project</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --accent: #f72585;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4cc9f0;
            --gradient: linear-gradient(135deg, var(--primary), var(--secondary));
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f9fafb;
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header & Navigation */
        header {
            background: var(--gradient);
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
        }
        
        .logo i {
            margin-right: 10px;
            color: var(--accent);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 2rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--accent);
        }
        
        /* Hero Section */
        .hero {
            background: var(--gradient);
            color: white;
            padding: 6rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
            background-size: cover;
            background-position: center;
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            animation: fadeInDown 1s ease;
        }
        
        .hero p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease;
        }
        
        .cta-button {
            display: inline-block;
            background-color: var(--accent);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            animation: fadeIn 1.5s ease;
            box-shadow: 0 4px 14px rgba(247, 37, 133, 0.4);
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(247, 37, 133, 0.6);
        }
        
        /* Sections */
        section {
            padding: 5rem 0;
        }
        
        section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--secondary);
            position: relative;
        }
        
        section h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--gradient);
            border-radius: 2px;
        }
        
        .section-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
        }
        
        /* Project Overview */
        .overview-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            flex: 1;
            min-width: 300px;
            max-width: 500px;
            transition: transform 0.3s ease;
        }
        
        .overview-card:hover {
            transform: translateY(-5px);
        }
        
        .overview-card i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .overview-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--secondary);
        }
        
        /* Tech Stack */
        .tech-item {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            flex: 1;
            min-width: 200px;
            max-width: 250px;
            transition: all 0.3s ease;
        }
        
        .tech-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
        
        .tech-item i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .tech-item h3 {
            font-size: 1.2rem;
            color: var(--secondary);
        }
        
        /* Live Preview */
        .preview-container {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .preview-container img {
            width: 100%;
            display: block;
            transition: transform 0.5s ease;
        }
        
        .preview-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(58, 12, 163, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .preview-container:hover .preview-overlay {
            opacity: 1;
        }
        
        .preview-container:hover img {
            transform: scale(1.05);
        }
        
        .preview-overlay h3 {
            color: white;
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        
        .preview-button {
            display: inline-block;
            background-color: var(--accent);
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .preview-button:hover {
            background-color: white;
            color: var(--accent);
        }
        
        /* How to Run */
        .instructions {
            background: white;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            max-width: 800px;
            margin: 0 auto;
        }
        
        .instructions ol {
            margin-left: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .instructions li {
            margin-bottom: 1rem;
        }
        
        code {
            background: #f3f4f6;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            display: block;
            margin: 0.5rem 0;
            white-space: pre-wrap;
        }
        
        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            padding: 3rem 0;
            text-align: center;
        }
        
        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            margin: 1.5rem 0;
        }
        
        .social-links a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            margin: 0 0.5rem;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background: var(--accent);
            transform: translateY(-3px);
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
            from { 
                opacity: 0;
                transform: translateY(20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInDown {
            from { 
                opacity: 0;
                transform: translateY(-20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .section-content {
                flex-direction: column;
                align-items: center;
            }
            
            .tech-item {
                min-width: 150px;
            }
        }
    </style>
</head>
<body>
    <!-- Header & Navigation -->
    <header>
        <div class="container">
            <nav>
                <div class="logo">
                    <i class="fas fa-rocket"></i>
                    <span>PeopleTech</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#tech">Tech Stack</a></li>
                    <li><a href="#preview">Live Preview</a></li>
                    <li><a href="#run">Run Locally</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>PeopleTech Final Project</h1>
            <p>Modern web development practices with clean UI/UX and responsive design</p>
            <a href="https://peopletechfinalproject.netlify.app/" class="cta-button">
                View Live Project <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>

    <!-- Project Overview -->
    <section id="overview">
        <div class="container">
            <h2>Project Overview</h2>
            <div class="section-content">
                <div class="overview-card">
                    <i class="fas fa-paint-brush"></i>
                    <h3>Clean UI/UX</h3>
                    <p>This project demonstrates modern design principles with a focus on user experience and intuitive interfaces.</p>
                </div>
                <div class="overview-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Responsive Design</h3>
                    <p>Fully responsive layout that works seamlessly across all devices from mobile to desktop.</p>
                </div>
                <div class="overview-card">
                    <i class="fas fa-bolt"></i>
                    <h3>Optimized Deployment</h3>
                    <p>Efficiently deployed using Netlify with optimized performance and fast loading times.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack -->
    <section id="tech" style="background-color: #f1f5f9;">
        <div class="container">
            <h2>Tech Stack</h2>
            <div class="section-content">
                <div class="tech-item">
                    <i class="fab fa-html5"></i>
                    <h3>HTML5</h3>
                </div>
                <div class="tech-item">
                    <i class="fab fa-css3-alt"></i>
                    <h3>CSS3</h3>
                </div>
                <div class="tech-item">
                    <i class="fab fa-js"></i>
                    <h3>JavaScript</h3>
                </div>
                <div class="tech-item">
                    <i class="fas fa-cloud"></i>
                    <h3>Netlify</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Live Preview -->
    <section id="preview">
        <div class="container">
            <h2>Live Demo Preview</h2>
            <div class="preview-container">
                <img src="https://placehold.co/900x500/4361ee/ffffff/png?text=PeopleTech+Project+Screenshot" alt="Project Screenshot">
                <div class="preview-overlay">
                    <h3>Explore the Live Project</h3>
                    <a href="https://peopletechfinalproject.netlify.app/" class="preview-button">View Live Demo</a>
                </div>
            </div>
        </div>
    </section>

    <!-- How to Run -->
    <section id="run" style="background-color: #f1f5f9;">
        <div class="container">
            <h2>How to Run Locally</h2>
            <div class="instructions">
                <ol>
                    <li>Clone the repository</li>
                    <code>git clone https://github.com/your-username/peopletech-final-project.git</code>
                    
                    <li>Navigate to the project directory</li>
                    <code>cd peopletech-final-project</code>
                    
                    <li>Open the project in your code editor</li>
                    <code>code .</code>
                    
                    <li>Run a local server to view the project</li>
                    <code>python -m http.server 8000</code>
                    
                    <li>Open your browser and visit</li>
                    <code>http://localhost:8000</code>
                </ol>
                <p>Note: You can use any local server of your choice. Python's built-in server is used here as an example.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <h3>PeopleTech Final Project</h3>
                <p>Deployed on Netlify for optimal performance</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <p>&copy; 2023 PeopleTech Final Project. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Simple animation for sections when scrolling
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(section);
            });
        });
    </script>
</body>
</html>
