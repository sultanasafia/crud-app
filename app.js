var  rollV, nameV, genderV, addressV;

function readFom(){
    rollV = document.getElementById('rollno').value; 
    nameV = document.getElementById('name').value; 
    genderV = document.getElementById('gender').value; 
    addressV = document.getElementById('address').value; 
    console.log(rollV,nameV,genderV,addressV);
}
document.getElementById('create').onclick = function () {
    readFom();
    firebase.database().ref('student/'+ rollV).set({
        rollno:rollV,
        name:nameV,
        gender:genderV,
        address:addressV
    });
    Swal.fire('Data created')
     document.getElementById('rollno').value =''; 
     document.getElementById('name').value =''; 
     document.getElementById('gender').value =''; 
     document.getElementById('address').value ='';
};
document.getElementById('read').onclick = function () {
    readFom();
    firebase.database().ref('student/'+ rollV)
    .on("value", function(snap){
     document.getElementById('rollno').value = snap.val().rollno; 
     document.getElementById('name').value = snap.val().name; 
     document.getElementById('gender').value = snap.val().gender; 
     document.getElementById('address').value = snap.val().address;
});
};
document.getElementById('update').onclick = function () {
    readFom();
    firebase.database().ref('student/'+ rollV).update({
        // rollno:rollV,
        name:nameV,
        gender:genderV,
        address:addressV
    });
    Swal.fire("success");
    document.getElementById('rollno').value = ''; 
     document.getElementById('name').value = ''; 
     document.getElementById('gender').value = ''; 
     document.getElementById('address').value = '';
};
document.getElementById('delete').onclick = function () {
    readFom();
    firebase.database().ref('student/'+ rollV).remove()
    Swal.fire("Data deleted")
     document.getElementById('rollno').value = ''; 
     document.getElementById('name').value = ''; 
     document.getElementById('gender').value = ''; 
     document.getElementById('address').value = '';
    }      
   