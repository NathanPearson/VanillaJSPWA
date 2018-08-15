//allows creating nodes with vanilla js
//when taking result from api and displaying in UL
function createNode(element) {
    return document.createElement(element);
}
//appends to parent
function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;

        return people.map(function(person) {
            let li = createNode('li')
                span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);
        });
    })