const students = [];
let stdInfo = document.getElementById('stdInfo')
stdInfo.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let id = document.getElementById('id').value;
    let AdmissionDate = document.getElementById('Date').value;
    let time = document.getElementById('timing').value;
    let Batch = document.getElementById('Batch').value;

    if(name && age && id && AdmissionDate && time && Batch){
        const student = {
            name ,
            age ,
            id ,
            AdmissionDate ,
            time ,
            Batch
        };
        students.push(student);
        stdInfo.reset();
        stdInfo(alert('form successfully submited ✔'));
    }

    else{
        alert('please fill out all fields');
    }
})
document.getElementById('showData').addEventListener('click', () => {
    const jsonData = JSON.stringify(students, null, 2);
    document.getElementById('output').innerHTML = `<pre>${jsonData}</pre>`;
})
