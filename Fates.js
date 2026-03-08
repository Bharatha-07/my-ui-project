// Earth is lost animation
        const target = document.getElementById("animateText");
        const letters = target.querySelectorAll(".span-text");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    letters.forEach(letter => letter.classList.add("animate"));
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(target);

        // Half opacity text
        const spans = document.querySelectorAll('.half-opacity-text span');
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    spans.forEach((span, index) => {
                        span.style.transitionDelay = `${index * 0.15}s`;
                    });
                    entry.target.classList.add('show');
                    observer1.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        spans.forEach(span => observer1.observe(span));

        // Marquee 1
        const marqSection = document.getElementById("marq-section");
        const marqText = document.getElementById("marq-text");
        let active = false;
        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                active = entry.isIntersecting;
            });
        }, { threshold: 0.3 });
        observer4.observe(marqSection);
        window.addEventListener("scroll", () => {
            if (!active) return;
            const rect = marqSection.getBoundingClientRect();
            const progress = (window.innerHeight - rect.top) * 0.2;
            marqText.style.transform = `translateX(${progress}px)`;
        });

        // Pods launched
        const launchBox = document.getElementById("launch-text-animate");
        const nums = launchBox.querySelectorAll(".launch-span");
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    nums.forEach(num => num.classList.add("animate1"));
                    obs.unobserve(launchBox);
                }
            });
        }, { threshold: 0.3 });
        obs.observe(launchBox);

        // Marquee 2
        const marqSection2 = document.getElementById("marq-section2");
        const marqText2 = document.getElementById("marq-text2");
        let active2 = false;
        const observer5 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                active2 = entry.isIntersecting;
            });
        }, { threshold: 0.3 });
        observer5.observe(marqSection2);
        window.addEventListener("scroll", () => {
            if (!active2) return;
            const rect2 = marqSection2.getBoundingClientRect();
            const progress2 = (window.innerHeight - rect2.top) * 0.2;
            marqText2.style.transform = `translateX(${progress2}px)`;
        });

        // Future section
        const futureSection = document.querySelector('.future-of-humanity');
        const futureText = futureSection.querySelectorAll('span, p');
        const futureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    futureText.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.15}s`;
                        el.classList.add('show');
                    });
                    futureObserver.unobserve(futureSection);
                }
            });
        }, { threshold: 0.3 });
        futureObserver.observe(futureSection);

        // Join section
        const joinSection = document.querySelector('.join-the-fates-program');
        const joinText = joinSection.querySelectorAll('span, p');
        const joinObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    joinText.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.15}s`;
                        el.classList.add('show');
                    });
                    joinObserver.unobserve(joinSection);
                }
            });
        }, { threshold: 0.3 });
        joinObserver.observe(joinSection);

        // Carousel
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-track img');
        const dots = document.querySelectorAll('.dot');
        let index = 0;
        let interval;

        function updateCarousel() {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function startAutoSlide() {
            interval = setInterval(() => {
                index = (index + 1) % slides.length;
                updateCarousel();
            }, 3000);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                index = i;
                updateCarousel();
                startAutoSlide();
            });
        });

        startAutoSlide();