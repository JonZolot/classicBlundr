import type { SyllogismNode } from "../types/syllogism";

export function renderSyllogismTree(node:SyllogismNode): HTMLElement{
    const container = document.createElement('div');
    container.className = 'syllogism-node'

    // Title
    const title = document.createElement('h3');
    title.textContent = node.title ?? ('(untitled syllogism)');
    container.appendChild(title);

    // Conclusion
    const conclusion = document.createElement('p');
    conclusion.innerHTML = `<strong>Conclusion:<strong> ${node.conclusion}`;
    container.appendChild(conclusion);

    // Premises
    if(node.premises && node.premises.length > 0){
        const premiseList = document.createElement('ul');
        premiseList.className = 'premise-list'

        node.premises.sort((a,b)=> a.order - b.order)
        .forEach((p)=>{
            const li = document.createElement('li');
            li.textContent = p.text;
            premiseList.appendChild(li);
        });

        container.appendChild(premiseList);
    }

    // Children (recursive)
    if (node.children && node.children.length > 0){
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children-container'

        node.children.forEach((child)=>{
            const childEl = renderSyllogismTree(child);
            childrenContainer.appendChild(childEl);
        });
        container.appendChild(childrenContainer);
    }
    return container;
}