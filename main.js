const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;
for(let i=0; i<list_items.length; i++){
    
    const item = list_items[i];

    /**
     * Dragstart: Se ejecuta sobre un elemento cuando se inicia una operación de arrastre.
     * El usuario está solicitando arrastrar el elemento al que dispara el evento dragstart.
     * Durante este evento, un proceso de escucha ajustará cierto tipo de información como
     * los datos de la operación de arrastre y la imagen que se asocia con ella.
     */
    item.addEventListener('dragstart', function(e){
        console.log('dragstart');
        draggedItem = this;
        setTimeout(function(){
            item.style.display = 'none';
        }, 0);
    });

    /**
     * Dragend: El origen del arrastre recibirá un evento dragend cuando la operación se haya
     * completado, tanto si tuvo éxito como si no.
     */
    item.addEventListener('dragend', function(e){
        console.log('dragned');
        setTimeout(function(){
            draggedItem.style.display = 'block';
        }, 0);
    });
}

for(let j=0; j<lists.length; j++){
    const list = lists[j];

    /**
     * Dragover: Este evento se activa cuando el ratón/mouse se mueve sobre un elemento cuando está teniendo lugar una
     * operación de arrastre. Gran parte del tiempo, la operación que tiene lugar durante un proceso de escucha
     * será la misma que el evento dragenter.
     */
    list.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    /**
     * Dragenter: Se dispara cuando el ratón/mouse se mueve primero sobre un elemento, mientras está teniendo lugar una 
     * operación de arrastre. Un proceso de escucha de este evento debe indicar si se permite una operación de arrastre 
     * sobre esta ubicación. Si no hay procesos de escucha o éstos no realizan ninguna operación, entonces no se permite, 
     * de manera predeterminada, una operación de arrastre.
     */
    list.addEventListener('dragenter', function(e){
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0,0,0, 0.3)';
    });

    /**
     * Dragleave: Este evento se activa cuando el ratón/mouse sale de un elemento mientras que está teniendo lugar una operación de
     * arrastre. Los procesos de escucha deben eliminar cualquier resaltado o marcador de inserción que usan para la
     * información sobre el proceso de arrastre.
     */
    list.addEventListener('dragleave', function(e){
        this.style.backgroundColor = 'rgba(0,0,0, 0.1)';
    });


    list.addEventListener('drop', function(e){
        var children = this.querySelectorAll('.list-item');
        /*if(children.length==0){
            this.append(draggedItem);
        }*/
        this.append(draggedItem);
        this.style.backgroundColor = 'rgba(0,0,0, 0.1)';
    });
}