fetch('logs.json')
  .then(response => response.json())
  .then(data => {
    const logContainer = document.getElementById('logList');
    logContainer.innerHTML = '';

    data.forEach(log => {
      const card = document.createElement('div');
      card.className = 'case-card';
      card.innerHTML = `
        <h3>🗂️ ${log.case_id}</h3>
        <p><strong>Type:</strong> ${log.type}</p>
        <p><strong>Date:</strong> ${log.date}</p>
        <p><strong>Location:</strong> ${log.location}</p>
        <p><strong>Summary:</strong> ${log.summary}</p>
        <p><strong>Status:</strong> <span class="status">${log.status}</span></p>
      `;
      logContainer.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('logList').innerHTML = '<p>⚠️ Unable to load logs.</p>';
    console.error('Log load error:', error);
  });
