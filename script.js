// 7mumGRec2benZzOv

// https://teudfbwszffmqcmcjaed.supabase.co
// sb_publishable_ZiqkTUexIbUZZTE0z9JW8Q_tSj0Zsc4
const createClient=supabase.createClient("https://supabase.co","sb_publishable_ZiqkTUexIbUZZTE0z9JW8Q_tSj0Zsc4")
const todoInp=document.querySelector("#todo-inp")
const show=document.querySelector("#show-todo")
const getData=async ()=>{
    show.innerHTML=`<img src="https://wikimedia.org style="width: 10px; height: 10px;">`
     const response=await createClient.from("todos").select("*")
     const todosData=response.data
     show.innerHTML = "";
     for(let i=0; i<todosData.length; i++){
        const textRaw = todosData[i].todo;
        const lettersWrapped = textRaw.split("").map((char, index) => {
            return `<span class="vacuum-letter" style="--char-index: ${index}">${char === ' ' ? '&nbsp;' : char}</span>`;
        }).join("");
        show.innerHTML+=`<li id="todo-${todosData[i].id}" class="reveal-row-item" style="--item-index: ${i}"><span class="todo-text-flow">${lettersWrapped}</span> <button class="cyber-trash-btn" onclick="deleteTodo(${todosData[i].id})">Delete</button></li>`
     }
}
const showTodo=async (event)=>{
    event.preventDefault();
    const todo=todoInp.value
    todoInp.value = "";
    await createClient.from("todos").insert({todo})
    getData()
}
const deleteTodo=async (id)=>{
    const todoElement=document.querySelector(`#todo-${id}`)
    if(todoElement){
        const btn = todoElement.querySelector("button");
        if(btn) btn.classList.add("lid-ripped-open");
        todoElement.classList.add("active-vacuum-vortex");
        
        setTimeout(async () => {
            todoElement.classList.add("dissolve-row-layout");
            setTimeout(async () => {
                if(todoElement){
                    todoElement.remove();
                }
                const response=await createClient.from("todos").delete().eq("id",id)
                if(response.error){
                    show.innerText=response.error.message
                    getData()
                }
            }, 500);
        }, 950);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("app-launch-canvas");
    getData();
});





