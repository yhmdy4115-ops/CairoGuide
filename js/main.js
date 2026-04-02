// --- Data Base for Places ---
const placesData = [
    {
        id: 1,
        title: "Caffeine Escape",
        type: "cafe",
        typeName: "Cafe",
        desc: "A tranquil cafe offering the best specialty coffee in Cairo. With a warm wooden interior that encourages relaxation, it's the perfect spot to read a book or catch up with friends. Known for their signature V60 drips and matcha lattes.",
        img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
        location: "Zamalek, Cairo",
        amenities: ["Specialty Coffee", "Free Wi-Fi", "Quiet Music", "Pastries"],
        rating: "4.8",
        hours: "8:00 AM - 12:00 AM",
        price: "$$",
        phone: "+20 101 234 5678",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.5658607153!2d31.218579!3d30.054325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458412613d5a7d7%3A0xe16acb8ba0735bed!2sZamalek%2C%20Cairo!5e0!3m2!1sen!2seg!4v1711234567890!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 2,
        title: "Spice Hub Workspace",
        type: "study",
        typeName: "Workspace",
        desc: "The ultimate co-working space tailored for students and freelancers. Boasts natural sunlight, fully-equipped AC meeting rooms, and soundproof phone booths. Enjoy free flowing coffee and tea all day.",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
        location: "Maadi, Cairo",
        amenities: ["Silent Rooms", "Free Hot Drinks", "Ergonomic Chairs", "Monitors"],
        rating: "4.9",
        hours: "Open 24/7",
        price: "$",
        phone: "+20 122 345 6789",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.980838118021!2d31.2678601750062!3d29.951152074971206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458380486a63583%3A0x6a053c89b2f67232!2sMaadi%2C%20Cairo!5e0!3m2!1sen!2seg!4v1711234567891!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 3,
        title: "Zone Entertainment",
        type: "fun",
        typeName: "Entertainment",
        desc: "The largest bowling alley and arcade center in the city. An ideal spot to hang out with friends, destress after exams, and enjoy competitive VR gaming or classic pool tables.",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
        location: "New Cairo",
        amenities: ["Bowling", "Billiards", "Arcade Games", "Food Court"],
        rating: "4.7",
        hours: "12:00 PM - 2:00 AM",
        price: "$$$",
        phone: "+20 111 987 6543",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27622.064273395892!2d31.4116416!3d30.015024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd3d047b193%3A0xd14dfc4a17ded022!2sNew%20Cairo!5e0!3m2!1sen!2seg!4v1711234567892!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 4,
        title: "Design Cafe",
        type: "cafe",
        typeName: "Cafe",
        desc: "A unique venue combining wonderful coffee blends with an independent art gallery. The decor is incredibly modern, featuring glass aesthetics and artistic murals. Great for creative inspiration.",
        img: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
        location: "Heliopolis, Cairo",
        amenities: ["Art Gallery", "Fresh Baked Goods", "Outdoor Seating", "Pet Friendly"],
        rating: "4.6",
        hours: "9:00 AM - 11:00 PM",
        price: "$$$",
        phone: "+20 100 555 1234",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27608.20456108511!2d31.33234125!3d30.0911762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815cf1ceb483b%3A0x7d6b41249e0f6c20!2sHeliopolis%2C%20Cairo!5e0!3m2!1sen!2seg!4v1711234567893!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 5,
        title: "Focus Studios",
        type: "study",
        typeName: "Workspace",
        desc: "If you need absolute silence to finish your graduation project, this is the place. Designed specifically for deep focus work, offering private pods and high-speed fiber internet.",
        img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800&auto=format&fit=crop",
        location: "Dokki, Giza",
        amenities: ["Ultra-Fast Internet", "Private Pods", "Lounge Area", "Lockers"],
        rating: "4.8",
        hours: "8:00 AM - 1:00 AM",
        price: "$$",
        phone: "+20 102 333 4444",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27631.39345239965!2d31.2185566!3d29.9888921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7b2a64c4c7%3A0x1d5fbcda2c483cd4!2sDokki%2C%20Giza!5e0!3m2!1sen!2seg!4v1711234567894!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 6,
        title: "Escape Room Egypt",
        type: "fun",
        typeName: "Entertainment",
        desc: "Challenge your mind and work with your friends to escape from intensely immersive themed rooms before time runs out. Highly acclaimed puzzles and cinematic set designs.",
        img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
        location: "Sheraton, Cairo",
        amenities: ["Team Building", "Live Actors", "Themed Rooms", "Photography Area"],
        rating: "4.9",
        hours: "2:00 PM - 12:00 AM",
        price: "$$$",
        phone: "+20 155 666 7777",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27621.5!2d31.39!3d30.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsMDcnMDAiTiAzMcKwMjMnMDAiRQ!5e0!3m2!1sen!2seg!4v1711234567895!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 7,
        title: "Brew & Books",
        type: "cafe",
        typeName: "Cafe",
        desc: "A paradise for book lovers. This cafe offers a massive library of books you can read while sipping on their finest roast. Dark academia aesthetic combined with modern glass minimalism.",
        img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
        location: "Mohandeseen, Giza",
        amenities: ["Extensive Library", "Vintage Decor", "Espresso Bar"],
        rating: "4.7",
        hours: "10:00 AM - 11:00 PM",
        price: "$$",
        phone: "+20 114 555 8888",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27631.39345239965!2d31.2!3d30.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7b2a64c4c7%3A0x1d5fbcda2c483cd4!2sMohandeseen!5e0!3m2!1sen!2seg!4v1711234567894!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 8,
        title: "Makerspace Tech",
        type: "study",
        typeName: "Workspace",
        desc: "Not just a co-working space, but a hub for tech enthusiasts. Includes access to 3D printers, hardware tools, and a community of developers and creators.",
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
        location: "Smart Village, Giza",
        amenities: ["3D Printers", "Workshops", "Fast Internet", "Tech Community"],
        rating: "4.9",
        hours: "9:00 AM - 8:00 PM",
        price: "$$$",
        phone: "+20 100 999 1111",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27631.39!2d29.98!3d30.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSmart+Village!5e0!3m2!1sen!2seg!4v1711234567894!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 9,
        title: "Sky High Trampoline",
        type: "fun",
        typeName: "Entertainment",
        desc: "Jump your stress away in Egypt's biggest indoor trampoline park. Features dodgeball courts, foam pits, and ninja warrior obstacle courses.",
        img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        location: "Sheikh Zayed City",
        amenities: ["Trampolines", "Ninja Course", "Cafeteria", "Lockers"],
        rating: "4.6",
        hours: "11:00 AM - 12:00 AM",
        price: "$$$",
        phone: "+20 120 777 5555",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27631.39!2d29.98!3d30.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSheikh+Zayed!5e0!3m2!1sen!2seg!4v1711234567894!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 10,
        title: "Sunset Rooftop Lounge",
        type: "cafe",
        typeName: "Cafe",
        desc: "Experience breathtaking panoramic views of the Nile and Cairo tower at golden hour. Perfect for a relaxing evening, offering delightful mocktails and international desserts.",
        img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
        location: "Downtown Cairo",
        amenities: ["Nile View", "Outdoor Seating", "Mocktails", "Live Music"],
        rating: "4.5",
        hours: "4:00 PM - 2:00 AM",
        price: "$$$$",
        phone: "+20 122 888 2222",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27631.39!2d31.23!3d30.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDowntown+Cairo!5e0!3m2!1sen!2seg!4v1711234567894!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 11,
        title: "Cairo Jazz Club",
        type: "fun",
        typeName: "Music Venue",
        desc: "The ultimate destination for live music in Cairo. Hosting local bands and DJs every night. A historic venue known for its incredible atmosphere, amazing food, and musical diversity.",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
        location: "Agouza, Giza",
        amenities: ["Live Music", "DJ Sets", "Cocktails", "Dinner Menu"],
        rating: "4.8",
        hours: "8:00 PM - 3:00 AM",
        price: "$$$$",
        phone: "+20 106 880 4764",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6820063233!2d31.209!3d30.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAgouza!5e0!3m2!1sen!2seg!4v1711234567896!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 12,
        title: "The Greek Campus",
        type: "study",
        typeName: "Workspace Hub",
        desc: "Located in the heart of Downtown Cairo, this is the premier technology and innovation park. A massive hub featuring hundreds of startups, outdoor working areas, networking events, and high-tech facilities.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        location: "Downtown, Cairo",
        amenities: ["Outdoor Spaces", "Startup Hub", "Meeting Rooms", "Cafeteria"],
        rating: "4.9",
        hours: "8:00 AM - 10:00 PM",
        price: "$$$",
        phone: "+20 114 999 8888",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6820063233!2d31.23!3d30.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDowntown!5e0!3m2!1sen!2seg!4v1711234567897!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 13,
        title: "Sequoia Fine Dining",
        type: "cafe",
        typeName: "Restaurant & Cafe",
        desc: "Situated right on the edge of the Nile, offering an unforgettable dining and cafe experience. Famous for its white canopy aesthetic, gentle Nile breeze, and premium Lebanese-Egyptian fusion cuisine.",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        location: "Zamalek, Cairo",
        amenities: ["Nile View", "Fine Dining", "Shisha", "Valet Parking"],
        rating: "4.6",
        hours: "12:00 PM - 2:00 AM",
        price: "$$$$",
        phone: "+20 120 111 2222",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6820063233!2d31.22!3d30.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sZamalek!5e0!3m2!1sen!2seg!4v1711234567898!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 14,
        title: "Dokan Daoud",
        type: "cafe",
        typeName: "Traditional Cafe",
        desc: "A completely authentic Egyptian cafe experience mixed with modern comfort. Enjoy traditional Turkish coffee brewed on hot sand, authentic oriental pastries, and the vibrant local atmosphere.",
        img: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=800",
        location: "El Korba, Heliopolis",
        amenities: ["Turkish Coffee", "Oriental Sweets", "Historic Venue"],
        rating: "4.7",
        hours: "7:00 AM - 1:00 AM",
        price: "$",
        phone: "+20 100 234 9999",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6820063233!2d31.32!3d30.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKorba!5e0!3m2!1sen!2seg!4v1711234567899!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    },
    {
        id: 15,
        title: "Nile Kayaking Club",
        type: "fun",
        typeName: "Outdoor Activities",
        desc: "Experience Cairo from a completely distinct perspective! Rent a kayak and paddle through the Nile river at sunrise or sunset. A fantastic fun and sporty activity for friends and family.",
        img: "https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=800&auto=format&fit=crop",
        location: "Dokki, Giza",
        amenities: ["Kayaking", "Training Instructors", "Life Jackets", "Sunrise Tours"],
        rating: "4.8",
        hours: "6:00 AM - 6:00 PM",
        price: "$$",
        phone: "+20 100 567 1234",
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6820063233!2d31.22!3d30.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDokki!5e0!3m2!1sen!2seg!4v1711234567900!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>`
    }
];
// --- 1. Hero Slider Logic ---
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// --- 2. Render Places in Grid ---
function renderPlaces(filter = 'all') {
    const container = document.getElementById('places-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredPlaces = filter === 'all' 
        ? placesData 
        : placesData.filter(p => p.type === filter);
        
    filteredPlaces.forEach((place, index) => {
        const card = document.createElement('a');
        card.href = `place-details.html?id=${place.id}`;
        card.className = 'place-card fade-in-card';
        card.style.animationDelay = `${index * 0.08}s`;
        
        card.innerHTML = `
            <div class="place-img" style="background-image: url('${place.img}')"></div>
            <div class="place-details-compact">
                <span class="place-type">${place.typeName}</span>
                <h3 style="color: var(--primary-color); margin-bottom: 5px;">${place.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 10px;">📍 ${place.location}</p>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #555;">
                    <span>⭐ ${place.rating}</span>
                    <span>💸 ${place.price}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- 3. Filter Buttons Setup ---
function setupFilters() {
    const buttons = document.querySelectorAll('.btn-filter');
    
    // Check if there's a filter in URL created from index.html categories
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'all';
    
    if(initialFilter !== 'all') {
        buttons.forEach(b => b.classList.remove('active'));
        const targetBtn = document.querySelector(`.btn-filter[data-filter="${initialFilter}"]`);
        if(targetBtn) targetBtn.classList.add('active');
        renderPlaces(initialFilter);
    }
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filterValue = e.target.getAttribute('data-filter');
            renderPlaces(filterValue);
        });
    });
}

// --- 4. Load Details Page ---
function loadPlaceDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const placeId = parseInt(urlParams.get('id'));
    const renderArea = document.getElementById('details-render-area');
    
    if (!renderArea) return; // Not on details page
    
    const place = placesData.find(p => p.id === placeId);
    
    if (!place) {
        renderArea.innerHTML = `<h2 style="grid-column:span 2; text-align:center;">Sorry, place not found!</h2>`;
        return;
    }
    
    // Map Amenities to visually appealing Pills
    const amenitiesHtml = place.amenities.map(a => `<span class="amenity">✨ ${a}</span>`).join('');

    renderArea.innerHTML = `
        <div class="details-image-container">
            <img src="${place.img}" alt="${place.title}" class="details-image">
        </div>
        <div class="details-info">
            <span class="place-type" style="font-size: 1rem;">${place.typeName}</span>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h1 style="margin-bottom: 5px;">${place.title}</h1>
                <span style="font-size: 1.2rem; font-weight: bold; color: #fbbf24;">⭐ ${place.rating}</span>
            </div>
            
            <p class="location" style="margin-bottom: 10px;">📍 ${place.location}</p>
            <div style="margin-bottom: 20px; color: var(--text-dark); background: rgba(255,255,255,0.4); padding: 15px; border-radius: 15px;">
                <p><strong>🕒 Hours:</strong> ${place.hours}</p>
                <p><strong>💸 Price:</strong> ${place.price}</p>
                <p><strong>📞 Phone:</strong> ${place.phone}</p>
            </div>
            
            <p style="font-size: 1.1rem; line-height: 1.8;">${place.desc}</p>
            
            <div class="amenities">
                ${amenitiesHtml}
            </div>
            
            <button class="btn-primary" style="margin-top: 15px; width: 100%; border:none; padding:15px;" onclick="savePlaceEvent()">Save to Favorites 🤍</button>
            
            <div class="map-container">
                ${place.map}
            </div>
        </div>
    `;
    
    // Analytics details event injection
    // Sending a mock dataLayer push for analytics.
    if(window.dataLayer) {
        window.dataLayer.push({
            'event': 'view_item',
            'place_id': place.id,
            'place_name': place.title,
            'place_category': place.type
        });
    }
}

function savePlaceEvent() {
    alert('Added to Favorites! (Analytics push event triggered)');
    if(window.dataLayer) {
        window.dataLayer.push({
            'event': 'save_to_favorites',
            'timestamp': new Date()
        });
    }
}

// --- Theme Toggle Logic ---
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeBtn) themeBtn.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeBtn) themeBtn.textContent = '🌙';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const current = document.documentElement.getAttribute('data-theme');
            if (current === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️';
            }
        });
    }
}

// Ensure things start correctly
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initTheme();
});
