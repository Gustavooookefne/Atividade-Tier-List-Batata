document.addEventListener('DOMContentLoaded', () => {
 
    const draggableItems = document.querySelectorAll('.draggable');
    const dropZones = document.querySelectorAll('.tier, #items-pool');

    draggableItems.forEach(item => {

        item.addEventListener('dragstart', (e) => {
        
            e.dataTransfer.setData('text/plain', item.id);
    
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {

            item.classList.remove('dragging');
        });
    });


    dropZones.forEach(zone => {

        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over'); 

            const itemId = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(itemId);

            zone.appendChild(draggedElement);

            if (zone.classList.contains('tier')) {
                const tier = zone.getAttribute('data-tier');
                console.log(`${draggedElement.textContent.trim()} classificado como Tier ${tier}`);
            } else if (zone.id === 'items-pool') {
                console.log(`${draggedElement.textContent.trim()} retornado para o pool.`);
            }
        });
    });
});