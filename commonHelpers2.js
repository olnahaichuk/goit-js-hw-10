import"./assets/styles-2d3d30e9.js";import{i as o}from"./assets/vendor-77e16229.js";import{c as m}from"./assets/close-f39fe23f.js";const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEwSURBVHgBrZWBjcIwDEWTDbrBZYNjhG5wHaEbXDdoN0k3uGMC2AAxQdgANjCO+KFRSNwGYemrwo6f4zYxWhWMiBp+9KxvloH7xtqzjlrri6oxBhqWpcUc6wBdI79F8TR/l4O2SPaafJFC4RkFTRIbUXQXOzs4Tznghk4DdEp34aDmI1AELAJGVZoENeFjqEorQhHs091mv2wNFAv+/CmIoUgY34Zi0cEr8U0leAnKv39ZgwguwaWdvnAIh13lu3nC19qnx6X6jx0DEr5W4BI0nKw+djZSUgQfhLhNT1YIzGjFqEoj6R4g6MF+Tmy+0ujWUWYgxYtaVHZbdo7NnJDTrS3uACa8N1MAjrSM11ZtMVrmbbArLYPeRX4rdaalAvxoWT+s8N4vrDNr5r+mmxLsDpQiRtiOoB5DAAAAAElFTkSuQmCC",r={formEl:document.querySelector(".form"),delayEl:document.querySelector('input[name="delay"]')};r.formEl.addEventListener("submit",s=>{s.preventDefault();const A=parseInt(r.delayEl.value),t=document.querySelector('input[name="state"]:checked').value;new Promise((e,l)=>{setTimeout(()=>{t==="fulfilled"?e(A):l(A)},A)}).then(e=>{o.success({title:"Success",message:` Fulfilled promise in ${e}ms`,iconUrl:a,backgroundColor:"#59A10D",messageColor:"#fff",titleColor:"#fff"})}).catch(e=>{o.error({message:`❌ Rejected promise in ${e}ms`,backgroundColor:"#B51B1B",iconUrl:m,messageColor:"#fff",titleColor:"#fff"})})});
//# sourceMappingURL=commonHelpers2.js.map
