document.addEventListener('DOMContentLoaded', function(){
	// Tab switching
	document.querySelectorAll('.apanaghr-search-tabs .tab').forEach(btn=>{
		btn.addEventListener('click', function(){
			document.querySelectorAll('.apanaghr-search-tabs .tab').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
			this.classList.add('active');
			this.setAttribute('aria-selected','true');
			// You can adapt behavior based on data-mode if needed:
			// const mode = this.dataset.mode;
		});
	});

	// Mic placeholder
	const mic = document.querySelector('.apanaghr-search-bar .icon.mic');
	if(mic){
		mic.addEventListener('click', function(){
			const input = document.getElementById('area-input');
			// Placeholder behaviour: indicate feature not available, or integrate Web Speech API here
			if(!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)){
				input.placeholder = 'Voice search not supported in this browser';
				setTimeout(()=> input.placeholder = 'Search by area or locality', 1500);
				return;
			}
			// Minimal Web Speech API example (may require user permission)
			const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			const rec = new SpeechRecognition();
			rec.lang = 'en-IN';
			rec.interimResults = false;
			rec.maxAlternatives = 1;
			rec.start();
			mic.classList.add('listening');
			rec.onresult = e => {
				const text = e.results[0][0].transcript;
				document.getElementById('area-input').value = text;
			};
			rec.onerror = ()=> {};
			rec.onend = ()=> mic.classList.remove('listening');
		});
	}

	// Detect location
	const locate = document.querySelector('.apanaghr-search-bar .icon.locate');
	if(locate){
		locate.addEventListener('click', function(){
			const input = document.getElementById('area-input');
			if(!navigator.geolocation){
				input.placeholder = 'Geolocation not supported';
				setTimeout(()=> input.placeholder = 'Search by area or locality', 1200);
				return;
			}
			this.disabled = true;
			this.title = 'Detecting location...';
			navigator.geolocation.getCurrentPosition(function(pos){
				const lat = pos.coords.latitude.toFixed(5);
				const lon = pos.coords.longitude.toFixed(5);
				// Simple behaviour: fill input with coords. Integrate reverse geocoding on server if needed.
				input.value = `Current location • ${lat}, ${lon}`;
				locate.disabled = false;
				locate.title = 'Detect my location';
			}, function(err){
				input.placeholder = 'Location unavailable';
				locate.disabled = false;
				locate.title = 'Detect my location';
				setTimeout(()=> input.placeholder = 'Search by area or locality', 1200);
			}, { timeout: 8000 });
		});
	}

	// Simple submit handler for demonstration
	const searchForm = document.querySelector('.apanaghr-search-bar');
	if(searchForm){
		searchForm.addEventListener('submit', function(e){
			e.preventDefault();
			const mode = document.querySelector('.apanaghr-search-tabs .tab.active')?.dataset?.mode || 'pg';
			const city = document.getElementById('city-select').value || 'All Cities';
			const query = document.getElementById('area-input').value || '';
			// Replace with your navigation / search call
			console.log('Search', { mode, city, query });
			// Example: window.location = `/search?mode=${mode}&city=${encodeURIComponent(city)}&q=${encodeURIComponent(query)}`;
		});
	}
});
