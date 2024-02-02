function handleFormSubmit (event){
    event.preventDefault()

    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;

    const userDetails={
        username:username,
        email:email,
        phone:phone
    }
    axios.post('https://crudcrud.com/api/45282dc603ac467e9ce6c2b19ab75b42/DATA',userDetails)
    .then((response)=>{console.log(response)
             showUser(userDetails)})
    .catch((err)=>{console.log(err)});
  
    }  
    
window.addEventListener("DOMContentLoaded", ()=>{
        axios.get('https://crudcrud.com/api/45282dc603ac467e9ce6c2b19ab75b42/DATA')
        .then((response)=>{console.log(response)
                 for(var i=0;i<response.data.length;i++){
                 showUser(response.data[i]);
                 }
        })
        .catch((err)=>{console.log(err)}); 
})
function showUser(user){
    document.getElementById('username').value;
    document.getElementById('email').value;
    document.getElementById('phone').value;
    const parent=document.getElementById('listofitems');
    const child=`<li id=${user._id}> ${user.username}-${user.email}-${user.phone}
                            <button onclick=Deleteuser('${user._id}')> DELETE </button>
                            <button onclick=Edituser('${user.email}','${user.username}','${user.phone}','${user._id}')> EDIT </button>
                            </li>`
                           parent.innerHTML=parent.innerHTML+child;
                           

}

function Deleteuser (userId){
    axios.delete(`https://crudcrud.com/api/45282dc603ac467e9ce6c2b19ab75b42/DATA/${userId}`)
    .then((response)=>{ console.log(response)
        removeUSerFromScreen(userId)})
    .catch((err)=>{console.log(err)});
  
}

function removeUSerFromScreen(userId){
    const parentNode=document.getElementById('listofitems');
    const childNodeTOBeDeleted=document.getElementById(userId);
    if(childNodeTOBeDeleted){
        parentNode.removeChild(childNodeTOBeDeleted);
    }
}

function Edituser(email,username,phone,userId){
    document.getElementById('email').value=email;
    document.getElementById('username').value=username;
    document.getElementById('phone').value=phone;
    Deleteuser(userId);
}
