import n from"fast-glob";import o from"fs";var c=async(s,a=async i=>i,e=async i=>await o.promises.readFile(i,"utf-8"))=>{const i=await n(s);for(const t of i)try{const r=await a(await e(t));if(!r)continue;await o.promises.writeFile(t,r,"utf-8")}catch{console.log("Error: Cannot inline file "+t+" CSS!")}};export{c as default};