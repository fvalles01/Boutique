import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:3000/api/product/';

class UserService {
  // On récupère tous les produits sur la vue
  getPublicProducts() {
    return axios.get(API_URL + 'getAllProducts');
  }
  // On récupère un produit avec l'id produit                                       
  async getUserOneProduct(id) {  
     return await axios.get(API_URL + 'getOneProduct/'+id);
  }
  // On récupère tous les produits pour un utilisateur
  async getUserProducts() {
    return await axios.get(API_URL + 'getProductsByUserId', { headers: authHeader()} );
  }
  // On récupère le menu de navigation pour l'utilisateur et on le protège avec une autorisation
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  // On récupère le menu de navigation pour le modérateur et on le protège avec une autorisation
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  // On récupère le menu de navigation pour l'administrateur et on le protège avec une autorisation
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();