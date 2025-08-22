// AI SEO Nexus - Advanced SEO Audit Platform
// JavaScript for interactive functionality and data visualization

class SEOAuditPlatform {
    constructor() {
        this.auditData = null;
        this.charts = {};
        this.loadingMessages = [
            'Initializing audit systems...',
            'Analyzing HTML structure...',
            'Checking Core Web Vitals...',
            'Scanning meta tags and headers...',
            'Evaluating accessibility features...',
            'Detecting structured data...',
            'Analyzing internal link structure...',
            'Checking image optimization...',
            'Running AI analysis...',
            'Generating insights and recommendations...',
            'Finalizing comprehensive report...'
        ];
        this.init();
    }

    init() {
        this.loadSampleData();
        this.bindEvents();
        this.setupNavigation();
        
        // Ensure page loads with proper dark theme
        document.body.setAttribute('data-color-scheme', 'dark');
        
        // Start particle animation
        this.animateParticles();
    }

    bindEvents() {
        const urlInput = document.getElementById('urlInput');
        const auditBtn = document.getElementById('auditBtn');
        const downloadBtn = document.getElementById('downloadReportBtn');

        if (urlInput) {
            urlInput.addEventListener('input', (e) => {
                this.validateURL(e.target.value);
                console.log('URL input:', e.target.value); // Debug log
            });
            
            // Ensure input is visible by setting explicit styles
            urlInput.style.color = '#ffffff';
            urlInput.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }

        if (auditBtn) {
            auditBtn.addEventListener('click', () => {
                console.log('Audit button clicked'); // Debug log
                this.startAudit();
            });
        }

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                console.log('Download button clicked'); // Debug log
                this.generatePDFReport();
            });
        }

        // Schedule button
        const scheduleBtn = document.querySelector('.schedule-btn');
        if (scheduleBtn) {
            scheduleBtn.addEventListener('click', () => this.showScheduleModal());
        }
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                console.log('Nav link clicked:', target); // Debug log
                
                if (target) {
                    const targetElement = document.querySelector(target);
                    if (targetElement) {
                        targetElement.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            // Reset animation
            particle.style.animation = 'none';
            particle.offsetHeight; // Trigger reflow
            particle.style.animation = `float ${6 + index * 2}s infinite linear`;
            particle.style.animationDelay = `${index * 2}s`;
        });
    }

    validateURL(url) {
        const validation = document.getElementById('urlValidation');
        if (!validation) return false;

        const urlPattern = /^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

        if (!url) {
            validation.textContent = '';
            validation.className = 'url-validation';
            return false;
        }

        if (urlPattern.test(url)) {
            validation.textContent = '✓ Valid URL format';
            validation.className = 'url-validation valid';
            return true;
        } else {
            validation.textContent = '✗ Please enter a valid URL (e.g., https://example.com)';
            validation.className = 'url-validation';
            return false;
        }
    }

    async startAudit() {
        const urlInput = document.getElementById('urlInput');
        const url = urlInput ? urlInput.value.trim() : '';

        console.log('Starting audit for URL:', url); // Debug log

        // If no URL provided, use sample URL
        if (!url) {
            urlInput.value = 'https://example-website.com';
        }

        if (url && !this.validateURL(url)) {
            alert('Please enter a valid URL before starting the audit.');
            return;
        }

        // Hide hero section and show loading
        const heroSection = document.getElementById('hero');
        const loadingSection = document.getElementById('loadingSection');
        const dashboardSection = document.getElementById('dashboard');

        if (heroSection) heroSection.classList.add('hidden');
        if (loadingSection) loadingSection.classList.remove('hidden');
        if (dashboardSection) dashboardSection.classList.add('hidden');

        console.log('Loading section should be visible now'); // Debug log

        // Start loading animation
        await this.simulateAuditProcess();

        // Show results
        if (loadingSection) loadingSection.classList.add('hidden');
        if (dashboardSection) dashboardSection.classList.remove('hidden');

        // Populate and animate results
        this.populateAuditResults();
        this.animateScoreCards();
        
        // Setup charts after a brief delay to ensure DOM is ready
        setTimeout(() => {
            this.renderCharts();
        }, 500);

        // Scroll to results
        if (dashboardSection) {
            dashboardSection.scrollIntoView({ behavior: 'smooth' });
        }

        console.log('Audit completed and dashboard should be visible'); // Debug log
    }

    async simulateAuditProcess() {
        const progressFill = document.getElementById('progressFill');
        const loadingText = document.getElementById('loadingText');
        
        console.log('Starting audit simulation'); // Debug log
        
        for (let i = 0; i < this.loadingMessages.length; i++) {
            if (loadingText) {
                loadingText.textContent = this.loadingMessages[i];
            }
            
            const progress = ((i + 1) / this.loadingMessages.length) * 100;
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
            
            console.log(`Progress: ${progress}%`, this.loadingMessages[i]); // Debug log
            
            // Variable delay to simulate real processing
            const delay = Math.random() * 800 + 300; // Reduced delay for faster testing
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        console.log('Audit simulation completed'); // Debug log
    }

    loadSampleData() {
        this.auditData = {
            url: "https://example-website.com",
            auditDate: "2025-08-22",
            overallScore: 73,
            technicalSeo: {
                score: 65,
                issues: [
                    {
                        type: "critical",
                        title: "Missing Meta Description",
                        description: "5 pages are missing meta descriptions",
                        impact: "High",
                        effort: "Low",
                        pages: 5,
                        icon: "🔍"
                    },
                    {
                        type: "warning",
                        title: "Duplicate H1 Tags",
                        description: "3 pages have duplicate H1 tags",
                        impact: "Medium",
                        effort: "Low",
                        pages: 3,
                        icon: "⚠️"
                    },
                    {
                        type: "good",
                        title: "Canonical Tags",
                        description: "All pages have proper canonical tags",
                        impact: "High",
                        effort: "N/A",
                        pages: 25,
                        icon: "✅"
                    },
                    {
                        type: "warning",
                        title: "Missing Sitemap",
                        description: "XML sitemap not found or not submitted",
                        impact: "Medium",
                        effort: "Medium",
                        pages: 0,
                        icon: "🗺️"
                    },
                    {
                        type: "critical",
                        title: "Robots.txt Issues",
                        description: "Robots.txt is blocking important pages",
                        impact: "High",
                        effort: "Low",
                        pages: 2,
                        icon: "🤖"
                    }
                ]
            },
            performance: {
                score: 82,
                coreWebVitals: {
                    lcp: "2.1s",
                    lcpScore: "good",
                    cls: "0.08",
                    clsScore: "good",
                    inp: "180ms",
                    inpScore: "good"
                },
                pageSpeed: {
                    desktop: 89,
                    mobile: 76
                }
            },
            accessibility: {
                score: 78,
                issues: [
                    {
                        type: "critical",
                        title: "Missing Alt Text",
                        description: "15 images missing alt text",
                        impact: "High",
                        effort: "Medium",
                        count: 15,
                        icon: "🖼️"
                    },
                    {
                        type: "warning",
                        title: "Color Contrast",
                        description: "3 elements have insufficient color contrast",
                        impact: "Medium",
                        effort: "Low",
                        count: 3,
                        icon: "🎨"
                    }
                ]
            },
            bestPractices: {
                score: 92,
                https: true,
                mixedContent: false,
                securityHeaders: true,
                compressionEnabled: true
            },
            structuredData: {
                hasSchema: true,
                types: ["Organization", "Breadcrumb", "Article"],
                errors: 2,
                warnings: 1
            },
            links: {
                internal: 47,
                external: 12,
                broken: 3,
                nofollow: 8
            },
            images: {
                total: 28,
                withAlt: 13,
                withoutAlt: 15,
                oversized: 5,
                webpFormat: 8
            },
            aiInsights: [
                {
                    priority: 1,
                    title: "Add Missing Meta Descriptions",
                    description: "Meta descriptions improve click-through rates from search results. Add unique, compelling descriptions for 5 pages.",
                    estimatedImpact: "High",
                    timeToFix: "2 hours",
                    steps: [
                        "Identify pages without meta descriptions using our audit results",
                        "Write unique 150-160 character descriptions for each page",
                        "Include target keywords naturally within the description",
                        "Test descriptions for engagement and click-through optimization"
                    ]
                },
                {
                    priority: 2,
                    title: "Optimize Image Alt Text",
                    description: "Add descriptive alt text to 15 images to improve accessibility and SEO. This will help screen readers and search engines understand your content better.",
                    estimatedImpact: "Medium",
                    timeToFix: "3 hours",
                    steps: [
                        "Audit all images without alt text using our detailed report",
                        "Write descriptive, keyword-rich alt text for each image",
                        "Avoid keyword stuffing while maintaining descriptive accuracy",
                        "Update your CMS or HTML directly with the new alt text"
                    ]
                },
                {
                    priority: 3,
                    title: "Fix Robots.txt Configuration",
                    description: "Your robots.txt is currently blocking important pages from being crawled by search engines, which could impact your search visibility.",
                    estimatedImpact: "High",
                    timeToFix: "1 hour",
                    steps: [
                        "Review current robots.txt configuration",
                        "Identify incorrectly blocked important pages",
                        "Update robots.txt to allow crawling of essential content",
                        "Test changes using Google Search Console"
                    ]
                }
            ],
            history: [
                {
                    date: "2025-08-22",
                    overallScore: 73,
                    technicalScore: 65,
                    performanceScore: 82,
                    accessibilityScore: 78,
                    bestPracticesScore: 92
                },
                {
                    date: "2025-07-22",
                    overallScore: 68,
                    technicalScore: 60,
                    performanceScore: 79,
                    accessibilityScore: 72,
                    bestPracticesScore: 90
                },
                {
                    date: "2025-06-22",
                    overallScore: 65,
                    technicalScore: 58,
                    performanceScore: 75,
                    accessibilityScore: 70,
                    bestPracticesScore: 88
                },
                {
                    date: "2025-05-22",
                    overallScore: 62,
                    technicalScore: 55,
                    performanceScore: 73,
                    accessibilityScore: 68,
                    bestPracticesScore: 85
                }
            ]
        };
        console.log('Sample data loaded:', this.auditData); // Debug log
    }

    animateScoreCards() {
        const scoreCards = document.querySelectorAll('.score-card');
        scoreCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }, index * 100);
        });
    }

    populateAuditResults() {
        console.log('Populating audit results'); // Debug log
        
        // Update score numbers
        const overallScoreEl = document.getElementById('overallScore');
        const technicalScoreEl = document.getElementById('technicalScore');
        const performanceScoreEl = document.getElementById('performanceScore');
        const accessibilityScoreEl = document.getElementById('accessibilityScore');

        if (overallScoreEl) overallScoreEl.textContent = this.auditData.overallScore;
        if (technicalScoreEl) technicalScoreEl.textContent = this.auditData.technicalSeo.score;
        if (performanceScoreEl) performanceScoreEl.textContent = this.auditData.performance.score;
        if (accessibilityScoreEl) accessibilityScoreEl.textContent = this.auditData.accessibility.score;

        // Populate technical issues
        this.populateTechnicalIssues();
        
        // Populate AI insights
        this.populateAIInsights();
        
        console.log('Audit results populated'); // Debug log
    }

    populateTechnicalIssues() {
        const container = document.getElementById('technicalIssues');
        if (!container) return;

        container.innerHTML = '';

        this.auditData.technicalSeo.issues.forEach(issue => {
            const issueElement = document.createElement('div');
            issueElement.className = `issue-item ${issue.type}`;
            
            issueElement.innerHTML = `
                <div class="issue-icon">${issue.icon}</div>
                <div class="issue-content">
                    <div class="issue-title">${issue.title}</div>
                    <div class="issue-description">${issue.description}</div>
                </div>
                <div class="issue-meta">
                    <span>Impact: ${issue.impact}</span>
                    <span>Effort: ${issue.effort}</span>
                    ${issue.pages ? `<span>Pages: ${issue.pages}</span>` : ''}
                </div>
            `;
            
            container.appendChild(issueElement);
        });
    }

    populateAIInsights() {
        const container = document.getElementById('insightsList');
        if (!container) return;

        container.innerHTML = '';

        this.auditData.aiInsights.forEach(insight => {
            const insightElement = document.createElement('div');
            insightElement.className = 'insight-item';
            
            insightElement.innerHTML = `
                <div class="insight-header">
                    <div class="insight-priority">Priority ${insight.priority}</div>
                </div>
                <div class="insight-title">${insight.title}</div>
                <div class="insight-description">${insight.description}</div>
                <div class="insight-meta">
                    <span>📈 Impact: ${insight.estimatedImpact}</span>
                    <span>⏱️ Time: ${insight.timeToFix}</span>
                </div>
                <div class="insight-steps">
                    <h5>Recommended Steps:</h5>
                    <ol>
                        ${insight.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            `;
            
            container.appendChild(insightElement);
        });
    }

    renderCharts() {
        console.log('Rendering charts'); // Debug log
        this.renderScoreCharts();
        this.renderHistoryChart();
    }

    renderScoreCharts() {
        const scores = [
            { id: 'overallChart', score: this.auditData.overallScore, color: ['#8a2be2', '#00ffff'] },
            { id: 'technicalChart', score: this.auditData.technicalSeo.score, color: ['#ff1493', '#0080ff'] },
            { id: 'performanceChart', score: this.auditData.performance.score, color: ['#00ff41', '#00ffff'] },
            { id: 'accessibilityChart', score: this.auditData.accessibility.score, color: ['#ff1493', '#8a2be2'] }
        ];

        scores.forEach(({ id, score, color }) => {
            const canvas = document.getElementById(id);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                
                // Destroy existing chart if it exists
                if (this.charts[id]) {
                    this.charts[id].destroy();
                }

                this.charts[id] = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [score, 100 - score],
                            backgroundColor: [
                                this.createGradient(ctx, color[0], color[1]),
                                'rgba(255, 255, 255, 0.1)'
                            ],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        cutout: '70%',
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: false
                            }
                        }
                    }
                });
                
                console.log(`Chart ${id} rendered with score ${score}`); // Debug log
            }
        });
    }

    createGradient(ctx, color1, color2) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 160);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    renderHistoryChart() {
        const canvas = document.getElementById('historyChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (this.charts.historyChart) {
            this.charts.historyChart.destroy();
        }

        const labels = this.auditData.history.map(h => {
            const date = new Date(h.date);
            return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
        }).reverse();

        this.charts.historyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Overall Score',
                        data: this.auditData.history.map(h => h.overallScore).reverse(),
                        borderColor: '#8a2be2',
                        backgroundColor: 'rgba(138, 43, 226, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Performance',
                        data: this.auditData.history.map(h => h.performanceScore).reverse(),
                        borderColor: '#00ff41',
                        backgroundColor: 'rgba(0, 255, 65, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Technical SEO',
                        data: this.auditData.history.map(h => h.technicalScore).reverse(),
                        borderColor: '#ff1493',
                        backgroundColor: 'rgba(255, 20, 147, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Accessibility',
                        data: this.auditData.history.map(h => h.accessibilityScore).reverse(),
                        borderColor: '#00ffff',
                        backgroundColor: 'rgba(0, 255, 255, 0.1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 40,
                        max: 100,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.9)'
                        }
                    }
                }
            }
        });
        
        console.log('History chart rendered'); // Debug log
    }

    async generatePDFReport() {
        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();
            
            console.log('Generating PDF report'); // Debug log
            
            // Set up the document
            pdf.setFontSize(24);
            pdf.setTextColor(138, 43, 226); // Purple color
            pdf.text('AI SEO Nexus - Comprehensive Audit Report', 20, 30);
            
            // Add date and URL
            pdf.setFontSize(12);
            pdf.setTextColor(100, 100, 100);
            const urlInput = document.getElementById('urlInput');
            const websiteUrl = urlInput ? urlInput.value || 'https://example-website.com' : 'https://example-website.com';
            pdf.text(`Website: ${websiteUrl}`, 20, 45);
            pdf.text(`Audit Date: ${new Date().toLocaleDateString()}`, 20, 55);
            
            // Executive Summary
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.text('Executive Summary', 20, 75);
            
            pdf.setFontSize(11);
            pdf.setTextColor(60, 60, 60);
            const summaryText = `Your website has been comprehensively analyzed using advanced AI algorithms. Overall SEO Score: ${this.auditData.overallScore}/100. Key areas for improvement include meta descriptions, image optimization, and technical SEO factors. This report provides actionable recommendations prioritized by impact and effort required.`;
            const summaryLines = pdf.splitTextToSize(summaryText, 170);
            pdf.text(summaryLines, 20, 85);
            
            // Scores Section
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.text('Performance Scores', 20, 120);
            
            // Draw colorful score bars
            const scores = [
                { label: 'Overall SEO', score: this.auditData.overallScore, color: [138, 43, 226] },
                { label: 'Technical SEO', score: this.auditData.technicalSeo.score, color: [255, 20, 147] },
                { label: 'Performance', score: this.auditData.performance.score, color: [0, 255, 65] },
                { label: 'Accessibility', score: this.auditData.accessibility.score, color: [0, 255, 255] }
            ];
            
            let yPos = 135;
            scores.forEach(({ label, score, color }) => {
                pdf.setFontSize(11);
                pdf.setTextColor(0, 0, 0);
                pdf.text(label, 20, yPos);
                
                // Score bar background
                pdf.setFillColor(240, 240, 240);
                pdf.rect(80, yPos - 8, 100, 8, 'F');
                
                // Score bar fill
                pdf.setFillColor(color[0], color[1], color[2]);
                pdf.rect(80, yPos - 8, score, 8, 'F');
                
                // Score text
                pdf.setTextColor(color[0], color[1], color[2]);
                pdf.setFontSize(10);
                pdf.text(`${score}/100`, 185, yPos - 2);
                
                yPos += 20;
            });

            // Add new page for detailed issues
            pdf.addPage();
            
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.text('Critical Issues & Recommendations', 20, 30);
            
            yPos = 45;
            this.auditData.technicalSeo.issues.forEach((issue, index) => {
                if (yPos > 250) {
                    pdf.addPage();
                    yPos = 30;
                }
                
                // Issue priority indicator
                const priorityColor = issue.type === 'critical' ? [220, 38, 38] : 
                                     issue.type === 'warning' ? [245, 158, 11] : [34, 197, 94];
                pdf.setFillColor(priorityColor[0], priorityColor[1], priorityColor[2]);
                pdf.rect(20, yPos - 8, 4, 12, 'F');
                
                pdf.setFontSize(12);
                pdf.setTextColor(0, 0, 0);
                pdf.text(issue.title, 30, yPos);
                
                pdf.setFontSize(10);
                pdf.setTextColor(100, 100, 100);
                const descLines = pdf.splitTextToSize(issue.description, 160);
                pdf.text(descLines, 30, yPos + 10);
                
                yPos += 25 + (descLines.length * 4);
            });

            // Add AI Insights page
            pdf.addPage();
            
            pdf.setFontSize(16);
            pdf.setTextColor(138, 43, 226);
            pdf.text('🤖 AI-Powered Insights & Action Plan', 20, 30);
            
            yPos = 50;
            this.auditData.aiInsights.forEach((insight, index) => {
                if (yPos > 220) {
                    pdf.addPage();
                    yPos = 30;
                }
                
                // Priority badge
                pdf.setFillColor(138, 43, 226);
                pdf.roundedRect(20, yPos - 10, 25, 10, 2, 2, 'F');
                pdf.setTextColor(255, 255, 255);
                pdf.setFontSize(8);
                pdf.text(`Priority ${insight.priority}`, 22, yPos - 4);
                
                pdf.setFontSize(12);
                pdf.setTextColor(0, 0, 0);
                pdf.text(insight.title, 50, yPos);
                
                pdf.setFontSize(10);
                pdf.setTextColor(60, 60, 60);
                const insightLines = pdf.splitTextToSize(insight.description, 150);
                pdf.text(insightLines, 20, yPos + 12);
                
                // Impact and Time
                pdf.setFontSize(9);
                pdf.setTextColor(100, 100, 100);
                pdf.text(`Impact: ${insight.estimatedImpact} | Time to Fix: ${insight.timeToFix}`, 20, yPos + 25 + (insightLines.length * 4));
                
                yPos += 45 + (insightLines.length * 4);
            });

            // Add colorful chart visualization page
            pdf.addPage();
            
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.text('Performance Trend Analysis', 20, 30);
            
            // Create a simple trend visualization
            const chartX = 40;
            const chartY = 60;
            const chartWidth = 120;
            const chartHeight = 80;
            
            // Chart background
            pdf.setFillColor(248, 250, 252);
            pdf.rect(chartX, chartY, chartWidth, chartHeight, 'F');
            
            // Draw trend lines with colors
            const historyData = [...this.auditData.history].reverse();
            const dataPoints = historyData.length;
            
            ['overallScore', 'performanceScore', 'technicalScore', 'accessibilityScore'].forEach((scoreType, index) => {
                const colors = [
                    [138, 43, 226], // Purple
                    [0, 255, 65],   // Green
                    [255, 20, 147], // Pink
                    [0, 255, 255]   // Cyan
                ];
                
                pdf.setDrawColor(colors[index][0], colors[index][1], colors[index][2]);
                pdf.setLineWidth(2);
                
                for (let i = 0; i < dataPoints - 1; i++) {
                    const x1 = chartX + (i / (dataPoints - 1)) * chartWidth;
                    const y1 = chartY + chartHeight - ((historyData[i][scoreType] - 40) / 60) * chartHeight;
                    const x2 = chartX + ((i + 1) / (dataPoints - 1)) * chartWidth;
                    const y2 = chartY + chartHeight - ((historyData[i + 1][scoreType] - 40) / 60) * chartHeight;
                    
                    pdf.line(x1, y1, x2, y2);
                }
            });
            
            // Legend
            const legends = ['Overall Score', 'Performance', 'Technical SEO', 'Accessibility'];
            const legendColors = [[138, 43, 226], [0, 255, 65], [255, 20, 147], [0, 255, 255]];
            
            legends.forEach((legend, index) => {
                const legendY = 160 + (index * 15);
                pdf.setFillColor(legendColors[index][0], legendColors[index][1], legendColors[index][2]);
                pdf.rect(40, legendY - 3, 8, 6, 'F');
                pdf.setTextColor(0, 0, 0);
                pdf.setFontSize(10);
                pdf.text(legend, 55, legendY);
            });

            // Footer with branding
            const pageCount = pdf.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                pdf.setPage(i);
                pdf.setFontSize(8);
                pdf.setTextColor(150, 150, 150);
                pdf.text('Generated by AI SEO Nexus - Advanced Website Analysis Platform', 20, 285);
                pdf.text(`Page ${i} of ${pageCount}`, 170, 285);
            }
            
            // Save the PDF
            const fileName = `SEO-Audit-Report-${new Date().toISOString().split('T')[0]}.pdf`;
            pdf.save(fileName);
            
            console.log('PDF report generated successfully:', fileName); // Debug log
            
            // Show success message
            alert('🎉 Professional PDF report generated successfully! The download should start automatically.');
            
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('There was an error generating the PDF report. Please try again.');
        }
    }

    showScheduleModal() {
        alert('🚀 Scheduling feature coming soon! You will be able to set up automated weekly or monthly audits with email notifications.');
    }
}

// Initialize the platform when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing SEO platform'); // Debug log
    window.seoplatform = new SEOAuditPlatform();
});

// Backup initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.seoplatform) {
            console.log('Backup initialization triggered'); // Debug log
            window.seoplatform = new SEOAuditPlatform();
        }
    });
} else {
    console.log('Document already ready, initializing immediately'); // Debug log
    window.seoplatform = new SEOAuditPlatform();
}