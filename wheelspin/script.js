document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('wheel');
    const spinBtn = document.getElementById('spinBtn');
    const taskResult = document.getElementById('taskResult');
    
    // Shortened task labels
    const tasks = [
        "Hanuman Chalisa 📿",
        "Meditate �",
        "Motivational Video 🎥",
        "Listen to Songs 🎵",
        "Favorite Snack 🍪",
        "Have Some Tea ☕",
        "Affirmations 💪",
        "Wear Saree 👘",
        "Dress Up 👗",
        "Take Shower 🚿",
        "Clean Room 🧹",
        "Time in Nature 🌿"
    ];
    
    // Full descriptions for results
    const fullTasks = [
        "Read Hanuman Chalisa",
        "Meditate for 10 minutes",
        "Watch a motivational video",
        "Listen to uplifting songs",
        "Enjoy your favorite snack",
        "Have a relaxing cup of tea",
        "Do positive affirmations",
        "Wear a beautiful saree",
        "Dress up nicely",
        "Take a refreshing shower",
        "Clean and organize your room",
        "Spend time in nature"
    ];
    
    // Create wheel sections
    tasks.forEach((task, index) => {
        const section = document.createElement('div');
        section.className = 'section';
        section.innerHTML = `<span>${task}</span>`;
        wheel.appendChild(section);
    });
    
    let canSpin = true;
    
    spinBtn.addEventListener('click', function() {
        if (!canSpin) return;
        
        canSpin = false;
        spinBtn.disabled = true;
        
        // Random rotation (5-10 full rotations plus a segment)
        const segmentAngle = 360 / tasks.length;
        const extraAngle = Math.floor(Math.random() * 360);
        const totalRotation = 1800 + (5 * 360) + extraAngle;
        
        wheel.style.transform = `rotate(${-totalRotation}deg)`;
        
        setTimeout(() => {
            const normalizedRotation = (totalRotation % 360);
            const segment = Math.floor(normalizedRotation / segmentAngle);
            const selectedTask = fullTasks[(tasks.length - segment - 1) % tasks.length];
            
            taskResult.textContent = selectedTask;
            spinBtn.disabled = false;
            canSpin = true;
        }, 4000);
    });
    
    // Initial animation
    setTimeout(() => {
        wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    }, 100);
});