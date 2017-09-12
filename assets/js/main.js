function display(nav){
	var sections = new Array(7);
	sections[0]="home";
	sections[1]="quien";
	sections[2]="terapia";
	sections[3]="estrategica";
	sections[4]="hipnosis";
	sections[5]="aranceles";
	sections[6]="informacion";

	var busqueda;
	var mostrar;
	for (var i = 0; i<7; i++) {
		busqueda= document.getElementById(sections[i]);
		mostrar= busqueda.style.display;

		if (mostrar== "block"){
			busqueda.style.display = "none";
			if (nav == "next"){
				i++;
				if (i>6) i=0;
			}
			if (nav == "prev") {
				i--;
				if (i<0) i =6;
			}
			busqueda= document.getElementById(sections[i]);
			busqueda.style.display = "block";
			break;
		}
	}
}

function sectionNav(nav){
	var section= new Array(7);
	section[0]="home";
	section[1]="quien";
	section[2]="terapia";
	section[3]="estrategica";
	section[4]="hipnosis";
	section[5]="aranceles";
	section[6]="informacion";

	var buscar;
	var mostrar;

	for (var i = 0; i<7; i++) {
		buscar= document.getElementById(section[i]);
		mostrar= buscar.style.display='none';

		if (section[i] == nav) {
			buscar.style.display='block';
		}
	}
}
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});