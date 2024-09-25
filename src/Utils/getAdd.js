export const getAdd=(numbers)=>{
    let add= numbers.replace(/\\n/,',').split(',').reduce((acc,item)=>acc+Number(item),0)
    return add;
}