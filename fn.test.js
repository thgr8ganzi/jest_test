const fn = require('./fn');

// test('1은 1이다',()=>{
//     expect(1).toBe(1);
// });
// test('2 + 3 = 5',()=>{
//    expect(fn.add(2,3)).toBe(5)
// });
// test('2 + 3 = 5',()=>{
//     expect(fn.add(2,3)).toEqual(5)
// });
// test('3+3!=5',()=>{
//     expect(fn.add(3,3)).not.toBe(5)
// });
// test('이름과 나이를 받아 객체 반환',()=>{
//    expect(fn.makeUser('Mike',30)).toEqual({
//        name:"Mike",
//        age:30,
//    })
// });
// test('이름과 나이를 받아 객체 반환',()=>{
//     expect(fn.makeUser('Mike',30)).toStrictEqual({
//         name:"Mike",
//         age:30,
//     })
// });
// test('null 은 null',()=>{
//    expect(null).toBeNull()
// });
// test('0은 false',()=>{
//     expect(fn.add(1,-1)).toBeFalsy()
// });
// test('truthy',()=>{
//     expect('abc').toBeTruthy()
// });
// test('id는 15자 이하',()=>{
//    const id = 'THE_BLACK_ORDER';
//    expect(id.length).toBeLessThanOrEqual(15);
// });
// test('pw는 4자리',()=>{
//     const pw = '1234';
//     expect(pw.length).toEqual(4);
// });
// test('0.1+0.2',()=>{
//    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3)
// });
// test('Hello World a글자 찾기',()=>{
//     expect('Hello World').toMatch(/h/i);
// })
// test('유저에 Mike 가 있나',()=>{
//     const user = 'Jane';
//     const userList = ['Tom','Jane','Kai']
//     expect(userList).toContain(user)
// })
// test('에러발생',()=>{
//     //특정에러 발생되는지 toThrow('에러종류')
//     expect(()=>fn.throwErr()).toThrow('xx')
// })
// test('3초후 Mike', done => {
   //  function callback(name){
   //     try {
   //         expect(name).toBe('Tom')
   //         done();
   //     }catch (err){
   //         done();
   //     }
   // }
   // fn.getName(callback)
// });
// test('3초후 받아올나이 30', async () => {
    // return fn.getAge().then(age =>{
    //     expect(age).toBe(30)
    // })
    // return expect(fn.getAge()).resolves.toBe(30)
    // return expect(fn.getAge()).rejects.toMatch('Error')
    // const age = await fn.getAge();
    // expect(age).toBe(30)
    // await expect(fn.getAge()).resolves.toBe(30)
// });
// let num = 10
// // afterEach(()=>{
// beforeEach(()=>{
//     num = 0;
// })
// test('num',()=>{
//     expect(num).toBe(0)
// })
// test('0더하기 1은 1',()=>{
//     num = fn.add(num, 1);
//     expect(num).toBe(1)
// })
// test('0더하기 2은 2',()=>{
//     num = fn.add(num , 2);
//     expect(num).toBe(2)
// })
// test('0더하기 3은 3',()=>{
//     num = fn.add(num , 3);
//     expect(num).toBe(3)
// })
// let user;
// beforeAll(async () => {
//     user = await fn.connectUserDb();
// })
// afterEach(async  ()=>{
//     return fn.disconnectDb();
// })
// test('이름은 Mike',()=>{
//     expect(user.name).toBe('Mike')
// })
// test('나이는 30',()=>{
//     expect(user.age).toBe(30)
// })
// test('성별은 남자',()=>{
//     expect(user.gender).toBe('Male')
// })
// describe('Car 관련 작업',()=>{
//     let car;
//     beforeAll(async () => {
//         car = await fn.connectCarDb();
//     })
//     afterEach(async  ()=>{
//         return fn.disconnectCarDb();
//     })
//     test('z4',()=>{
//         expect(car.name).toBe('z4')
//     })
//     test('내차는 BMW',()=>{
//         expect(car.brand).toBe('BMW')
//     })
//     test('정열의 빨강',()=>{
//         expect(car.color).toBe('red')
//     })
// })
// let num = 0;
// test.only('0더하기 1 은 1',()=>{
//     expect(fn.add(num,1)).toBe(1)
// })
// test('0더하기 2 은 2',()=>{
//     expect(fn.add(num,2)).toBe(2)
// })
// test.skip('0더하기 3 은 3',()=>{
//     expect(fn.add(num,3)).toBe(3)
//     num=10;
// })
// test('0더하기 4 은 4',()=>{
//     expect(fn.add(num,4)).toBe(4)
// })

/*mock*/
const mockFn = jest.fn();
// mockFn();
// mockFn(1);
// test('mockFn.mock.calls 는 2번호출',()=>{
//     expect(mockFn.mock.calls.length).toBe(2)
// })
// test('2번째로 호출된 함수에 전달된 첫번째 인수는 1',()=>{
//     expect(mockFn.mock.calls[1][0]).toBe(1)
// })
// function forEachAdd1(arr){
//     arr.forEach(num => {
//         mockFn(num+1)
//     })
// }
// forEachAdd1([10,20,30])
// test('함수 호출은 3번',()=>{
//     expect(mockFn.mock.calls.length).toBe(3)
// })
// test('전달된 값은 11, 21, 31',()=>{
//     expect(mockFn.mock.calls[0][0]).toBe(11)
//     expect(mockFn.mock.calls[1][0]).toBe(21)
//     expect(mockFn.mock.calls[2][0]).toBe(31)
// })
// mockFn
//     .mockReturnValueOnce(10)
//     .mockReturnValueOnce(20)
//     .mockReturnValueOnce(30)
//     .mockReturnValue(40);
// mockFn()
// mockFn()
// mockFn()
// mockFn()
// test('dd',()=>{
//     console.log(mockFn.mock.results)
//     expect('dd').toBe('dd')
// })
// mockFn
//     .mockReturnValueOnce(true)
//     .mockReturnValueOnce(false)
//     .mockReturnValueOnce(true)
//     .mockReturnValueOnce(false)
//     .mockReturnValue(true)
// const result = [1,2,3,4,5].filter(num => mockFn(num));
// test('홀수는 1,3,5',()=>{
//     expect(result).toStrictEqual([1,3,5])
// })
// mockFn
//     .mockResolvedValue({name:'Mike'})
// test('받아온 이름 Mike',()=>{
//     mockFn().then(res => {
//         expect(res.name).toBe('Mike')
//     })
// })
// jest.mock('./fn')
// fn.createUser.mockReturnValue({name:'Mike'})
// test('유저를 만든다',()=>{
//     const user = fn.createUser('Mike');
//     expect(user.name).toBe('Mike')
// })