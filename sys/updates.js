document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
    if(document.getElementById('whats-new').classList.contains('w-10')) {
        document.getElementById('whats-new').classList.replace('w-10', 'w-33')
        document.getElementById('whats-new').classList.add('outline')
        document.getElementById('whats-new').children[3].classList.remove('hidden')
    } else if (document.getElementById('whats-new').classList.contains('w-33')) {
        document.getElementById('whats-new').classList.replace('w-33', 'w-10')
        document.getElementById('whats-new').classList.remove('outline')
        document.getElementById('whats-new').children[3].classList.add('hidden')
    }
    
})

const update = {
    text: `
            <p class="p-2 border border-[#ff9200] text-sm rounded-sm text-white">TNC Automation version 1 is here!</p>
            <p class="p-2 border border-[#ff9200] text-sm rounded-sm text-white">A new look of TNC Automation. Introduced a clean UI for easier navigation, new tools and more!</p>
            <p class="p-2 border border-[#ff9200] text-sm rounded-sm text-white"><b>Insert Widget:</b> Added new widget for Indonesia</p>
            <p class="p-2 border border-[#ff9200] text-sm rounded-sm text-white"><b>Image Library:</b> Images of every region will only show depending on what region is selected.</p>
            <p class="p-2 border border-[#ff9200] text-sm rounded-sm text-white"><b>UI adjustement:</b> Removed 'Recommended Games Table' and 'Recommended Games List' on <i>Insert Widget</i> dropdown and moved to the toolbar.</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;
