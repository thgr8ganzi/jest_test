const fn = {
    add : (num1,num2) => (num1 + num2),
    makeUser : (name,age) => ({name,age,gender:undefined}),
    throwErr:()=>{
        throw new Error('xx');
    },
    getName : callback =>{
        const name = 'Mike'
        setTimeout(()=>{
            callback(name);
            // throw new Error('서버에러...')
        },3000)
    },
    getAge : ()=>{
        const age = 30;
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(age)
                // rej('Error')
            },3000)
        });
    },
    connectUserDb : ()=>{
        return new Promise(res => {
            setTimeout(()=>{
                res({
                    name:'Mike',
                    age:30,
                    gender:'Male'
                })
            },500)
        })
    },
    disconnectDb : ()=>{
        return new Promise(res => {
            setTimeout(()=>{
                res();
            },500)
        })
    },
    connectCarDb : ()=>{
        return new Promise(res => {
            setTimeout(()=>{
                res({
                    brand:'BMW',
                    name:'z4',
                    color:'red'
                })
            },500)
        })
    },
    disconnectCarDb : ()=>{
        return new Promise(res => {
            setTimeout(()=>{
                res();
            },500)
        })
    },
    createUser : (name)=>{
        console.log('실제사용자 생성')
        return{
            name,
        }
    },
};
module.exports = fn;