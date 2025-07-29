const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;
        
    if(window.location.href.includes('index.html')) {
        switch(selection){
            case 'landing-page.html': 
                window.location.href = 'sys/landing-page/' + selection;
                break;
        }
    } else if (window.location.href.includes('landing-page.html')) {
        switch(selection){
            case 'index.html':
                window.location.href = '../../' + selection;
                break;
        }
    }
})

