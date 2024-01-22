// Service.js

class Service {
    constructor(httpClient) {
      this.httpClient = httpClient;
    }
  
    async getAllFilms() {
      return this.getRequest('http://localhost:8080/film/getAllFilms');
    }
  
    async getFilmsByType(type) {
      return this.getRequest(`http://localhost:8080/film/getFilmsByType/${type}`);
    }

    async getAllPeople() {
        return this.getRequest('http://localhost:8080/person/getAllPeople');
      }

    async getPersonsByIncomeAndCurrency(income, currency){
        return this.getRequest(`http://localhost:8080/person/getPersonsByIncomeAndCurrency?income=${income}&currency=${currency}`);
    }

    async getStudioAndProducerByJoin(filmTitle = 'titanic', filmYear = '1977') {
        if (filmTitle && filmYear) {
            const dynamicRequestUrl = `http://localhost:8080/film/getStudioAndProducerByJoin?filmTitle=${filmTitle}&filmYear=${filmYear}`;
            return this.getRequest(dynamicRequestUrl);
        } else {
            return this.getRequest('http://localhost:8080/film/getStudioAndProducerByJoin?filmTitle=titanic&filmYear=1977');
        }
    }

    async getFemaleWithTheLowestIncome() {
        return this.getRequest('http://localhost:8080/person/getFemaleWithTheLowestIncome');
    }

    async getFilmsByDuration(duration) {
        return this.getRequest(`http://localhost:8080/film/getFilmsByDuration/${duration}`);
    }

    async getPersonWithFilmType(personId, filmType) {
        return this.getRequest(`http://localhost:8080/person/getPersonWithFilmType?personId=${personId}&filmType=${filmType}`);
    }

    async getMinMaxIncome(){
        return this.getRequest('http://localhost:8080/person/minMaxIncomePerson');
    }

    async getActorPairs(){
        return this.getRequest('http://localhost:8080/dist/getActorPairs');
    }



    async getRequest(url) {
      try {
        const response = await this.httpClient.get(url);
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
  
  export default Service;
  