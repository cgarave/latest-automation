const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;

        switch(selection){
            case 'index.html':
                window.location.href = selection;
                break;
            case 'floating-banner.html': 
                window.location.href = selection;
                break;
            case 'landing-page.html': 
                window.location.href = selection;
                break;
            case 'widgets.html': 
                window.location.href = selection;
                break;
            case 'newsletter.html': 
                window.location.href = selection;
                break;
        }

})