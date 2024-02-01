const posts=[
    {title:'Post1'},
    {title:'Post2'}
]

function getPOST(){
setTimeout(()=>{
    let output='';
    for(var i=0;i<posts.length;i++){
       
       output=output+`<li>${posts[i].title}</li>`
    }
    document.body.innerHTML=output;
},1000)  
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve()
       },2000)
    })
}

const user=[
    {lastActiveTime:'13th of jan'}
]

function updateLastUserActivityTime (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          user.lastActiveTime=new Date().getTime();
            resolve(user.lastActiveTime)
        },3000)
    })
}

Promise.all([createPost({title:"POST3"}),updateLastUserActivityTime()]).then(([post,user])=>{
    console.log(posts,user);
})