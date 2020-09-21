import { setWith as setItem, get as getItem, isObject } from "lodash";

class HashTable {
  constructor({ Data, mappedKeys = ["firstName"] }) {
    this.mappedKeys = mappedKeys;
    this.data = Data;
    this.map = this.createMap(Data);
  }

  // hash(key) {
  //   return [...key].map((_, index) => key.charCodeAt(index)).join(".");
  // }
  hash0(key) {
    return [...key].map((_, index) => key.charCodeAt(index));
  }
  createMap() {
    return Object.entries(this.data).reduce((acc, cur) => {      
      const [id, value] = cur;
      Object.entries(value).forEach(([key, value]) => {
        if (!this.mappedKeys.includes(key)) return;
        // const path = this.hash(value.toString()) + ".ids";
        // const ids = getItem(acc, path);
        // acc = setItem(acc, path, ids ? [...ids, id] : [id], Object);
        acc = this.MySetItem(acc,this.hash0(value.toString()) ,id) ;
       
      });
      return acc;
    }, {});
  }
  MySetItem(acc,value,id){
    let ob = acc
    value.map(key =>{
      if(!ob[key]){ ob[key]={} } ;
      ob = ob[key]   
    })
    if(!ob['ids']){
      ob['ids']=[]
    }
    ob['ids'].push(id)
    return acc
  }
  MygetItem(map,path){
    let ob = map;
    [...path].map(key=>{ob = ob[key]});
    return ob
  }
  search(keyword) {
    // const path = this.hash(keyword.toString());
    // const searchResult = getItem(this.map, path);
    //here we must get all ids arrays? or just the first?    
    // return this.getIds(searchResult).map((id) => this.data[id]);
    const path = this.hash0(keyword.toString());
    const searchResult = this.MygetItem(this.map, path);
    return this.getIds(searchResult).map((id) => this.data[id]);
  }

  getIds(object) {
    if (!isObject(object)) return [];
    return Object.keys(object)
      .reduce((acc, cur) => {
        if (cur === "ids") acc.push(object[cur]);
        if (isObject(object[cur])) acc.push(this.getIds(object[cur]));
        return acc;
      }, [])
      .flat(Infinity);
  }
}

export default HashTable;
