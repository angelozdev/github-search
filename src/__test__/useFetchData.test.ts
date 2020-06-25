import Axios from 'axios';


describe('Testing API', () => {
   let user: string = 'laravel';
   const API: string = `https://api.github.com/users/${user}`;

   it('Debería devolver la data con alguna propiedad', () => {
      Axios.get(API)
      .then(({data}) => {
         expect(Object.keys(data).length).toBeGreaterThan(0)
      })
   })

   it('Debería tener un nombre', (done) => {
      Axios.get(API)
      .then(({data}) => {
         expect(data).toHaveProperty('name')
         done()
      })
   })

   it('Debería tener el número de following', (done) => {
      Axios.get(API)
      .then(({data}) => {
         expect(data).toHaveProperty('following')
         done()
      })
   })

   it('Debería tener el número de followers', (done) => {
      Axios.get(API)
      .then(({data}) => {
         expect(data).toHaveProperty('followers')
         done()
      })
   })

   it('Debería tener un avatar', (done) => {
      Axios.get(API)
      .then(({data}) => {
         expect(data).toHaveProperty('avatar_url')
         done()
      })
   })
})