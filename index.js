/*
let arr = [
    {名称:'动物', id: 1, parent: null},
    {名称:'狗', id: 2, parent: 1},
    {名称:'猫', id: 3, parent: 1}
]
{
    id: 1, 名称: '动物', children: [
        {id: 2, 名称: '狗', children: null},
        {id: 3, 名称: '猫', children: null},
    ]
}
*/

let arr = [
    {名称: '动物', id: 1, parent: null},
    {名称: '狗', id: 2, parent: 1},
    {名称: '猫', id: 3, parent: 1}
]

// arr.reduce(function(obj, item){
//     if(!item['parent']){
//         obj['名称'] = item['名称']
//         obj['id'] = item['id']
//     }else{
//         let c = {}
//         c['名称'] = item['名称']
//         c['id'] = item['id']
//         c['children'] = null
//         obj.children.push(c)
//     }
//     return obj
// }, {children:[]})

// 但是这种方法会把arr中原数据给覆盖掉
arr.reduce((obj,item)=>{
    if(!item.parent){
        obj.id = item.id
        obj['名称'] = item['名称']
    }else{
        obj.children.push(item)
        delete item.parent
        item.children = null
    }
    return obj
},{children: [], id: null})