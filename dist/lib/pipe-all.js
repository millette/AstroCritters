import r from"critters";import i from"./parse.js";var c=async(t,p=2)=>{for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const e=t[o];if(!e)continue;switch(o){case"html":await i(`${t.path}**/*.html`,p,o,async a=>{typeof e.path>"u"&&typeof t.path<"u"&&(e.path=t.path),await new r(e).process(a)});break;default:break}}};export{c as default};
