function fn() {
    console.log(this) ;//prints the window object
}

fn();

var fn2 = () => console.log(this);
fn2();