document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
})

const update = {
    text: `
            <p class="p-2 border border-[#ff9200] text-xs rounded-sm text-white">New TNC Automation</p>
            <p class="p-2 border border-[#ff9200] text-xs rounded-sm text-white">Clean UI for easier navigation.</p>
            <p class="p-2 border border-[#ff9200] text-xs rounded-sm text-white">Added Live Casino/Casino icons to TNC Automation. Users now have the ability to add icons on their TNCs.</p>
            <p class="p-2 border border-[#ff9200] text-xs rounded-sm text-white">Added Newsletter Automation</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;
