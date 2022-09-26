const personas = [
    new Persona('Emma','Tapia'),
    new Persona('Miguel','Tapia'),
    new Persona('Mario','Martinez')
];

function mostrarPersonas(){
    console.log('Ejeculando metodo');
    let texto = '';
    for(let persona of personas){
        console.log(persona)
        texto += `<li>
        ${persona.nombre}
        ${persona.apellido}
        </li>`;
    }
    document.getElementById('personas').innerHTML = texto;

}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre']; 
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value !=''){
    const persona = new Persona(nombre.value,apellido.value);
    personas.push(persona);
    mostrarPersonas();
    }
    else{
        alert('No hay informacion');
    }
    
}