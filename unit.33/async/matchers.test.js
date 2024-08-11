describe('Test mathcers', function(){
    test('compare toBe and toEqual', function(){
        const nums = [3,4,5];
        const copy = [...nums];
        const nums2 = nums;

        expect(copy).toEqual(nums)
        expect(nums2).toBe(nums)
    })

    test('to contain matcher', function(){
        const colors = ['red', 'orange']

        expect(colors).toContain('red')
        expect('egor').toContain('go')
    })

    test('to be greater than or equal', function(){
        expect(9).toBeGreaterThanOrEqual(2)
        expect(100).toBeGreaterThanOrEqual(100)
    })

    test('to be Truthy or Falsy', function(){
        expect('hi').toBeTruthy()
        expect('').toBeFalsy()
    })
    
    test('playing with any', function(){
        const randNum = Math.random() * 6;
        expect(randNum).toEqual(expect.any(Number))
        expect('ASDFJF').toEqual(expect.any(String))
    })

    test('playing with not', function(){
        const numLives = 9
        expect(numLives).not.toEqual(0)
        expect(numLives).not.toEqual(expect.any(Array))
    })


    
})







