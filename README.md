Методы класса:
публичные,
статические,
приватные#

event события, доступен только в синхронном коде.

constructor(){
super();
this.state: {
value: 0;
}
}

state = {
value: 5;
}

handleDecrement = () => {
value: this.state.value = 6; //Напрямую обновлять стейт нельзя!!!!
}

handleDecrement = () => {
this.setState({
value: this.state.value + 1,
})
}
// Таким способом мы в стейт загоняем просто новое значение не беря в учет значение которое там находилось
