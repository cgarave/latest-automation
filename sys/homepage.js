const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;
        
    if(window.location.href.includes('index.html')) {
        switch(selection){
            case 'floating-banner.html': 
                window.location.href = 'sys/floating-banner/' + selection;
                break;
            case 'landing-page.html': 
                window.location.href = 'sys/landing-page/' + selection;
                break;
            case 'widgets.html': 
                window.location.href = 'sys/widgets/' + selection;
                break;
            case 'newsletter.html': 
                window.location.href = 'sys/newsletter/' + selection;
                break;
        }
    } else if (window.location.href.includes('floating-banner.html')) {
        switch(selection){
            case 'index.html':
                window.location.href = '../../' + selection;
                break;
            case 'landing-page.html': 
                window.location.href = '../landing-page/' + selection;
                break;
            case 'widgets.html': 
                window.location.href = '../widgets/' + selection;
                break;
            case 'newsletter.html': 
                window.location.href = '../newsletter/' + selection;
                break;
        }
    } else if (window.location.href.includes('landing-page.html')) {
        switch(selection){
            case 'index.html':
                window.location.href = '../../' + selection;
                break;
            case 'floating-banner.html': 
                window.location.href = '../floating-banner/' + selection;
                break;
            case 'widgets.html': 
                window.location.href = '../widgets/' + selection;
                break;
            case 'newsletter.html': 
                window.location.href = '../newsletter/' + selection;
                break;
        }
    } else if (window.location.href.includes('widgets.html')) {
        switch(selection){
            case 'index.html':
                window.location.href = '../../' + selection;
                break;
            case 'floating-banner.html': 
                window.location.href = '../floating-banner/' + selection;
                break;
            case 'landing-page.html': 
                window.location.href = '../landing-page/' + selection;
                break;
            case 'newsletter.html': 
                window.location.href = '../newsletter/' + selection;
                break;
        }
    } else if (window.location.href.includes('newsletter.html')) {
        switch(selection){
            case 'index.html':
                window.location.href = '../../' + selection;
                break;
            case 'floating-banner.html': 
                window.location.href = '../floating-banner/' + selection;
                break;
            case 'landing-page.html': 
                window.location.href = '../landing-page/' + selection;
                break;
            case 'widgets.html': 
                window.location.href = '../widgets/' + selection;
                break;
        }
    }
})

