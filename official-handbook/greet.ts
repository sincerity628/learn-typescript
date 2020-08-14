function greeter(person: string) {
  return `hello, ${person}`;
}

let user = 'becca';

document.body.innerHTML = greeter(user);