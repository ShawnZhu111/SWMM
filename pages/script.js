fetch('analysis_results.json')
    .then(response => response.json())
    .then(data => {
        const summaryDiv = document.getElementById('summary');
        const issuesDiv = document.getElementById('issues');

        // Display summary
        summaryDiv.innerHTML = '<h2>Summary of the Last 30 Days</h2>';
        data.summary.forEach(summary => {
            summaryDiv.innerHTML += '<p>' + summary + '</p>';
        });

        // Display issues
        if (data.issues.length > 0) {
            issuesDiv.innerHTML = '<h2>Issues Reported in the Last 30 Days</h2>';
            data.issues.forEach(issue => {
                issuesDiv.innerHTML += '<p><strong>' + issue.type + ':</strong> ' + issue.description + '</p>';
            });
        } else {
            issuesDiv.innerHTML = '<p>No issues detected in the last 30 days.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching analysis results:', error);
        document.getElementById('summary').innerHTML = '<p>Error loading data.</p>';
    });
