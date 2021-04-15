function Student(name) {

    function People(name) {

        this.task = [];
        let fn = () => {
            console.log("Hi! This is " + name);
            this.next();
        }
        this.task.push(fn);
        setTimeout(() => {
            this.next();
        }, 0)
        return this;
    }

    People.prototype.sleep = function (time) {
        let that = this;
        let fn = () => {
            setTimeout(function () {
                console.log("Wake up after " + time);
                that.next();
            }, time * 1000)
        }
        this.task.push(fn);
        return this;

    }
    People.prototype.sleepFirst = function (time) {
        let that = this;
        let fn = () => {
            setTimeout(function () {
                console.log("Wake up after " + time);
                that.next();
            }, time * 1000)
        }
        this.task.unshift(fn);
        return this;
    }
    People.prototype.study = function (course) {
        let fn = () => {
            console.log("Study " + course);
            this.next();
        }
        this.task.push(fn);
        return this;
    }

    People.prototype.next = function () {
        let fn = this.task.shift();
        fn && fn()
    }
    return new People(name);

}


// Student('fxy');
// Student('fxy').sleep(3).study('javascript');
Student('fxy').study('javascript').study('Vue');
//Student('fxy').sleepFirst(5).study('Ajax');