

const meds =[];

function addMed() {
    event.preventDefault();
    let newMed = {
        "medName":document.getElementById("fname").value,
        "medQtd":document.getElementById("fqtd").value,
        "medClass":document.getElementById("fclass").value,
    }  

    meds.push(newMed)
    renderTable()
    Cancelar()
}
function renderTable(){
    let table = document.getElementById("dataTable");
    table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Medicamento</th>
                <th>Quantidade</th>
                <th>Classe de Medicamento</th>
                <th>Remover</th>
            </tr>
        `
        for(let i=0; i < meds.length; i++) {
            table.innerHTML = table.innerHTML + `
            <tr>
                <td>${i}</td>
                <td>${meds[i].medName}</td>
                <td>${meds[i].medQtd}</td>
                <td>${meds[i].medClass}</td>
                <td><img src="assests/Imgs/del.png" onclick="removeMed(${i})"  width="20px"></td>
            </tr>
            `
        }
    }
    
    function removeMed(index) {
        meds.splice(index, 1)
        renderTable()
    }

    function Cancelar(){
        document.getElementById('fname').value = '';
        document.getElementById('fqtd').value = '';
        document.getElementById('fclass').value = '';
    }




    
    renderTable() 

