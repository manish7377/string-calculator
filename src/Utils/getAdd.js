export const getAdd=(numbers)=>{
    let add= numbers.split(',').reduce((acc,item)=>acc+Number(item),0)

    return add;
}